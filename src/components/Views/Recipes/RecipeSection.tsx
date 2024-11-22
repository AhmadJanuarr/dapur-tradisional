import { useEffect, useState } from "react"
import RecipeCard from "../../Card/RecipeCard"
import HeadingSection from "./HeadingSection"
import axios from "axios"

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
  return (
    <section>
      <HeadingSection heading="Resep Terbaru" description="Temukan resep favoritmu berdasarkan kategori" />
      <div className="flex w-full flex-wrap">
        {recipes.map((recipe: any) => (
          <RecipeCard
            key={recipe.id}
            image={`${import.meta.env.VITE_API_URL}/images/${recipe.image}`}
            title={recipe.title}
            description={recipe.description}
            category={recipe.category}
          />
        ))}
      </div>
    </section>
  )
}
