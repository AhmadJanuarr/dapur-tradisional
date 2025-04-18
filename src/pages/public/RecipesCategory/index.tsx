import { fetchDataApi } from "@/api/useFetchDataRecipe"
import { Recipe } from "@/types/Recipe.types"
import { useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import RecipeCard from "@/components/Card/RecipeCard"
import RecipeSkeleton from "@/components/Skeleton/RecipeSkeleton"
import HeadingSection from "@/Views/Recipes/HeadingSection"
import ErrorRecipe from "@/pages/error/RecipeError"

export default function RecipesCategory() {
  const { slug = "" } = useParams()
  const navigate = useNavigate()
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipes", slug],
    queryFn: fetchDataApi,
    staleTime: 0,
    refetchOnMount: true,
  })

  const food = data.filter((recipe: Recipe) => recipe.category === slug)
  const handleClick = (title: string) => {
    navigate(`/recipes/${title}`)
  }
  return (
    <section className="pb-64">
      <HeadingSection
        heading={`Resep ${slug.replace("_", " ")}`}
        description="Butuh ide untuk menu makan siang? Atau ingin mencoba resep dessert baru? Semua ada di sini."
        isShowButton
        cta="Lihat semua resep"
      />
      <div className="w-full">
        {isLoading ? (
          <RecipeSkeleton index={8} />
        ) : error ? (
          <ErrorRecipe />
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {food.map((recipe: Recipe) => (
              <RecipeCard
                key={recipe.id}
                img={recipe.image}
                title={recipe.title}
                category={recipe.category}
                onClick={() => handleClick(recipe.title)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
