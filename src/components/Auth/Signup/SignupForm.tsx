import axios from "axios"
import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { formSchemaRegister } from "@/schemas/FormSchema"
import { Form } from "@/components/ui/form"
import { FormFieldWrapper } from "@/components/FormField/FormFieldWrapper"
import { AuthOption } from "../AuthOption"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

type SignupProps = {
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SignupForm({ isLoading, setIsLoading }: SignupProps) {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const methods = useForm<z.infer<typeof formSchemaRegister>>({
    resolver: zodResolver(formSchemaRegister),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchemaRegister>) {
    setIsLoading(true)
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, values)
      const data = await response.data
      if (data.success === true) {
        toast.success("Pendaftaran berhasil")
        setIsLoading(false)
        navigate("/auth/login")
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
      setIsLoading(false)
    }
  }

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 ">
        <FormFieldWrapper
          name="name"
          label="Masukan Nama"
          placeholder="John Doe"
          inputType="text"
          formControl={methods.control}
        />
        <FormFieldWrapper
          name="email"
          label="Email"
          placeholder="example@gmail.com"
          inputType="email"
          formControl={methods.control}
        />
        <FormFieldWrapper
          name="password"
          label="Masukan Password"
          placeholder="*****"
          inputType="password"
          formControl={methods.control}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Loading..." : "Daftar Sekarang"}
        </Button>
        <AuthOption linkText="Sudah punya akun?" linkTo="login" />
      </form>
    </Form>
  )
}
