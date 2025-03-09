import { RecipeFormValues } from "@/types/RecipeForm.types"
import { useQueryClient } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { useFieldArray, useForm } from "react-hook-form"
import { toast } from "sonner"

const APIUrl = import.meta.env.VITE_API_URL
export function useRecipeForm(setOpenForm: React.Dispatch<React.SetStateAction<boolean>>) {
  const queryClient = useQueryClient()
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
      calories: null,
      protein: null,
      carbs: null,
      fat: null,
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

    try {
      await axios.post(`${APIUrl}/api/recipes`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      toast.success("Resep berhasil ditambahkan")
      queryClient.invalidateQueries({ queryKey: ["recipes"] })
      reset()
    } catch (error) {
      const axiosError = error as AxiosError
      console.log(axiosError.response)
      toast.error("Terjadi kesalahan coba lagi")
    } finally {
      setOpenForm(false)
    }
  })

  return {
    control,
    form,
    ingredientsArray,
    stepsArray,
    onSubmit,
    register,
  }
}
