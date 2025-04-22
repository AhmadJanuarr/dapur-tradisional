import { useForm } from "react-hook-form"
import { Form } from "@/components/ui/form"
import { formSchemaLogin } from "@/schemas/FormSchema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormFieldWrapper } from "@/components/FormField/FormFieldWrapper"
import { Button } from "@/components/ui/button"
import { AuthOption } from "@/components/Auth/AuthOption"
import { useState } from "react"
import { useAuth } from "@/context/AuthContext"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { login } = useAuth()
  const methods = useForm<z.infer<typeof formSchemaLogin>>({
    resolver: zodResolver(formSchemaLogin),
    defaultValues: { email: "", password: "" },
  })

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(login)} className="space-y-4">
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
        <Button type="submit" className="w-full rounded-sm">
          Masuk
        </Button>
        <AuthOption linkText="Belum punya akun? " linkTo="register" />
      </form>
    </Form>
  )
}
