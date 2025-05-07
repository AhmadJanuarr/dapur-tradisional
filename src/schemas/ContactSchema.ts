import { z } from "zod"

export const ContactFormSchema = z.object({
  name: z.string().min(1, {
    message: "Nama harus tidak boleh kosong",
  }),
  subject: z.string().min(1, {
    message: "Subjek harus tidak boleh kosong",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email harus tidak boleh kosong",
    })
    .email(),
  message: z.string().min(1, {
    message: "Pesan harus tidak boleh kosong",
  }),
})
