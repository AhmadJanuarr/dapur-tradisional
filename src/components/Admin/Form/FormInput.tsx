import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RecipeFormInputProps } from "@/types/recipe.types"

export const FormInput = ({
  name,
  label,
  placeholder,
  control,
  type = "text",
  isTextArea = false,
}: RecipeFormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem id={name}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {isTextArea ? (
              <Textarea id={name} placeholder={placeholder} {...field} value={field.value?.toString() ?? ""} />
            ) : (
              <Input
                type={type}
                id={name}
                placeholder={placeholder}
                {...field}
                value={field.value?.toString() ?? ""}
                className="subheading"
              />
            )}
          </FormControl>
        </FormItem>
      )}
    />
  )
}
