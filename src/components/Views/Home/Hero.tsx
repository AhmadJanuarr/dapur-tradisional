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
      className="flex h-screen w-full justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/img/hero.jpg")' }}
    >
      <div className="absolute z-20 h-screen w-full bg-black bg-opacity-70"></div>
      <div className="z-30 flex items-center justify-center">
        <div className="w-3/4 text-center text-white">
          <h1 className="font-italian text-[2rem] font-normal lg:text-[5rem]">{heading}</h1>
          <p className="subheading mt-6">{description}</p>
          <div className="mt-10 flex justify-center gap-5">
            <Link to={to}>
              <Button className="border bg-white text-[0.8rem] text-black hover:border-white hover:text-white lg:py-5 lg:text-[1rem]">
                <Dessert />
                {callToAction}
              </Button>
            </Link>
            <a href={href} target="_blank">
              <Button variant="link" className="border text-[0.8rem] text-white lg:py-5 lg:text-[1rem]">
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
