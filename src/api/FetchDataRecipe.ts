import axios from "axios"

interface RecipeProps {
  title: string
  id: number
  image: string
  category: string
}

const APIUrl = import.meta.env.VITE_API_URL
const fetchDataApi = async (): Promise<RecipeProps[]> => {
  try {
    const { data } = await axios.get(`${APIUrl}/api/recipes`)
    console.log("API Response:", data)
    if (Array.isArray(data?.data)) {
      return data.data
    }
    console.warn("Data tidak berbentuk array:", data)
    return []
  } catch (error) {
    console.error("Gagal mengambil data:", error)
    return []
  }
}

export default fetchDataApi
