import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { formSchemaRegister } from "@/schemas/FormSchema"
import { Form } from "@/components/ui/form"
import { FormFieldWrapper } from "@/components/FormField/FormFieldWrapper"
import { AuthOption } from "../AuthOption"
import { useAuth } from "@/context/AuthContext"

export function SignupForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { signup } = useAuth()
  const methods = useForm<z.infer<typeof formSchemaRegister>>({
    resolver: zodResolver(formSchemaRegister),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(signup)} className="space-y-4 ">
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

        <Button type="submit" className="w-full">
          Daftar Sekarang
        </Button>
        <AuthOption linkText="Sudah punya akun? " linkTo="login" />
      </form>
    </Form>
  )
}
