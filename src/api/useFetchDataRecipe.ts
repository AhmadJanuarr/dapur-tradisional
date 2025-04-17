/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosWithAuth } from "@/lib/AxiosWithAuth"
import axios from "axios"
const APIUrl = import.meta.env.VITE_API_URL

export async function fetchDataApiRecipes({ queryKey }: any) {
  const [_, userId] = queryKey
  const token = localStorage.getItem("accessToken")
  const axiosInstance = token ? AxiosWithAuth : axios

  const response = await axiosInstance.get(`${APIUrl}/api/recipes?uid=${userId ?? " "}`)
  const recipes = response.data?.data ?? response.data

  if (!token || userId === "guest") {
    return recipes.map((r: any) => ({ ...r, isFavorite: false }))
  }

  return recipes
}
