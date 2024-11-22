import CategorySection from "../components/Views/Recipes/CategorySection"
import HeroSection from "../components/Views/Recipes/HeroSection"
import RecipesSection from "../components/Views/Recipes/RecipeSection"

export default function Recipes() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <HeroSection />
      <div className="mx-auto w-4/5 py-10">
        <CategorySection />
        <RecipesSection />
      </div>
    </div>
  )
}
