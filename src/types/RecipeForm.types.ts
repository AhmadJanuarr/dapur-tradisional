/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldArrayWithId, FieldValues, UseFormRegister } from "react-hook-form";

export interface FormInputProps {
    id: string
    label: string
    placeholder: string
    form: { [key: string]: any }
    type: string
    isTextArea?: boolean
}

export interface FormSelectProps {
    id: string
    label: string
    placeholder: string
    control: Control<FieldValues>
}

export interface FormArrayProps {
    title: string
    prefix: string
    fields: FieldArrayWithId<any, string>[]
    onAdd: () => void
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