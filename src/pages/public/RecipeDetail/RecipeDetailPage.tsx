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
  <div className="subheading flex flex-1 flex-col gap-4">
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
        <BreadcrumbLink href="/resep">Resep</BreadcrumbLink>
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

export default function DetailRecipePage() {
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
      <h1 className="heading py-4 font-bold">{recipe.title}</h1>
      <p className="subheading pb-2">{recipe.description}</p>
      <div className="flex flex-wrap items-center gap-5 py-5 md:flex-row">
        <div className="flex w-full gap-2 rounded-md md:w-auto">
          <Button
            className="rounded-md font-semibold dark:bg-slate-100"
            variant={`${recipe.isFavorite ? "default" : "secondary"}`}
            onClick={onClickFavorite}
          >
            <Bookmark className={`${recipe.isFavorite ? "text-white" : "text-gray-900"}`} />
            <p className="subheading dark:text-black">{recipe.isFavorite ? "Hapus favorit" : "Tambah ke favorit"}</p>
          </Button>
        </div>
        <div className="subheading flex gap-2">
          <BookIcon className="h-5 w-5 text-gray-900" />
          <p>{recipe.category.replace("_", " ")}</p>
        </div>
        <div className={`gap subheading flex gap-2 text-center`}>
          <Scale className="h-5 w-5" />
          <p>{recipe.difficulty}</p>
        </div>
      </div>
      z
      <figure>
        <img src={recipe.image} alt={recipe.title} className="w-full rounded-xl md:h-[800px]" />
      </figure>
      <div className="mt-5 flex gap-5 rounded-md bg-slate-100 p-5 dark:text-black">
        <NutritionInfo nutrition="Kalori" value={recipe.nutrition.calories} unit="kcal" />
        <NutritionInfo nutrition="Protein" value={recipe.nutrition.protein} unit="g" />
        <NutritionInfo nutrition="Lemak" value={recipe.nutrition.fat} unit="g" />
        <NutritionInfo nutrition="Karbohidrat" value={recipe.nutrition.carbs} unit="g" />
      </div>
      <div className="mt-6 flex gap-5 ">
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
        <h2 className="font-playfair py-5 text-xl font-semibold">Bahan - Bahan:</h2>
        <ul className="flex list-inside list-disc flex-col gap-3 ">
          {recipe.ingredients.map((ingredient: { name: string }, index: number) => (
            <li key={index} className="subheading">
              {ingredient.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="font-playfair py-5 text-xl font-semibold">Langkah - Langkah:</h2>
        <ul className="flex flex-col gap-5">
          {recipe.steps.map((step: { description: string }, index: number) => (
            <div className="flex items-center gap-3" key={index}>
              <span className="flex justify-center rounded-full bg-black px-3 py-1 text-white">{index + 1}</span>
              <li className="subheading">{step.description}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className="my-6">
        <h2 className="font-playfair py-5 text-xl font-semibold">Note & Tips</h2>
        <div className="rounded-md bg-sky-50">
          <p className="subheading p-5 text-sky-900">{recipe.tips}</p>
        </div>
      </div>
      <div className="my-6">
        <h2 className="font-playfair py-5 text-xl font-semibold">Reviews</h2>
      </div>
    </div>
  )
}
