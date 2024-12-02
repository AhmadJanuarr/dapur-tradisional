import CategorySection from "@/components/Views/Recipes/CategorySection"
import HeroSection from "@/components/Views/Recipes/HeroSection"
import RecipesSection from "@/components/Views/Recipes/RecipeSection"

export default function Recipes() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <HeroSection />
      <div className="w-4/5 py-10 mx-auto">
        <CategorySection />
        <RecipesSection />
      </div>
    </div>
  )
}
