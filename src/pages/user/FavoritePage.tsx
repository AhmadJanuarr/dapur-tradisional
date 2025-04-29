import { useFetchDataRecipeFavorite } from "@/api/useFetchDataRecipeFavorite"
import { BookMarksButton } from "@/components/Button/Bookmark"
import { RecipeFavoriteNotFound } from "@/components/Recipe/RecipeFavoriteNotFound"
import { RecipeSkeleton } from "@/components/Skeleton/RecipeSkeleton"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { useFavorite } from "@/hooks/useFavorite"
import { RecipeData } from "@/types/recipe.types"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { ErrorRecipe } from "../error/RecipeError"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { useAuth } from "@/context/auth/useAuth"

export default function FavoritePage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { handleClickFavorite } = useFavorite()
  const {
    data: recipes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["favorite"],
    enabled: user !== undefined || true,
    staleTime: 0,
    queryFn: useFetchDataRecipeFavorite().fetchData,
  })

  const FetchingDataRecipeFavortie = async () => {
    handleClickFavorite(recipes?.id || 0)
    queryClient.invalidateQueries({ queryKey: ["favorite"] })
  }
  const handleClickViewDetail = (title: string) => {
    navigate(`/resep/${title}`)
  }

  if (isLoading) return <RecipeSkeleton index={8} />
  if (error) return <ErrorRecipe />
  if (recipes.length === 0) return <RecipeFavoriteNotFound />

  console.log(recipes)
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {recipes ? (
        recipes.map((item: RecipeData) => (
          <Card
            className="relative flex w-full flex-col rounded-xl border-none bg-slate-100 shadow-none dark:bg-darkBackground"
            key={item.id}
          >
            <div className="relative overflow-hidden">
              <div className="h-36 lg:h-40 2xl:h-48">
                <LazyLoadImage
                  src={item.image}
                  alt={item.title}
                  effect="blur"
                  className="h-full w-full rounded-t-xl object-cover shadow-xl"
                />
              </div>
              <div
                onClick={FetchingDataRecipeFavortie}
                className="absolute right-2 top-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow"
              >
                <BookMarksButton isFavorite={item.isFavorite} />
              </div>
            </div>
            <div className="flex h-32 flex-col justify-between gap-2 rounded-b-xl border border-slate-200 bg-white px-2 py-2 dark:bg-neutral-800 lg:h-[170px] lg:px-6 lg:py-4">
              <div className="flex flex-col gap-2 dark:text-black">
                <CardDescription className="dark:text-white">{item.category.replace("_", " ")}</CardDescription>
                <CardTitle className="mb-2 font-raleway dark:text-white lg:text-2xl">{item.title}</CardTitle>
              </div>
              <Button
                onClick={() => handleClickViewDetail(item.title)}
                variant="outline"
                className="rounded-xl border-[#ffeddf] px-10 text-[#f97316] hover:bg-[#f97316] hover:text-white lg:w-[60%] 2xl:w-[50%]"
              >
                <p className="subheading">Lihat Resep</p> <ChevronRight />
              </Button>
            </div>
          </Card>
        ))
      ) : (
        <RecipeFavoriteNotFound />
      )}
    </div>
  )
}
