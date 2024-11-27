import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormImageProps } from "@/types/RecipeForm.types"

export const FormImage = ({ name, control, label, type }: FormImageProps) => {
  return (
    <div className="flex flex-col gap-1">
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
    </div>
  )
}
