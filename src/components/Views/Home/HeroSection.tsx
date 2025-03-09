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
const HeroSectionHome = ({ heading, description, callToAction, to, href }: HeroSectionProps) => {
  return (
    <section
      className="flex h-screen w-full justify-center bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/img/bg-hero-1.png')" }}
    >
      <div className="absolute z-20 h-screen w-full bg-black bg-opacity-70"></div>
      <div className="z-20 flex items-center justify-center lg:w-11/12 2xl:w-4/5">
        <div className="w-3/4 text-center text-white">
          <h1 className="font-marcellus text-[2rem] font-normal lg:text-[5rem]">{heading}</h1>
          <p className="subheading mt-6">{description}</p>
          <div className="mt-10 flex justify-center gap-5">
            <Link to={to}>
              <Button variant="secondary" className="subheading bg-white text-black lg:py-5">
                <Dessert />
                {callToAction}
              </Button>
            </Link>
            <a href={href} target="_blank">
              <Button variant="link" className="subheading border border-white text-white lg:py-5">
                Dokumentasi
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSectionHome
