import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { FormSelect } from "./Form/FormSelect"
import { FormImage } from "./Form/FormImage"
import { FormInput } from "./Form/FormInput"
import { FormArray } from "./Form/FormArray"
import { FormColumn } from "./Form/FormColumn"
import { Loader2 } from "lucide-react"
import { useRecipeForm } from "@/api/useRecipeForm"

export default function RecipeForm({
  className,
  setOpenForm,
}: {
  className?: string
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { form, ingredientsArray, stepsArray, onSubmit, register, control } = useRecipeForm(setOpenForm)
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
          <Button type="submit" variant="default" className="rounded-md" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? <Loader2 className="animate-spin" /> : "Simpan Resep"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
