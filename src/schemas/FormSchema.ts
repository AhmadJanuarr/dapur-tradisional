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

export const formSchemaRecipe = z.object({
    title: z.string().max(80),
    description: z.string().max(500),
    image: z.string(),
    category: z.string(),
    ingredients: z.array(z.string().max(100)),
    steps: z.array(z.string().max(500)),
})
