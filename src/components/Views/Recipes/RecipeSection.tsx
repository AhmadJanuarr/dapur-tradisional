import { useEffect, useState } from "react"
import RecipeCard from "@/components/Card/RecipeCard"
import HeadingSection from "./HeadingSection"
import axios from "axios"

interface RecipeProps {
  title: string
  id: number
  image: string
  category: string
}
export default function RecipesSection() {
  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
    try {
      const fetching = await axios.get(`${import.meta.env.VITE_API_URL}/api/recipes`)
      const response = fetching.data
      setRecipes(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(recipes)
  useEffect(() => {
    getRecipes()
  }, [])
  const sortNewRecipe = recipes.sort(() => Math.random() - 0.5)
  const recipeMakananBerat = recipes.filter((recipe: RecipeProps) => recipe.category === "Makanan_Berat")
  return (
    <section>
      {/* NewResep */}
      <HeadingSection heading="Resep Terbaru" description="Temukan resep favoritmu berdasarkan kategori" />
      <div className="flex w-full flex-wrap">
        {sortNewRecipe.slice(0, 8).map((recipe: RecipeProps) => (
          <RecipeCard
            key={recipe.id}
            image={`${import.meta.env.VITE_API_URL}/images/${recipe.image}`}
            title={recipe.title}
            category={recipe.category}
          />
        ))}
      </div>

      {/* Resep Makanan Berat */}
      <HeadingSection heading="Resep Makanan Berat" description="Temukan resep favoritmu berdasarkan kategori" />
      <div className="flex w-full flex-wrap">
        {recipeMakananBerat.slice(0, 8).map((recipe: RecipeProps) => (
          <RecipeCard
            key={recipe.id}
            image={`${import.meta.env.VITE_API_URL}/images/${recipe.image}`}
            title={recipe.title}
            category={recipe.category}
          />
        ))}
      </div>
    </section>
  )
}
