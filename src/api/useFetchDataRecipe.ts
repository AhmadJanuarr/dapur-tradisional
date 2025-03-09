import axios from "axios"

const APIUrl = import.meta.env.VITE_API_URL
export async function fetchDataApi() {
  try {
    const response = await axios.get(`${APIUrl}/api/recipes`)
    const recipes = response.data?.data ?? response.data
    if (Array.isArray(recipes)) {
      return recipes
    }
    console.warn("Data tidak berbentuk array:", recipes)
    return recipes
  } catch (error) {
    console.error("Gagal mengambil data:", error)
    return []
  }
}
