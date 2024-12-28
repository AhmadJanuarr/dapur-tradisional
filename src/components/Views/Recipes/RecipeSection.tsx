import RecipeCard from "@/components/Card/RecipeCard"
import HeadingSection from "./HeadingSection"
import RecipeSkeleton from "@/components/Skeleton/recipeSkeleton"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface RecipeProps {
  title: string
  id: number
  image: string
  category: string
}

export default function RecipesSection() {
  const apiUrl = import.meta.env.VITE_API_URL

  const fetchData = async () => {
    const { data } = await axios.get(`${apiUrl}/api/recipes`)
    return data
  }
  const { data, isLoading, error } = useQuery({ queryKey: ["recipes"], queryFn: fetchData })

  // Validasi data
  const recipes = Array.isArray(data?.data) ? data?.data : []
  const sortNewRecipe = [...recipes].sort(() => Math.random() - 0.5)
  const recipeMakananBerat = recipes.filter((recipe: RecipeProps) => recipe.category === "Makanan_Berat")
  const recipesMakananRingan = recipes.filter((recipe: RecipeProps) => recipe.category === "Makanan_Ringan")
  const recipeKue = recipes.filter((recipe: RecipeProps) => recipe.category === "Kue")

  console.log(recipes)
  if (error) {
    return <p className="text-red-500 ">An error has occurred: {error.message}</p>
  }

  const renderRecipes = (recipesToRender: RecipeProps[]) =>
    recipesToRender
      .slice(0, 8)
      .map((recipe: RecipeProps) => (
        <RecipeCard
          key={recipe.id}
          image={`${apiUrl}/images/${recipe.image}`}
          title={recipe.title}
          category={recipe.category}
        />
      ))

  return (
    <section>
      {/* Resep Terbaru */}
      <HeadingSection
        heading="Resep Terbaru"
        description="Temukan resep favoritmu berdasarkan kategori"
        isShowButton={false}
      />
      <div className="flex flex-wrap w-full">
        {isLoading ? <RecipeSkeleton index={8} /> : renderRecipes(sortNewRecipe)}
      </div>

      {/* Resep Makanan Berat */}
      <HeadingSection
        heading="Resep Makanan Berat"
        description="Temukan resep favoritmu berdasarkan kategori"
        isShowButton={true}
      />
      <div className="flex flex-wrap w-full">
        {isLoading ? <RecipeSkeleton index={8} /> : renderRecipes(recipeMakananBerat)}
      </div>

      {/* Resep Makanan Ringan */}
      <HeadingSection
        heading="Resep Makanan Ringan"
        description="Temukan resep favoritmu berdasarkan kategori"
        isShowButton={true}
      />
      <div className="flex flex-wrap w-full">
        {isLoading ? <RecipeSkeleton index={8} /> : renderRecipes(recipesMakananRingan)}
      </div>

      {/* Resep Kue */}
      <HeadingSection
        heading="Resep Kue"
        description="Temukan resep favoritmu berdasarkan kategori"
        isShowButton={true}
      />
      <div className="flex flex-wrap w-full">{isLoading ? <RecipeSkeleton index={8} /> : renderRecipes(recipeKue)}</div>
    </section>
  )
}
