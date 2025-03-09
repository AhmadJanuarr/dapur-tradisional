/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldArrayWithId, UseFormRegister } from "react-hook-form"

export interface FormInputProps {
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

export interface FormSelectProps {
  name: "difficulty" | "category"
  label: string
  placeholder: string
  control: Control<RecipeFormValues>
  categories: { value: string; label: string }[]
}

export interface FormImageProps {
  name: string
  label: string
  type: string
  control: Control<RecipeFormValues>
}

export interface FormArrayProps {
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
  ingredients: string[]
  steps: string[]
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
