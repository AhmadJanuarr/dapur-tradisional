import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "../ui/textarea"
import React, { useState } from "react"
import axios from "axios"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { ContactFormSchema } from "@/schemas/ContactSchema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

type FieldProps = {
  label: string
  name: string
  type?: string
  placeholder?: string
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

type ContactFormData = z.infer<typeof ContactFormSchema>

const FieldInput = React.forwardRef<HTMLInputElement, FieldProps>(
  ({ label, name, type = "text", placeholder, error, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={name}>{label}</label>
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
          className="px-6 py-6 text-gray-500 shadow-none dark:border-white dark:text-white dark:placeholder:text-white"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    )
  },
)

export const FormFieldContact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  })
  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/email/send`, data)
      toast.success("Pesan berhasil dikirim")
      reset()
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(error.response.data.message)
        toast.error(error.response.data.message)
      } else {
        console.error("An unexpected error occurred", error)
        toast.error("Terjadi kesalahan saat mengirim pesan")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="subheading font-inter flex w-full flex-col gap-6">
        <FieldInput
          label="Nama anda"
          placeholder="Nama lengkap Anda"
          error={errors.name?.message}
          {...register("name")}
        />

        <FieldInput
          label="Subjek"
          placeholder="Topik pesan Anda"
          error={errors.subject?.message}
          {...register("subject")}
        />

        <FieldInput
          label="Email"
          type="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
        <div className="flex flex-col gap-3">
          <label htmlFor="message" className="font-inter">
            Pesan
          </label>
          <Textarea
            id="message"
            placeholder="Masukkan pesan Anda"
            rows={5}
            className="font-inter rounded-md px-6 py-5 text-gray-500 dark:border-white dark:text-white dark:placeholder:text-white"
            {...register("message")}
          />
          {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
        </div>
        <Button type="submit" variant="default" className="rounded-md py-5 font-semibold" disabled={isLoading}>
          {isLoading ? "Anda sedang mengirim" : "Kirim"}
        </Button>
      </div>
    </form>
  )
}
