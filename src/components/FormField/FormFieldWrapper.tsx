import { Control } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Eye, EyeOff } from "lucide-react"

interface FormFieldWrapperProps<T> {
  name: string
  label: string
  placeholder: string
  description?: string
  inputType: string
  formControl: Control<T>
  setShowPassword?: (showPassword: boolean) => void
  showPassword?: boolean
}

export function FormFieldWrapper<T>({
  name,
  label,
  placeholder,
  description,
  inputType = "text",
  formControl,
  setShowPassword,
  showPassword,
}: FormFieldWrapperProps<T>) {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                placeholder={placeholder}
                type={inputType === "password" && showPassword ? "text" : inputType}
                {...field}
              />
              {inputType === "password" && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                  {showPassword ? (
                    <Eye onClick={() => setShowPassword!(!showPassword)} />
                  ) : (
                    <EyeOff onClick={() => setShowPassword!(!showPassword)} />
                  )}
                </div>
              )}
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
