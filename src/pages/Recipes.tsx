import CategorySection from "@/components/Views/Recipes/CategorySection"
import HeroSection from "@/components/Views/Recipes/HeroSection"
import RecipesSection from "@/components/Views/Recipes/RecipeSection"
import React from "react"

export default function RecipesPage() {
  return (
    <React.Fragment>
      <HeroSection />
      <CategorySection />
      <RecipesSection />
    </React.Fragment>
  )
}
