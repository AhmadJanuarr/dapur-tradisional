/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { formSchemaLogin, formSchemaRegister } from "@/schemas/FormSchema"
import { jwtDecode, JwtPayload } from "jwt-decode"
import { createContext, ReactNode, useContext, useEffect, useReducer } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"
import axios from "axios"
import { useQueryClient } from "@tanstack/react-query"
import { AxiosWithAuth } from "@/lib/AxiosWithAuth"

interface AuthProviderProps {
  children: ReactNode
}

type LoginProps = {
  email: string
  password: string
}

type RegisterProps = {
  name: string
  email: string
  password: string
}
type User = {
  id: number
  name: string
  email: string
  role: string
}

interface AuthContextType {
  user: User
  logout: () => void
  state: any
  login: (userData: LoginProps) => void
  signup: (userData: RegisterProps) => void
  dispatch: React.Dispatch<any>
  updateName: (newName: string) => Promise<any>
  updateEmail: (newEmail: string) => Promise<any>
}
interface JwtPayloadWithRole extends JwtPayload {
  role: string
}

const initialState = { isLoading: false }
const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true }
    case "STOP_LOADING":
      return { ...state, isLoading: false }
    case "UPDATE_USER":
      return { ...state, user: action.payload }
    default:
      return state
  }
}

const AuthContext = createContext<AuthContextType>(null!)
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const queryClient = useQueryClient()
  const APIUrl = import.meta.env.VITE_API_URL
  const [state, dispatch] = useReducer(authReducer, initialState)
  const user = JSON.parse(localStorage.getItem("user") || "{}")
  const navigate = useNavigate()
  const pathname = useLocation().pathname

  useEffect(() => {
    const isAdminRoute = pathname.startsWith("/admin")
    const accessToken = localStorage.getItem("accessToken")

    console.log("User Role:", user)
    if (!isAdminRoute && user.role === "ADMIN") {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      localStorage.removeItem("user")
    }

    if (accessToken) {
      try {
        const expTime = new Date().getTime() / 1000
        const decodedToken: JwtPayloadWithRole = jwtDecode(accessToken)
        if (decodedToken.exp && decodedToken.exp < expTime) {
          localStorage.removeItem("accessToken")
          localStorage.removeItem("refreshToken")
          localStorage.removeItem("user")
          return
        }
      } catch (error) {
        console.error("Error decoding token:", error)
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("user")
      }
    }

    if (user?.id) {
      queryClient.invalidateQueries({ queryKey: ["recipes", user?.id] })
    }
  }, [pathname, queryClient, user, user?.id])

  const login = async (values: z.infer<typeof formSchemaLogin>) => {
    dispatch({ type: "START_LOADING" })
    try {
      const response = await axios.post(`${APIUrl}/api/auth/login`, values)
      const data = await response.data
      console.log(data.data)
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
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("user")
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
        localStorage.setItem("user", JSON.stringify(updateUser))
        dispatch({ type: "UPDATE_NAME", payload: updateUser })
        toast.success("Nama pengguna berhasil diperbarui")
        return response
      } catch (error) {
        console.log(error)
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
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <AuthContext.Provider value={{ updateEmail, updateName, login, user, signup, logout, state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
