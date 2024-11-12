import axios from "axios"
import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../../ui/button"
import { formSchemaSignup } from "@/schemas/FormSchema"
import { Form } from "../../ui/form"
import { FormFieldWrapper } from "../FormField/FormFieldWrapper"
import { AuthOption } from "../AuthOption"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export default function SignupForm({
  isLoading,
  setIsLoading,
}: {
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const navigate = useNavigate()
  const methods = useForm<z.infer<typeof formSchemaSignup>>({
    resolver: zodResolver(formSchemaSignup),
    defaultValues: { name: "", email: "", password: "" },
  })

  async function onSubmit(values: z.infer<typeof formSchemaSignup>) {
    setIsLoading(true)
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/signup`, values)
      const data = await response.data
      if (data.success === true) {
        toast.success("Pendaftaran berhasil")
        console.log("Navigating to login...")
        setTimeout(() => {
          setIsLoading(false)
          navigate("/login")
        }, 3000)
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message
        if (errorMessage.includes("Email sudah digunakan")) {
          toast.error("Email sudah digunakan")
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
          placeholder="Ahmad Januar Amri"
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
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Loading..." : "Daftar Sekarang"}
        </Button>
        <AuthOption linkText="Sudah punya akun?" linkTo="login" />
      </form>
    </Form>
  )
}
