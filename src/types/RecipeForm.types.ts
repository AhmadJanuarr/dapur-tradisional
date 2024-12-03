/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldArrayWithId, UseFormRegister } from "react-hook-form";


export interface FormInputProps {
    name: "title" | "description"
    label: string
    placeholder: string
    type: string
    isTextArea?: boolean
    control: Control<RecipeFormValues>
}

export interface FormSelectProps {
    name: string
    label: string
    placeholder: string
    control: Control<RecipeFormValues>
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
    register: UseFormRegister<RecipeFormValues>;
}
export interface RecipeFormValues {
    title: string;
    description: string;
    image: string;
    category: string;
    ingredients: string[];
    steps: string[];
  }