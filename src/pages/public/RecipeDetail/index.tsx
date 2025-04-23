import { fetchDataApiRecipeById } from "@/api/useFetchDataRecipeById"
import { RecipeDetailtSkeleton } from "@/components/Skeleton/RecipeDetailtSkeleton"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { useFavorite } from "@/hooks/useFavorite"
import { ErrorRecipe } from "@/pages/error/RecipeError"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { BookIcon, Bookmark, Printer, Scale, Share2, Slash } from "lucide-react"
import { useParams } from "react-router-dom"

type NutritionInfoProps = {
  nutrition: string
  value: number
  unit: string
}
const NutritionInfo = ({ nutrition, value, unit }: NutritionInfoProps) => (
  <div className="flex flex-col flex-1 gap-4 subheading">
    <p className="font-semibold">{nutrition}</p>
    <p>
      {value} {unit}
    </p>
  </div>
)

const BreadcrumbWithCustomSeparator = ({ title }: { title: string }) => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <Slash />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="/recipes">Resep</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <Slash />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage>{title}</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
)

export default function DetailRecipe() {
  const { handleClickFavorite } = useFavorite()
  const { slug } = useParams()
  const queryClient = useQueryClient()

  const {
    data: recipe,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipe", slug],
    staleTime: 0,
    queryFn: () => fetchDataApiRecipeById(slug),
  })

  const onClickFavorite = async () => {
    handleClickFavorite(recipe?.id || 0)
    queryClient.invalidateQueries({ queryKey: ["recipe", slug] })
  }
  if (error) return <ErrorRecipe />
  if (isLoading) return <RecipeDetailtSkeleton />
  if (!recipe) return []

  return (
    <div className="mx-auto mt-28 flex flex-col md:w-[80%]" key={recipe.id}>
      <div className="pb-4 md:pb-8">
        <BreadcrumbWithCustomSeparator title={recipe.title} />
      </div>
      <h1 className="py-2 font-bold heading">{recipe.title}</h1>
      <p className="pb-2 subheading">{recipe.description}</p>
      <div className="flex flex-wrap items-center gap-5 py-5 md:flex-row">
        <div className="flex w-full gap-2 rounded-md md:w-auto">
          <Button
            className="font-semibold rounded-md dark:bg-slate-100"
            variant={`${recipe.isFavorite ? "default" : "secondary"}`}
            onClick={onClickFavorite}
          >
            <Bookmark className={`${recipe.isFavorite ? "text-white" : "text-gray-900"}`} />
            <p className="subheading dark:text-black">{recipe.isFavorite ? "Hapus favorit" : "Tambah ke favorit"}</p>
          </Button>
        </div>
        <div className="flex gap-2 subheading">
          <BookIcon className="w-5 h-5 text-gray-900" />
          <p>{recipe.category.replace("_", " ")}</p>
        </div>
        <div className={`gap subheading flex gap-2 text-center`}>
          <Scale className="w-5 h-5" />
          <p>{recipe.difficulty}</p>
        </div>
      </div>
      <figure>
        <img src={recipe.image} alt={recipe.title} className="w-full rounded-xl md:h-[800px]" />
      </figure>

      <div className="flex gap-5 p-5 mt-5 rounded-md bg-slate-100">
        <NutritionInfo nutrition="Kalori" value={recipe.nutrition.calories} unit="kcal" />
        <NutritionInfo nutrition="Protein" value={recipe.nutrition.protein} unit="g" />
        <NutritionInfo nutrition="Lemak" value={recipe.nutrition.fat} unit="g" />
        <NutritionInfo nutrition="Karbohidrat" value={recipe.nutrition.carbs} unit="g" />
      </div>
      <div className="flex gap-5 mt-6 ">
        <Button className="rounded-md">
          <Printer />
          <p className="subheading"> Print Resep</p>
        </Button>
        <Button variant="secondary" className="rounded-md">
          <Share2 />
          <p className="subheading">Bagikan Resep</p>
        </Button>
      </div>
      <div className="mt-6">
        <h2 className="py-5 text-xl font-semibold font-playfair">Bahan - Bahan:</h2>
        <ul className="flex flex-col gap-3 list-disc list-inside ">
          {recipe.ingredients.map((ingredient: { id: number; name: string }) => (
            <li key={ingredient.id} className="subheading">
              {ingredient.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="py-5 text-xl font-semibold font-playfair">Langkah - Langkah:</h2>
        <ul className="flex flex-col gap-5">
          {recipe.steps.map((step: { id: number; description: string }, index: number) => (
            <div className="flex items-center gap-3" key={step.id}>
              <span className="flex justify-center px-3 py-1 text-white bg-black rounded-full">{index + 1}</span>
              <li className="subheading">{step.description}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className="my-6">
        <h2 className="py-5 text-xl font-semibold font-playfair">Note & Tips</h2>
        <div className="rounded-md bg-sky-50">
          <p className="p-5 subheading text-sky-900">{recipe.tips}</p>
        </div>
      </div>
      <div className="my-6">
        <h2 className="py-5 text-xl font-semibold font-playfair">Reviews</h2>
      </div>
    </div>
  )
}
