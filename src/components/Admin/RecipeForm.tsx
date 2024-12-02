import { Form } from "@/components/ui/form"
import { useFieldArray, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { RecipeFormValues } from "@/types/RecipeForm.types"
import axios, { AxiosError } from "axios"
import { toast } from "sonner"
import { FormSelect } from "./Form/FormSelect"
import { FormImage } from "./Form/FormImage"
import { FormColumn } from "./Form/FormColumn"
import { FormInput } from "./Form/FormInput"
import { FormArray } from "./Form/FormArray"
import { DialogClose, DialogFooter } from "@/components/ui/dialog"

export default function RecipeForm({ className }: { className?: string }) {
  const form = useForm<RecipeFormValues>({
    defaultValues: {
      title: "",
      description: "",
      image: "",
      category: "",
      ingredients: [],
      steps: [],
    },
  })
  const { register, handleSubmit, control } = form

  const ingredientsArray = useFieldArray({
    control,
    name: "ingredients",
  })

  const stepsArray = useFieldArray({
    control,
    name: "steps",
  })

  const onSubmit = handleSubmit(async (values) => {
    const formData = new FormData()

    formData.append("title", values.title)
    formData.append("description", values.description)
    formData.append("category", values.category)
    if (values.image) formData.append("image", values.image)
    formData.append("ingredients", JSON.stringify(values.ingredients))
    formData.append("steps", JSON.stringify(values.steps))

    console.log(values)
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/recipes`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      toast.success("Resep berhasil ditambahkan")
      form.reset()
    } catch (error) {
      const axiosError = error as AxiosError
      console.log(axiosError.response)
      toast.error("Terjadi kesalahan coba lagi")
    }
  })
  return (
    <Form {...form}>
      <form
        className={`flex flex-col items-start gap-4 ${className}`}
        onSubmit={onSubmit}
        encType="multipart/form-data"
        method="POST"
      >
        <div className="flex w-full gap-5">
          {/* Kolom Kiri */}
          <FormColumn>
            <FormInput name="title" label="Nama Resep" placeholder="Nama Resep" control={control} type="text" />
            <FormInput
              name="description"
              label="Deskripsi"
              placeholder="Deskripsi"
              type="text"
              control={control}
              isTextArea
            />
            <FormImage name="file" control={control} label="Gambar" type="file" />
            <FormSelect name="category" label="Kategori" placeholder="Masukan Kategori" control={control} />
          </FormColumn>

          {/* Kolom Kanan */}
          <FormColumn>
            <FormArray
              title="Bahan"
              fields={ingredientsArray.fields}
              prefix="ingredients"
              onAdd={(e) => {
                e.preventDefault()
                ingredientsArray.append("")
              }}
              onRemove={ingredientsArray.remove}
              register={register}
            />
            <FormArray
              title="Langkah"
              fields={stepsArray.fields}
              prefix="steps"
              onAdd={(e) => {
                e.preventDefault()
                stepsArray.append("")
              }}
              onRemove={stepsArray.remove}
              register={register}
            />
          </FormColumn>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="submit" variant="secondary">
              Simpan Resep
            </Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </Form>
  )
}
