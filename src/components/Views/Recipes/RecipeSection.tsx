import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { fetchDataApi } from "@/api/useFetchDataRecipe"
import { Recipe } from "@/types/Recipe.types"
import RecipeCard from "@/components/Card/RecipeCard"
import HeadingSection from "./HeadingSection"
import RecipeSkeleton from "@/components/Skeleton/RecipeSkeleton"
import ErrorRecipe from "@/pages/error/RecipeError"

export default function RecipesSection() {
  const navigate = useNavigate()
  const {
    data: recipes = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchDataApi,
    staleTime: 0,
    refetchOnMount: true,
  })
  const NewestRecipe = Array.isArray(recipes) ? [...(recipes || [])].sort(() => Math.random() - 0.5) : []
  const handleClickViewDetail = (title: string) => navigate(`/recipes/${title}`)
  return (
    <section>
      <HeadingSection
        heading="Inspirasi Masak Setiap Hari"
        description="Butuh ide untuk menu makan siang? Atau ingin mencoba resep dessert baru? Semua ada di sini."
        isShowButton
        cta="Lihat semua resep"
      />
      <div className="w-full">
        {isLoading ? (
          <RecipeSkeleton index={4} />
        ) : error ? (
          <ErrorRecipe />
        ) : (
          <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
            {NewestRecipe.slice(0, 4).map((recipe: Recipe) => (
              <RecipeCard
                key={recipe.id}
                image={recipe.image}
                title={recipe.title}
                category={recipe.category}
                handleClickViewDetail={() => handleClickViewDetail(recipe.title)}
              />
            ))}
          </div>
        )}
      </div>
      <HeadingSection heading="Makanan rutin kami" isShowButton cta="Lihat resep makanan rutin" />
    </section>
  )
}
