import { z } from "zod";

export const formSchemaSignup = z.object({
    name: z.string().min(6).max(50),
    email: z.string().email(),
    password: z.string().min(8),
})

export const formSchemaLogin = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})