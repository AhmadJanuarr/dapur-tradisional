import { Control, FieldPath } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form"
import { Input } from "../../ui/input"

interface FormFieldWrapperProps<T> {
  name: FieldPath<T>
  label: string
  placeholder: string
  description?: string
  inputType?: string
  formControl: Control<T>
}

export function FormFieldWrapper<T>({
  name,
  label,
  placeholder,
  description,
  inputType = "text",
  formControl,
}: FormFieldWrapperProps<T>) {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} type={inputType} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
