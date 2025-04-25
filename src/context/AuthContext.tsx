/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { authReducer, initialState } from "@/lib/authReducer"
import { AxiosWithAuth } from "@/lib/AxiosWithAuth"
import { clearAuthStorage } from "@/lib/localStorage"
import { formSchemaLogin, formSchemaRegister } from "@/schemas/FormSchema"
import { AuthContextProps, AuthProviderProps, JwtPayloadWithRole } from "@/types/auth.types"
import { useQueryClient } from "@tanstack/react-query"
import { jwtDecode } from "jwt-decode"
import { createContext, useContext, useEffect, useReducer } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"
import axios from "axios"

const AuthContext = createContext<AuthContextProps>(null!)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  const user = JSON.parse(localStorage.getItem("user") || "{}")
  const queryClient = useQueryClient()
  const APIUrl = import.meta.env.VITE_API_URL
  const pathname = useLocation().pathname
  const navigate = useNavigate()
  useEffect(() => {
    console.log(user)
    const accessToken = localStorage.getItem("accessToken")
    const isAdminRoute = pathname.startsWith("/admin")

    if (!isAdminRoute && user?.role === "ADMIN") {
      clearAuthStorage()
    }
    if (accessToken) {
      try {
        const decoded: JwtPayloadWithRole = jwtDecode(accessToken)
        if (decoded.exp && decoded.exp < Date.now() / 1000) {
          clearAuthStorage()
        }
      } catch {
        clearAuthStorage()
      }
    }
  }, [navigate, pathname, queryClient, user, user?.id])

  const login = async (values: z.infer<typeof formSchemaLogin>) => {
    dispatch({ type: "START_LOADING" })
    try {
      const response = await axios.post(`${APIUrl}/api/auth/login`, values)
      const data = await response.data
      if (response.status === 200) {
        localStorage.setItem("accessToken", data.accessToken)
        localStorage.setItem("refreshToken", data.refreshToken)
        localStorage.setItem("user", JSON.stringify(data.data))
        queryClient.clear()
        queryClient.invalidateQueries({ queryKey: ["recipes"] })
        const { accessToken } = await data
        const decodeToken: JwtPayloadWithRole = jwtDecode(accessToken)

        if (decodeToken.role === "ADMIN") {
          setTimeout(() => {
            navigate("/admin/dashboard")
            toast.success("Berhasil masuk sebagai admin")
          }, 2000)
        } else if (decodeToken.role === "USER") {
          setTimeout(() => {
            navigate("/")
            toast.success("Selamat datang di dapur tradisional")
          }, 2000)
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message
        if (errorMessage.includes("Validasi gagal")) {
          toast.warning("Email tidak terdaftar")
        } else if (errorMessage.includes("Kata sandi salah")) {
          toast.warning("Kata sandi salah")
        } else {
          toast.error("Terjadi kesalahan saat masuk")
        }
      } else {
        console.error("Unknown error:", error)
        toast.error("Terjadi kesalahan yang tidak diketahui")
      }
    } finally {
      setTimeout(() => {
        dispatch({ type: "STOP_LOADING" })
      }, 2500)
    }
  }

  const signup = async (values: z.infer<typeof formSchemaRegister>) => {
    dispatch({ type: "START_LOADING" })

    try {
      const response = await axios.post(`${APIUrl}/api/auth/register`, values)
      const data = await response.data
      if (data.success === true) {
        setTimeout(() => {
          navigate("/auth/login")
          toast.success("Pendaftaran berhasil")
        }, 2000)
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message
        if (errorMessage.includes("Email sudah digunakan")) {
          toast.warning("Email sudah digunakan")
        } else {
          toast.error("Terjadi kesalahan pendaftaran akun")
        }
      } else {
        console.error("Unknown error:", error)
        toast.error("Terjadi kesalahan yang tidak diketahui")
      }
    } finally {
      setTimeout(() => {
        dispatch({ type: "STOP_LOADING" })
      }, 2500)
    }
  }

  const logout = async () => {
    const refreshToken = localStorage.getItem("refreshToken")
    if (refreshToken) {
      try {
        await axios.post(`${APIUrl}/api/auth/logout`, { refreshToken })
        clearAuthStorage()
        queryClient.clear()
        queryClient.invalidateQueries({ queryKey: ["recipes", user?.id] })
        queryClient.removeQueries({ queryKey: ["recipes", user?.id] })
        navigate("/")
      } catch (error) {
        console.log(error)
      }
    }
  }

  const updateName = async (newName: string) => {
    const accessToken = localStorage.getItem("accessToken")
    const user = localStorage.getItem("user")

    if (accessToken) {
      try {
        const data = JSON.parse(user!)
        const response = await AxiosWithAuth.put(`${APIUrl}/api/auth/profile/update-name`, {
          name: newName,
        })
        const updateUser = { ...data, name: newName }
        dispatch({ type: "UPDATE_NAME", payload: updateUser })
        localStorage.setItem("user", JSON.stringify(updateUser))
        toast.success("Nama pengguna berhasil diperbarui")
        return response
      } catch (error: any) {
        console.log(error.response.data.message || "Gagal memperbarui nama")
      }
    }
  }

  const updateEmail = async (newEmail: string) => {
    const accessToken = localStorage.getItem("accessToken")
    const user = localStorage.getItem("user")
    if (accessToken) {
      try {
        const data = JSON.parse(user!)
        const response = await AxiosWithAuth.put(`${APIUrl}/api/auth/profile/update-email`, {
          email: newEmail,
        })
        const updateUser = { ...data, email: newEmail }
        localStorage.setItem("user", JSON.stringify(updateUser))
        dispatch({ type: "UPDATE_USER", payload: updateUser })
        toast.success("Email pengguna berhasil diperbarui")
        return response
      } catch (error: any) {
        toast.error(error.response.data.message || "Gagal memperbarui email")
      }
    }
  }

  const updatePassword = async (newPassword: string, currentPassword: string) => {
    const accessToken = localStorage.getItem("accessToken")

    if (accessToken) {
      try {
        const response = await AxiosWithAuth.put(`${APIUrl}/api/auth/profile/update-password`, {
          newPassword,
          currentPassword,
        })
        toast.success("Password pengguna berhasil diperbarui")
        return response
      } catch (error: any) {
        toast.error(error.response.data.message || "Gagal memperbarui password")
      }
    }
  }

  const deleteUser = async () => {
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
      try {
        await AxiosWithAuth.delete(`${APIUrl}/api/auth/profile/delete-user`)
        toast.success("User berhasil dihapus")
        logout()
      } catch (error: any) {
        toast.error(error.response.data.message || "Gagal menghapus user")
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, state, deleteUser, updatePassword, updateEmail, updateName, login, signup, logout, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")
  return context
}
