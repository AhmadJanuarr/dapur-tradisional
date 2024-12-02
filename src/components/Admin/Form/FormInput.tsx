import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FormInputProps } from "@/types/RecipeForm.types"

export const FormInput = ({ name, label, placeholder, control, type = "text", isTextArea = false }: FormInputProps) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem id={name}>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              {isTextArea ? (
                <Textarea id={name} placeholder={placeholder} {...field} />
              ) : (
                <Input type={type} id={name} placeholder={placeholder} {...field} />
              )}
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  )
}
