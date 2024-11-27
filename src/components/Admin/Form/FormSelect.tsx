import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormSelectProps } from "@/types/RecipeForm.types"

export const FormSelect = ({ name, placeholder, control, label }: FormSelectProps) => {
  return (
    <div className="flex flex-col gap-1">
      <FormField
        control={control}
        name="category"
        render={({ field }) => (
          <FormItem id={name}>
            <FormLabel>{label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Makanan_Berat">Makanan Berat</SelectItem>
                <SelectItem value="Makanan_Ringan">Makanan Ringan</SelectItem>
                <SelectItem value="Kue">Kue</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </div>
  )
}
