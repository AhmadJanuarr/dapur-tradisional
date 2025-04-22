import { useAuth } from "@/context/AuthContext"
import { AxiosWithAuth } from "@/lib/AxiosWithAuth"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

const APIURL = import.meta.env.VITE_API_URL

export const useFetchDataRecipeFavorite = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const fetchData = async () => {
    const token = localStorage.getItem("accessToken")
    if (!token) {
      toast.warning("Silahkan login terlebih dahulu", {
        action: { label: "Login Sekarang", onClick: () => navigate("/auth/login") },
      })
    }

    try {
      const response = await AxiosWithAuth.get(`${APIURL}/api/recipes/${user?.name.replace(" ", "-")}/favorite`)
      return response.data?.data ?? response.data
    } catch (error) {
      console.error(error)
    }
  }

  return { fetchData }
}
