import { useForm } from "react-hook-form"
import { Form } from "@/components/ui/form"
import { formSchemaLogin } from "@/schemas/FormSchema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormFieldWrapper } from "@/components/FormField/FormFieldWrapper"
import { Button } from "@/components/ui/button"
import { AuthOption } from "@/components/Auth/AuthOption"
import axios from "axios"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { useContext, useState } from "react"
import { AuthContext } from "@/context/AuthContext"
import { JwtPayload } from "jwt-decode"

interface JwtPayloadWithRole extends JwtPayload {
  role: string
}
export default function LoginForm({ setIsLoading }: { setIsLoading: React.Dispatch<React.SetStateAction<boolean>> }) {
  const { login } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const navigate = useNavigate()

  const methods = useForm<z.infer<typeof formSchemaLogin>>({
    resolver: zodResolver(formSchemaLogin),
    defaultValues: { email: "", password: "" },
  })

  const onSubmit = async (values: z.infer<typeof formSchemaLogin>) => {
    setIsLoading(true)
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, values)
      const data = await response.data
      if (response.status === 200) {
        localStorage.setItem("token", data.accessToken)
        localStorage.setItem("user", JSON.stringify(data.data))
        localStorage.setItem("profil", JSON.stringify(values))

        const { accessToken } = await data
        const decodeToken: JwtPayloadWithRole = jwtDecode(accessToken)
        login({ accessToken, ...decodeToken })

        if (decodeToken.role === "ADMIN") {
          setIsLoading(false)
          toast.success("Berhasil masuk sebagai admin")
          navigate("/admin/dashboard")
        } else if (decodeToken.role === "USER") {
          toast.success("Berhasil masuk")
          navigate("/recipes")
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
      setIsLoading(false)
    }
  }

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <FormFieldWrapper
          name="email"
          label="Email"
          placeholder="Email"
          inputType="email"
          formControl={methods.control}
        />
        <FormFieldWrapper
          name="password"
          label="Password"
          placeholder="Password"
          inputType="password"
          formControl={methods.control}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
        />
        <Button type="submit" className="w-full">
          Masuk
        </Button>
        <AuthOption linkText="Belum punya akun? " linkTo="register" />
      </form>
    </Form>
  )
}
