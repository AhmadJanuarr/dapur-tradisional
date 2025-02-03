import HeroSectionHome from "@/components/Views/Home/HeroSection"
import TraditionalCuisineBenefits from "@/components/Views/Home/TraditionalCuisineBenefits"
import RecipeStatistics from "@/components/Views/Home/RecipeStatistics"
import SupportFaq from "@/components/Views/Home/SupportFaq"
import { Fragment } from "react/jsx-runtime"

export default function HomePage() {
  return (
    <Fragment>
      <HeroSectionHome
        heading="Masak Dengan Lebih Mudah & Kreatif."
        description="Dengan Dapur Tradisional, Anda bisa menemukan inspirasi untuk masakan lezat setiap hari. Cari resep favorit Anda sekarang!"
        callToAction="Jelajahi Resep Terbaru"
        to="/recipes"
        href="https://github.com/AhmadJanuarr/recipe-managements"
      />
      <TraditionalCuisineBenefits heading="Mengapa Masakan Tradisional Tak Tergantikan?" />
      <RecipeStatistics
        heading="Daftar resep yang tersedia sekarang"
        img="/img/makanan-arrival.png"
        description="Dapur Tradisional menyediakan berbagai macam resep makanan ringan khas daerah yang penuh cita rasa dan keunikan. Dengan resep-resep ini, Anda dapat menikmati kelezatan kuliner khas daerah dengan mudah."
      />
      <SupportFaq
        heading="Frequently Asked Questions"
        subheading="Jawaban untuk Pertanyaan Umum tentang Resep dan Penggunaan Website"
      />
    </Fragment>
  )
}
