import { z } from "zod";

export const formSchemaRegister = z.object({
    name: z.string().min(6, {
        message : "Nama minimal 6 karakter",
    }).max(50,{
        message : "Nama maksimal 50 karakter",
    }),
    email: z.string().min(1, {
        message : "Email harus tidak boleh kosong",
    }).email(),
    password: z.string().min(8,{
        message : "Password minimal 8 karakter",
    }),
})

export const formSchemaLogin = z.object({
    email: z.string().min(1,{
        message : "Email harus tidak boleh kosong",
    }).email(),
    password: z.string().min(8, {
        message : "Password minimal 8 karakter",
    }),
})

export const formSchemaRecipe = z.object({
    title: z.string().max(80),
    description: z.string().max(500),
    image: z.string(),
    category: z.string(),
    ingredients: z.array(z.string().max(100)),
    steps: z.array(z.string().max(500)),
})
