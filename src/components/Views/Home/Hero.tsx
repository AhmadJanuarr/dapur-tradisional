import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Dessert } from "lucide-react"

type HeroSectionProps = {
  heading: string
  description: string
  callToAction: string
  to: string
  href: string
}
const HeroSection = ({ heading, description, callToAction, to, href }: HeroSectionProps) => {
  return (
    <section
      className="flex justify-center w-full h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url("/img/hero.jpg")' }}
    >
      <div className="absolute z-20 w-full h-screen bg-black bg-opacity-70"></div>
      <div className="z-30 flex items-center justify-center">
        <div className="w-3/4 text-center text-white">
          <h1 className="font-italian text-[2rem] font-normal lg:text-[5rem]">{heading}</h1>
          <p className="mt-6 subheading">{description}</p>
          <div className="flex justify-center gap-5 mt-10">
            <Link to={to}>
              <Button variant="secondary" className="text-black border subheading lg:py-5 ">
                <Dessert />
                {callToAction}
              </Button>
            </Link>
            <a href={href} target="_blank">
              <Button variant="link" className="text-white border subheading lg:py-5">
                Dokumentasi
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
