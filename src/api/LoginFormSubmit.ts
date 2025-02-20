import { useAuth } from "@/context/AuthContext"
import { formSchemaLogin } from "@/schemas/FormSchema"
import { jwtDecode, JwtPayload } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"
import axios from "axios"

interface JwtPayloadWithRole extends JwtPayload {
  role: string
}

export default function useLoginFormSubmit() {
  const { login, state, dispatch } = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (values: z.infer<typeof formSchemaLogin>) => {
    dispatch({ type: "START_LOADING" })
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, values)
      const data = await response.data
      if (response.status === 200) {
        localStorage.setItem("token", data.accessToken)
        localStorage.setItem("user", JSON.stringify(data.data))

        const { accessToken } = await data
        const decodeToken: JwtPayloadWithRole = jwtDecode(accessToken)
        login({ accessToken, ...decodeToken })

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
  return { onSubmit, isLoading: state.isLoading }
}
