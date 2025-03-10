import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import { Link } from "react-router-dom"

const CallToAction = () => {
  return (
    <section className="relative mx-auto mt-20 flex flex-col items-center justify-start overflow-hidden rounded-3xl bg-[#ffeddf] px-5 py-10 md:h-96 lg:mt-52 lg:w-11/12 lg:flex-row lg:px-20 lg:py-0 2xl:w-4/5 ">
      <div className="z-20 flex flex-col gap-10 lg:w-3/5">
        <h1 className="heading w-full font-semibold leading-tight dark:text-black">
          Apakah kamu siap untuk memulai perjalanan kuliner baru?
        </h1>
        <div className="subheading items-left flex flex-col gap-5 lg:flex-row">
          <Link to="/recipes">
            <Button className="rounded-xl px-4 lg:py-5">
              Jelajahi dapur tradisional
              <ArrowRight />
            </Button>
          </Link>
          <Link to="https://github.com/AhmadJanuarr/recipe-managements" target="_blank">
            <Button className="rounded-xl" variant="link">
              Dokumentasi
              <Github />
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute -right-32 top-0 z-10 w-full opacity-35 md:block md:w-2/5">
        <img src="/elements/element-spice-2.png" alt="element-spice" />
      </div>
    </section>
  )
}

export default CallToAction
