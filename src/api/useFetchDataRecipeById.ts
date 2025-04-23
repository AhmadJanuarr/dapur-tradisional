import { ApiResponse } from "@/types/recipe.types"
import axios from "axios"

export const fetchDataApiRecipeById = async (slug: string | undefined) => {
  const apiUrl = import.meta.env.VITE_API_URL
  const response = await axios.get<ApiResponse>(`${apiUrl}/api/recipes/${slug}`)
  if (!response) {
    throw new Error("Recipe not found")
  }
  const recipeById = response.data?.data ?? response.data
  return recipeById
}
