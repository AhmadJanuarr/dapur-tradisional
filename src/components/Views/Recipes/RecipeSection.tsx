import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import RecipeCard from "@/components/Card/RecipeCard"
import HeadingSection from "./HeadingSection"
import RecipeSkeleton from "@/components/Skeleton/recipeSkeleton"
import ErrorRecipe from "@/pages/error/RecipeError"

interface RecipeProps {
  title: string
  id: number
  image: string
  category: string
}
const APIUrl = import.meta.env.VITE_API_URL
const fetchDataApi = async (): Promise<RecipeProps[]> => {
  const { data } = await axios.get(`${APIUrl}/api/recipes`)
  return Array.isArray(data?.data) ? data.data : []
}

export default function RecipesSection() {
  const navigate = useNavigate()
  const {
    data: recipes = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchDataApi,
    staleTime: 1000 * 60 * 5,
  })

  const NewestRecipe = [...recipes].sort(() => Math.random() - 0.5)
  const handleClick = (id: number) => navigate(`/recipes/${id}`)

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
          <div className="flex w-full flex-col flex-wrap gap-4 md:flex-row">
            {NewestRecipe.slice(0, 4).map((recipe) => (
              <RecipeCard
                key={recipe.id}
                image={`${APIUrl}/images/${recipe.image}`}
                title={recipe.title}
                category={recipe.category}
                handleClick={() => handleClick(recipe.id)}
              />
            ))}
          </div>
        )}
      </div>
      <HeadingSection heading="Makanan rutin kami" isShowButton cta="Lihat resep makanan rutin" />
    </section>
  )
}
