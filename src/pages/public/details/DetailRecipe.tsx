import ErrorRecipe from "@/pages/error/RecipeError"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { BookIcon } from "lucide-react"
import { useParams } from "react-router-dom"

export default function DetailRecipe() {
  const { id } = useParams()
  const apiUrl = import.meta.env.VITE_API_URL
  const fetchRecipeById = async () => {
    const response = await axios.get(`${apiUrl}/api/recipes/${id}`)
    return response.data
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["recipe", id],
    queryFn: fetchRecipeById,
  })

  if (error) {
    return <ErrorRecipe />
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  const recipe = data?.data
  console.log(recipe)

  return (
    <div className="mx-auto mt-28 flex w-[80%] flex-col">
      <h1 className="py-2 font-domine text-3xl font-bold">{recipe.title}</h1>
      <p className="subheading pb-2">{recipe.description}</p>
      <div className="flex items-center gap-2 py-4">
        <BookIcon className="h-5 w-5 text-gray-700" />
        <p>{recipe.category.replace("_", " ")}</p>
      </div>

      <figure>
        <img
          src={`${apiUrl}/images/${recipe.image}`}
          alt={recipe.title}
          className="h-[800px] w-full rounded-xl shadow"
        />
        <figcaption>{recipe.title}</figcaption>
      </figure>

      <div className="mt-5">
        <h2 className="text-xl font-semibold">Bahan - Bahan:</h2>
        <ul className="ml-5 list-disc">
          {recipe.ingredients.map((ingredient: { id: number; name: string }) => (
            <li key={ingredient.id}>{ingredient.name}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <h2 className="text-xl font-semibold">Langkah - Langkah:</h2>
        <ul className="ml-5 list-decimal">
          {recipe.steps.map((step: { id: number; name: string }) => (
            <li key={step.id}>{step.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
