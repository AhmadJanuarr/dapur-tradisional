// Import dependencies
import ErrorRecipe from "@/pages/error/RecipeError" // Komponen untuk menampilkan error
import { useQuery } from "@tanstack/react-query" // Hook untuk pengelolaan data async
import axios from "axios" // Library untuk melakukan request HTTP
import { BookIcon } from "lucide-react" // Icon untuk UI
import { useParams } from "react-router-dom" // Hook untuk mendapatkan parameter dari URL

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
    <div className="mx-auto flex w-[80%] flex-col border">
      <h1 className="py-2 text-3xl font-bold font-domine">{recipe.title}</h1>
      <p className="pb-2 subheading">{recipe.description}</p>
      <div className="flex items-center gap-2 py-4">
        <BookIcon className="w-5 h-5 text-gray-700" />
        <p>{recipe.category.replace("_", " ")}</p>
      </div>

      <figure>
        <img src={`${apiUrl}/images/${recipe.image}`} alt={recipe.title} className="w-full shadow rounded-xl" />
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

      {/* Langkah-langkah */}
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
