import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Dessert } from "lucide-react"

type HeroSectionProps = {
  description: string
  callToAction: string
  to: string
  href: string
}
const HeroSectionHome = ({ description, callToAction, to }: HeroSectionProps) => {
  return (
    <section className="relative flex w-full justify-center overflow-hidden pt-20 lg:min-h-screen">
      <img
        src="/elements/element-blur.png"
        alt="element-blur"
        className="absolute -right-32 -top-20 -z-10 lg:-right-96 lg:-top-[10rem] lg:w-[800px]"
      />
      <img
        src="/elements/element-kol.png"
        alt="element-kol"
        className="absolute bottom-48 right-0 -z-10 hidden w-96 -rotate-90 lg:right-60 lg:block"
      />
      <img
        src="/elements/element-spice.png"
        alt="element-spice"
        className="absolute bottom-32 right-0 -z-10 hidden w-96 lg:block"
      />
      <img
        src="/elements/element-daun.png"
        alt="element-daun"
        className="reverse absolute -right-5 top-10 w-32 scale-x-[-1] opacity-50"
      />
      <img
        src="/elements/element-daun4.png"
        alt="element-daun4"
        className="absolute -left-2 top-32 z-10 w-20 rotate-45 scale-x-[-1] opacity-80"
      />

      <div className="z-20 mt-20 flex items-center justify-center px-5 lg:mt-0 lg:w-11/12 lg:px-0 2xl:w-4/5">
        <div className="flex flex-col gap-7 text-left text-black dark:text-white lg:w-[60%]">
          <h1 className="font-raleway text-[2rem] font-normal leading-tight tracking-tight lg:text-[4rem]">
            Masak dengan lebih <span className="text-[#F97316]">mudah & kreatif</span>.
          </h1>
          <p className="subheading lg:w-2/3">{description}</p>
          <div className="flex gap-5 ">
            <Link to={to}>
              <Button className="subheading bg-[#F97316] px-5 py-3 text-white lg:py-6">
                <Dessert />
                {callToAction}
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden  w-[40%] lg:block">
          <img src="/elements/element-bg.png" alt="hero" className="w-full" />
        </div>
      </div>
    </section>
  )
}

export default HeroSectionHome
