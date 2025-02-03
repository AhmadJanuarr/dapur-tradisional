import DesignProcess from "@/components/Views/About/DesignProcess"
import HeroSectionAbout from "@/components/Views/About/HeroSection"
import ProfileSection from "@/components/Views/About/ProfileSection"
import TestimonialSection from "@/components/Views/About/TestimonialSection"
import { Fragment } from "react/jsx-runtime"

export default function AboutUsPage() {
  return (
    <Fragment>
      <HeroSectionAbout
        heading="Situs Resep Tradisional Dibuat dengan penuh semangat"
        subheading="Sebagai desainer dan pengembang web developer, saya membuat platform ini untuk melestarikan resep tradisional
          melalui desain digital modern, membuat warisan kuliner dapat diakses untuk semua orang."
        src="/img/bg-about.png"
      />
      <ProfileSection name="Ahmad Januar A" role="UI/UX Designer | Web Developer" src="img/user.png" />
      <DesignProcess />
      <TestimonialSection />
    </Fragment>
  )
}
