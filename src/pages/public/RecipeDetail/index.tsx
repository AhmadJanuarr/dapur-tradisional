import { useQuery } from "@tanstack/react-query"
import { BookIcon, Bookmark, Printer, Scale, Share2 } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Slash } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ApiResponse } from "@/types/Recipe.types"
import { toast } from "sonner"
import { useEffect, useState } from "react"
import ErrorRecipe from "@/pages/error/RecipeError"
import axios from "axios"
import RecipeDetailtSkeleton from "@/components/Skeleton/RecipeDetailtSkeleton"

type NutritionInfoProps = {
  nutrition: string
  value: number
  unit: string
}
const NutritionInfo = ({ nutrition, value, unit }: NutritionInfoProps) => {
  return (
    <div className="subheading flex flex-1 flex-col gap-4">
      <p className="font-semibold">{nutrition}</p>
      <p>
        {value} {unit}
      </p>
    </div>
  )
}

export function BreadcrumbWithCustomSeparator({ title }: { title: string }) {
  return (
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
}

const fetchRecipeById = async (slug: string | undefined, apiUrl: string): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(`${apiUrl}/api/recipes/${slug}`)
  return response.data
}
export default function DetailRecipe() {
  const [isClickFavorite, setIsClickFavorite] = useState(false)
  const { slug } = useParams()
  const navigate = useNavigate()
  const apiUrl = import.meta.env.VITE_API_URL
  const { data, isLoading, error } = useQuery<ApiResponse>({
    queryKey: ["recipe", slug],
    queryFn: () => fetchRecipeById(slug, apiUrl),
  })

  const handleClickFavorite = () => {
    const token = localStorage.getItem("token")
    if (!token) {
      toast.warning("Silahkan login terlebih dahulu", {
        action: { label: "Login Sekarang", onClick: () => navigate("/auth/login") },
      })
      return
    } else {
      setIsClickFavorite(!isClickFavorite)
    }
  }

  useEffect(() => {
    if (isClickFavorite) {
      toast("Resep berhasil ditambahkan ke favorit", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: { label: "Batalkan", onClick: () => console.log("undo") },
      })
    }
  }, [isClickFavorite])

  const recipe = data?.data
  if (error) return <ErrorRecipe />
  if (isLoading) return <RecipeDetailtSkeleton />
  if (!recipe) return []

  return (
    <div className="mx-auto mt-28 flex flex-col  md:w-[80%]" key={recipe.id}>
      <div className="md:pb-8">
        <BreadcrumbWithCustomSeparator title={recipe.title} />
      </div>
      <h1 className="heading py-2 font-bold">{recipe.title}</h1>
      <p className="subheading pb-2">{recipe.description}</p>
      <div className="flex flex-wrap items-center gap-5 py-5 md:flex-row">
        <div className="flex w-full gap-2 rounded-md md:w-auto">
          <Button
            className="rounded-md font-semibold"
            variant={`${isClickFavorite ? "default" : "secondary"}`}
            onClick={() => handleClickFavorite()}
          >
            <Bookmark className={`${isClickFavorite ? "text-white" : "text-gray-900"}`} />
            <p className="subheading">{isClickFavorite ? "Ditambahkan ke favorit" : "Tambah ke favorit"}</p>
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
      <figure>
        <img src={recipe.image} alt={recipe.title} className="w-full rounded-xl md:h-[800px]" />
      </figure>

      <div className="mt-5 flex gap-5 rounded-md bg-slate-100 p-5">
        <NutritionInfo nutrition="Kalori" value={recipe.nutrition.calories} unit="kcal" />
        <NutritionInfo nutrition="Protein" value={recipe.nutrition.protein} unit="g" />
        <NutritionInfo nutrition="Lemak" value={recipe.nutrition.fat} unit="g" />
        <NutritionInfo nutrition="Karbohidrat" value={recipe.nutrition.carbohydrate} unit="g" />
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
        <h2 className="py-5 font-playfair text-xl font-semibold">Bahan - Bahan:</h2>
        <ul className="flex list-inside list-disc flex-col gap-3 ">
          {recipe.ingredients.map((ingredient: { id: number; name: string }) => (
            <li key={ingredient.id} className="subheading">
              {ingredient.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="py-5 font-playfair text-xl font-semibold">Langkah - Langkah:</h2>
        <ul className="flex flex-col gap-5">
          {recipe.steps.map((step: { id: number; description: string }, index: number) => (
            <div className="flex items-center gap-3" key={step.id}>
              <span className="flex justify-center rounded-full bg-black px-3 py-1 text-white">{index + 1}</span>
              <li className="subheading">{step.description}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className="my-6">
        <h2 className="py-5 font-playfair text-xl font-semibold">Note & Tips</h2>
        <div className="rounded-md bg-sky-50">
          <p className="subheading p-5 text-sky-900">{recipe.tips}</p>
        </div>
      </div>
      <div className="my-6">
        <h2 className="py-5 font-playfair text-xl font-semibold">Reviews</h2>
      </div>
    </div>
  )
}
