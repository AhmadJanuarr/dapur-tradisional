import { Form } from "@/components/ui/form"
import { useFieldArray, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { RecipeFormValues } from "@/types/RecipeForm.types"
import axios, { AxiosError } from "axios"
import { toast } from "sonner"
import { FormSelect } from "./Form/FormSelect"
import { FormImage } from "./Form/FormImage"
import { FormInput } from "./Form/FormInput"
import { FormArray } from "./Form/FormArray"
import { FormColumn } from "./Form/FormColumn"

export default function RecipeForm({ className }: { className?: string }) {
  const form = useForm<RecipeFormValues>({
    defaultValues: {
      title: "",
      description: "",
      image: "",
      category: "",
      ingredients: [],
      steps: [],
      tips: "",
      difficulty: "",
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    },
  })
  const { control, handleSubmit, register, reset } = form
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
    formData.append("tips", values.tips)
    formData.append("difficulty", values.difficulty)
    formData.append("calories", String(Number(values.calories) || 0))
    formData.append("protein", String(Number(values.protein) || 0))
    formData.append("carbs", String(Number(values.carbs) || 0))
    formData.append("fat", String(Number(values.fat) || 0))

    console.log(values)
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/recipes`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      toast.success("Resep berhasil ditambahkan")
      reset()
    } catch (error) {
      const axiosError = error as AxiosError
      console.log(axiosError.response)
      toast.error("Terjadi kesalahan coba lagi")
    }
  })
  return (
    <Form {...form}>
      <form
        className={`w-fll flex flex-col items-start gap-4  ${className}`}
        onSubmit={onSubmit}
        encType="multipart/form-data"
        method="POST"
      >
        <div className="flex w-full flex-col gap-5">
          <div className="flex gap-5">
            <FormColumn>
              <FormInput name="title" label="Nama Resep" placeholder="Nama Resep" control={control} type="text" />
            </FormColumn>
            <FormColumn>
              <FormSelect
                name="category"
                label="Kategori"
                placeholder="Masukan Kategori"
                control={control}
                categories={[
                  { label: "Makanan Berat", value: "Makanan_Berat" },
                  { label: "Makanan Ringan", value: "Makanan_Ringan" },
                  { label: "Kue", value: "Kue" },
                ]}
              />
            </FormColumn>
          </div>
          <FormInput
            name="description"
            label="Deskripsi"
            placeholder="Deskripsi"
            type="text"
            control={control}
            isTextArea
          />
          <div className="flex gap-5">
            <FormColumn>
              <FormImage name="image" control={control} label="Gambar" type="file" />
              <FormInput name="calories" label="Kalori" placeholder="Kalori" control={control} type="text" />
              <FormInput name="protein" label="Protein" placeholder="Protein" control={control} type="text" />
            </FormColumn>
            <FormColumn>
              <FormSelect
                name="difficulty"
                label="Kesulitan"
                placeholder="Masukan Kesulitan"
                control={control}
                categories={[
                  { label: "Mudah", value: "Mudah" },
                  { label: "Sedang", value: "Sedang" },
                  { label: "Sulit", value: "Sulit" },
                ]}
              />
              <FormInput name="carbs" label="Karbohidrat" placeholder="Karbohidrat" control={control} type="text" />
              <FormInput name="fat" label="Lemak" placeholder="Lemak" control={control} type="text" />
            </FormColumn>
          </div>
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
          <FormInput name="tips" label="Tips" placeholder="Tips" control={control} type="text" isTextArea />
        </div>
        <div className="my-6 flex w-full sm:justify-center">
          <Button type="submit" variant="default" className="rounded-md">
            Simpan Resep
          </Button>
        </div>
      </form>
    </Form>
  )
}
