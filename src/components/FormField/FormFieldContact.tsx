import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "../ui/textarea"
import React, { useState } from "react"
import axios from "axios"
import { toast } from "sonner"

type FieldProps = {
  label: string
  name: string
  type?: string
  placeholder?: string
}

const FieldInput = ({ label, name, type = "text", placeholder }: FieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <Input
        required
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        className="px-6 py-6 text-gray-500 shadow-none dark:border-white dark:text-white dark:placeholder:text-white"
      />
    </div>
  )
}

export const FormFieldContact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const onSubmitSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const sendData = {
      name: formData.get("name"),
      subject: formData.get("subject"),
      email: formData.get("email"),
      message: formData.get("message"),
    }
    setIsLoading(true)
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/email/send`, sendData)
      toast.success("Pesan berhasil dikirim")
      setIsLoading(false)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(error.response.data.message)
        toast.error(error.response.data.message)
      } else {
        console.error("An unexpected error occurred", error)
        toast.error("Terjadi kesalahan saat mengirim pesan")
      }
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmitSendEmail}>
      <div className="subheading font-inter flex w-full flex-col gap-6">
        <FieldInput label="Nama" name="name" placeholder="Nama lengkap Anda" />
        <FieldInput label="Subjek" name="subject" placeholder="Topik pesan Anda" />
        <FieldInput label="Email" name="email" type="email" placeholder="you@example.com" />
        <div className="flex flex-col gap-3">
          <label htmlFor="message" className="font-inter">
            Pesan
          </label>
          <Textarea
            required
            name="message"
            id="message"
            placeholder="Masukkan pesan Anda"
            rows={5}
            className="font-inter rounded-md px-6 py-5 text-gray-500 dark:border-white dark:text-white dark:placeholder:text-white"
          />
        </div>
        <Button type="submit" variant="default" className="rounded-md py-5 font-semibold" disabled={isLoading}>
          {isLoading ? "Anda sedang mengirim" : "Kirim"}
        </Button>
      </div>
    </form>
  )
}
