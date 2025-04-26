import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RecipeFormArrayProps } from "@/types/recipe.types"
import { PlusIcon, TrashIcon } from "lucide-react"

export const FormArray = ({ title, fields, prefix, onAdd, onRemove, register }: RecipeFormArrayProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <Label>{title}</Label>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center gap-2">
          <Input
            type="text"
            placeholder={`${title} ${index + 1}`}
            {...register(prefix === "ingredients" ? `${prefix}.${index}.name` : `${prefix}.${index}.description`)}
          />
          <Button variant="destructive" size="icon" onClick={() => onRemove(index)}>
            <TrashIcon />
          </Button>
        </div>
      ))}
      <Button variant="secondary" size="sm" onClick={onAdd}>
        <PlusIcon className="mr-2" />
        Tambah {title}
      </Button>
    </div>
  )
}
