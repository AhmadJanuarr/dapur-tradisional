import CategorySection from "@/components/Views/Recipes/CategorySection"
import HeroSectionRecipe from "@/components/Views/Recipes/HeroSection"
import RecipesSection from "@/components/Views/Recipes/RecipeSection"
import { Fragment } from "react/jsx-runtime"

export default function RecipesPage() {
  return (
    <Fragment>
      <HeroSectionRecipe
        heading="Dapur tradisional - resep makanan khas daerah"
        subheading="Temukan resep makanan khas daerah Indonesia yang lezat dan mudah dibuat"
        image="/img/bg-recipe.png"
      />
      <CategorySection />
      <RecipesSection />
    </Fragment>
  )
}
