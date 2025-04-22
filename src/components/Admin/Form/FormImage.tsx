import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RecipeFormImageProps } from "@/types/recipe.types"

export const FormImage = ({ name, control, label, type }: RecipeFormImageProps) => {
  return (
    <FormField
      control={control}
      name="image"
      render={({ field: { value, ...fieldProps } }) => (
        <FormItem id={name}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...fieldProps}
              id={name}
              type={type}
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files?.[0]
                fieldProps.onChange(file)
              }}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
