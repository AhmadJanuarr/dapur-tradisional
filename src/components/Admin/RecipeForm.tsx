import { Form, FormControl } from "@/components/ui/form"
import { useFieldArray, useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { PlusIcon, TrashIcon } from "lucide-react"
import { FieldInputTypes, FieldsArrayTypes, FieldSelectTypes } from "@/types/RecipeForm.types"

const FormColumn = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-1/2 space-y-4">{children}</div>
}

const FormField = ({ id, label, placeholder, method, type = "text", isTextArea = false }: FieldInputTypes) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      {isTextArea ? (
        <Textarea id={id} placeholder={placeholder} {...method} />
      ) : (
        <Input type={type} id={id} placeholder={placeholder} {...method} />
      )}
    </div>
  )
}

const FormSelect = ({ id, placeholder, method, label }: FieldSelectTypes) => {
  return (
    <div className="flex flex-col gap-1">
      <label id={id} className="text-sm font-medium">
        {label}
      </label>
      <Select onValueChange={(value) => method.onChange(value)}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="Makanan_Ringan">Makanan Ringan</SelectItem>
          <SelectItem value="Makanan_Berat">Makanan Berat</SelectItem>
          <SelectItem value="Kue">Kue</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

const FormArray = ({ title, fields, method, onAdd, onRemove }: FieldsArrayTypes) => {
  return (
    <div className="space-y-2 p-4">
      <h3 className="font-semibold">{title}</h3>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center gap-2">
          <Input type="text" {...method} placeholder={`${title} ${index + 1}`} />
          <Button variant="destructive" size="icon" onClick={onRemove}>
            <TrashIcon />
          </Button>
        </div>
      ))}
      <Button variant="secondary" size="sm" onClick={onAdd}>
        <PlusIcon className="mr-2" /> Tambah {title}
      </Button>
    </div>
  )
}

export default function RecipeForm({ className }: { className?: string }) {
  const method = useForm()
  const ingredientsArray = useFieldArray({
    control: method.control,
    name: "ingredients",
  })

  const stepsArray = useFieldArray({
    control: method.control,
    name: "steps",
  })
  async function onSubmit(e) {
    e.preventDefault()
    console.log(e)
  }

  return (
    <Form {...method}>
      <form className={`flex flex-col items-start gap-4 ${className}`} onSubmit={onSubmit}>
        <div className="flex w-full gap-5">
          {/* Kolom Kiri */}
          <FormColumn>
            <FormField
              id="title"
              label="Nama Resep"
              placeholder="Nama Resep"
              method={method.register("title")}
              type="text"
            />

            <FormField
              id="description"
              label="Deskripsi"
              placeholder="Deskripsi"
              type="text"
              method={method.register("description")}
              isTextArea
            />

            <FormField
              id="image"
              label="Gambar Resep"
              placeholder="Masukan Gambar"
              method={method.register("image")}
              type="text"
            />

            <FormSelect
              id="category"
              label="Kategori"
              placeholder="Masukan Kategori"
              method={method.register("category")}
            />
          </FormColumn>

          {/* Kolom Kanan */}
          <FormColumn>
            <FormArray
              title="Bahan"
              fields={ingredientsArray.fields}
              method={method.register("ingredients")}
              prefix="ingredients"
              onAdd={() => ingredientsArray.append({ value: "" })}
              onRemove={ingredientsArray.remove}
            />
            <FormArray
              title="Langkah"
              fields={stepsArray.fields}
              method={method.register("steps")}
              prefix="steps"
              onAdd={() => stepsArray.append({ value: "" })}
              onRemove={stepsArray.remove}
            />
          </FormColumn>
        </div>
        <Button type="submit">Simpan Resep</Button>
      </form>
    </Form>
  )
}
