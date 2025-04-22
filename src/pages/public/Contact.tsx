import { HeroSectionContact } from "@/Views/Contact/HeroSection"
import { NewsLetter } from "@/Views/Home/NewsLetter"
import { Fragment } from "react/jsx-runtime"

export default function ContactPage() {
  return (
    <Fragment>
      <HeroSectionContact
        heading="Hubungi Kami"
        subheading="Kami siap membantu Anda dalam mewujudkan ide dan proyek digital yang Anda impikan! Jika Anda memiliki pertanyaan, ingin berdiskusi lebih lanjut, atau membutuhkan solusi khusus untuk bisnis Anda"
      />
      <div className="mt-20">
        <NewsLetter />
      </div>
    </Fragment>
  )
}
