import { Fragment } from "react/jsx-runtime"
import CategorySection from "@/Views/Recipes/CategorySection"
import HeroSectionRecipe from "@/Views/Recipes/HeroSection"
import RecipesSection from "@/Views/Recipes/RecipeSection"
import NewsLetter from "@/Views/Home/NewsLetter"
import ImageSwitcherSection from "@/Views/Recipes/ImageSwitcherSection"

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
      <ImageSwitcherSection />
      <div className="mt-24 w-full lg:mt-40">
        <NewsLetter />
      </div>
    </Fragment>
  )
}
