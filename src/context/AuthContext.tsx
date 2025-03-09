/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { useState, ReactNode, createContext, useReducer, useContext } from "react"
import { jwtDecode, JwtPayload } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"
import { formSchemaLogin, formSchemaRegister } from "@/schemas/FormSchema"

interface AuthProviderProps {
  children: ReactNode
}

type UserProps = {
  name: string
  email: string
  password: string
}

interface AuthContextType {
  user: any
  logout: () => void
  state: any
  login: (userData: UserProps) => void
  signup: (userData: UserProps) => void
  dispatch: React.Dispatch<any>
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
    default:
      return state
  }
}

const AuthContext = createContext<AuthContextType>(null!)
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const APIUrl = import.meta.env.VITE_API_URL
  const [user, setUser] = useState({ role: "" })
  const [state, dispatch] = useReducer(authReducer, initialState)
  const navigate = useNavigate()

  const login = async (values: z.infer<typeof formSchemaLogin>) => {
    dispatch({ type: "START_LOADING" })
    try {
      const response = await axios.post(`${APIUrl}/api/auth/login`, values)
      const data = await response.data

      if (response.status === 200) {
        localStorage.setItem("accessToken", data.accessToken)
        localStorage.setItem("refreshToken", data.refreshToken)
        const { accessToken } = await data
        const decodeToken: JwtPayloadWithRole = jwtDecode(accessToken)

        setUser({ role: decodeToken.role })
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
  console.log(user)
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
        setUser({ role: "" })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, state, dispatch }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
