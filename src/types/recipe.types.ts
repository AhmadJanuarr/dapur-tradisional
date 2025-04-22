/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldArrayWithId, UseFormRegister } from "react-hook-form"

export type RecipeData = {
  id: number
  title: string
  description: string
  category: string
  image: string
  difficulty: string
  favorite?: string[]
  isFavorite?: boolean
  nutrition: {
    calories: number
    protein: number
    fat: number
    carbs: number
  }
  ingredients: { id: number; name: string }[]
  steps: { id: number; description: string }[]
  tips: string
}
export type ApiResponse = {
  data: RecipeData
}

export interface RecipeFormInputProps {
  name: keyof RecipeFormValues
  label: string
  placeholder: string
  type: string
  isTextArea?: boolean
  control: Control<RecipeFormValues>
}
export interface CategoriesProps {
  value: string
  label: string
}

export interface RecipeFormSelectProps {
  name: "difficulty" | "category"
  label: string
  placeholder: string
  control: Control<RecipeFormValues>
  categories: { value: string; label: string }[]
}

export interface RecipeFormImageProps {
  name: string
  label: string
  type: string
  control: Control<RecipeFormValues>
}

export interface RecipeFormArrayProps {
  title: string
  prefix: string
  fields: FieldArrayWithId<any, string>[]
  onAdd: (e: React.BaseSyntheticEvent) => void
  onRemove: (index: number) => void
  register: UseFormRegister<RecipeFormValues>
}
export interface RecipeFormValues {
  title: string
  description: string
  image: string
  category: string
  ingredients: { id: number; name: string }[]
  steps: { id: number; description: string }[]
  calories: number | null
  protein: number | null
  carbs: number | null
  fat: number | null
  difficulty: string
  tips: string
}

export interface PagintaionControlProps {
  current: number
  numbers: number[]
  prevPage: () => void
  changePage: (e: number) => void
  nextPage: () => void
}
