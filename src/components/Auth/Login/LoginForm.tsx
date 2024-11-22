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

export default function LoginForm() {
  const methods = useForm<z.infer<typeof formSchemaLogin>>({
    resolver: zodResolver(formSchemaLogin),
    defaultValues: { email: "", password: "" },
  })

  async function onSubmit(values: z.infer<typeof formSchemaLogin>) {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, values)
      const data = await response.data
      if (data.success === true) {
        toast.success("Login berhasil")
        console.log("Navigating to Home...")
      }
      console.log(data)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message
        if (errorMessage.includes("Pengguna tidak ditemukan")) {
          toast.error("Pengguna tidak ditemukan")
        } else {
          toast.error("Terjadi kesalahan coba lagi")
        }
      }
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
        />
        <Button type="submit" className="w-full">
          Masuk
        </Button>
        <AuthOption linkText="Belum punya akun?" linkTo="register" />
      </form>
    </Form>
  )
}
