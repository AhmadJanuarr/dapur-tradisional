import { Fragment } from "react/jsx-runtime"
import { HeroSectionHome } from "@/Views/Home/HeroSection"
import { TraditionalCuisineBenefits } from "@/Views/Home/TraditionalCuisineBenefits"
import { RecipeStatistics } from "@/Views/Home/RecipeStatistics"
import { SupportFaq } from "@/Views/Home/SupportFaq"
import { CallToAction } from "@/Views/Home/CallToAction"
import { NewsLetter } from "@/Views/Home/NewsLetter"

export default function HomePage() {
  return (
    <Fragment>
      <HeroSectionHome
        description="Dengan Dapur Tradisional, Anda bisa menemukan inspirasi untuk masakan lezat setiap hari. Cari resep favorit Anda sekarang!"
        callToAction="Jelajahi resep terbaru"
        to="/resep"
        href="https://github.com/AhmadJanuarr/recipe-managements"
      />
      <TraditionalCuisineBenefits heading="Mengapa Masakan Tradisional Tak Tergantikan?" />
      <RecipeStatistics
        heading="Daftar resep yang tersedia sekarang"
        img="/elements/makanan-arrival.png"
        description="Dapur Tradisional menyediakan berbagai macam resep makanan ringan khas daerah yang penuh cita rasa dan keunikan. Dengan resep-resep ini, Anda dapat menikmati kelezatan kuliner khas daerah dengan mudah."
      />
      <CallToAction />
      <SupportFaq
        heading="Frequently Asked Questions"
        subheading="Jawaban untuk Pertanyaan Umum tentang Resep dan Penggunaan Website"
      />
      <div className="mx-auto mt-24 lg:w-11/12 2xl:w-4/5">
        <NewsLetter />
      </div>
    </Fragment>
  )
}
