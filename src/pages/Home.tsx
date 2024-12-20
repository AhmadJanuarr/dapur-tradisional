import React from "react"
import HeroSection from "@/components/Views/Home/Hero"
import TraditionalCuisineBenefits from "@/components/Views/Home/TraditionalCuisineBenefits"
import RecipeStatistics from "@/components/Views/Home/RecipeStatistics"
import SupportFaq from "@/components/Views/Home/SupportFaq"

export default function HomePage() {
  return (
    <React.Fragment>
      <HeroSection
        heading="Masak Dengan Lebih Mudah & Kreatif"
        description="Dengan ResepHub, Anda bisa menemukan inspirasi untuk masakan lezat setiap hari. Cari resep favorit Anda sekarang!"
        callToAction="Jelajahi Resep Terbaru"
        src="/svg/hero.svg"
        to="/recipes"
      />
      <TraditionalCuisineBenefits />
      <RecipeStatistics />
      <SupportFaq />
    </React.Fragment>
  )
}
