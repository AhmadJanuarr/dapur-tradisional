import { fetchDataApiRecipes } from "@/api/useFetchDataRecipe"
import { Button } from "@/components/ui/button"
import { useFavorite } from "@/hooks/useFavorite"
import { RecipeData } from "@/types/recipe.types"
import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { InspirationCard } from "@/components/Card/InspirationCard"
import { RecipeCard } from "@/components/Card/RecipeCard"
import { HeadingSection } from "./HeadingSection"
import { RecipeSkeleton } from "@/components/Skeleton/RecipeSkeleton"
import { ErrorRecipe } from "@/pages/error/RecipeError"
import { useAuth } from "@/context/auth/useAuth"

export const RecipesSection = () => {
  const { user } = useAuth()
  const { handleClickFavorite } = useFavorite()
  const navigate = useNavigate()
  const {
    data: recipes = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipes", user?.id ?? "guest"],
    enabled: user !== undefined || true,
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    queryFn: fetchDataApiRecipes,
    placeholderData: (prevData) => prevData,
  })

  const handleClickViewDetail = (title: string) => navigate(`/resep/${title}`)
  return (
    <section>
      <HeadingSection
        heading="Inspirasi Masak Setiap Hari"
        description="Butuh ide untuk menu makan siang? Atau ingin mencoba resep dessert baru? Semua ada di sini."
        isShowButton
        cta="Lihat semua resep"
      />
      <div className="w-full ">
        {isLoading ? (
          <RecipeSkeleton index={4} />
        ) : error ? (
          <ErrorRecipe />
        ) : (
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
            {recipes.slice(0, 3).map((recipe: RecipeData) => (
              <InspirationCard
                key={recipe.id}
                img={recipe.image}
                title={recipe.title}
                category={recipe.category}
                description={recipe.description}
                difficulty={recipe.difficulty}
                isFavorite={recipe.isFavorite}
                onClickViewDetail={() => handleClickViewDetail(recipe.title.replace(" ", "-"))}
                onClickFavorite={() => handleClickFavorite(recipe.id)}
              />
            ))}
          </div>
        )}
      </div>
      <HeadingSection heading="Makanan rutin kami" isShowButton cta="Lihat resep makanan rutin" />
      <div className="w-full">
        {isLoading ? (
          <RecipeSkeleton index={4} />
        ) : error ? (
          <ErrorRecipe />
        ) : (
          <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
            {recipes.slice(0, 8).map((recipe: RecipeData) => (
              <RecipeCard
                key={recipe.id}
                img={recipe.image}
                title={recipe.title}
                category={recipe.category}
                isFavorite={recipe.isFavorite}
                onClickViewDetail={() => handleClickViewDetail(recipe.title.replace(" ", "-"))}
                onClickFavorite={() => handleClickFavorite(recipe.id)}
              />
            ))}
          </div>
        )}
        <div className="flex justify-center pt-10">
          <Button>Lihat semua resep</Button>
        </div>
      </div>
    </section>
  )
}
