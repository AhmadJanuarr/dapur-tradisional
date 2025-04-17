import { Recipe } from "@/types/Recipe.types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { AxiosWithAuth } from "@/lib/AxiosWithAuth"
import { useAuth } from "@/context/AuthContext"

export function useFavorite() {
  const { user } = useAuth()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const toggleFavorite = useMutation({
    //fungsi utama ini
    mutationFn: async (recipeId: number) => AxiosWithAuth.post(`/api/recipes/favorite/${recipeId}/toggle`),

    //fungsi yang dijalankan sebelum fungsi utama (optimistic update)
    onMutate: async (recipeId) => {
      await queryClient.cancelQueries({ queryKey: ["recipes", user?.id] })
      const previousRecipes = queryClient.getQueryData<Recipe[]>(["recipes", user?.id])
      queryClient.setQueryData<Recipe[]>(
        ["recipes", user?.id],
        (old) => old?.map((r) => (r.id === recipeId ? { ...r, isFavorite: !r.isFavorite } : r)) ?? [],
      )
      return { previousRecipes, recipeId }
    },

    //fungsi error ketika request gagal
    onError: (_err, _recipeId, context) => {
      if (context?.previousRecipes) {
        queryClient.setQueryData(["recipes"], context.previousRecipes)
      }
      toast.error("Silahkan login terlebih dahulu", {
        action: { label: "Login Sekarang", onClick: () => navigate("/auth/login") },
      })
    },
    onSuccess: (_data, _recipeId, context) => {
      const isUnFavorite = context?.previousRecipes?.find((r) => r.id === context.recipeId)?.isFavorite
      toast.success(isUnFavorite ? "menambahkan ke favorite : berhasil" : "menghapus dari favorite : berhasil")
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["recipes", user?.id] })
    },
  })

  return { handleClickFavorite: toggleFavorite.mutate }
}
