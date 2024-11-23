/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldArrayWithId } from "react-hook-form";

export interface FieldInputTypes {
    id: string
    label: string
    placeholder: string
    method: { [key: string]: any }
    type: string
    isTextArea?: boolean
}

export interface FieldSelectTypes {
    id: string
    label: string
    placeholder: string
    method: { [key: string]: any }
}

export interface FieldsArrayTypes {
    title: string
    fields: FieldArrayWithId<any, string>[]
    method: { [key: string]: any }
    prefix?: string
    onAdd: () => void
    onRemove: () => void
}
