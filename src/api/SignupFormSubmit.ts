import { formSchemaRegister } from "@/schemas/FormSchema"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"
import { useAuth } from "@/context/AuthContext"
import axios from "axios"

export default function useSignupFormSubmit() {
  const { state, dispatch } = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (values: z.infer<typeof formSchemaRegister>) => {
    dispatch({ type: "START_LOADING" })
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, values)
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
  return { onSubmit, isLoading: state.isLoading }
}
