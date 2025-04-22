import { Button } from "@/components/ui/button"
import { Dessert } from "lucide-react"
import { Link } from "react-router-dom"

export const CallToAction = () => {
  return (
    <section className="relative mx-auto mt-16 flex flex-col items-center justify-center overflow-hidden  bg-[#ffeddf] px-11 py-10 lg:mt-12 lg:h-[480px] lg:w-11/12 lg:flex-row lg:justify-start lg:rounded-3xl lg:px-20 lg:py-0 2xl:w-4/5">
      <div className="z-20 flex flex-col gap-8 lg:w-3/5">
        <h1 className="heading w-full font-raleway dark:text-black">
          Apakah kamu siap untuk memulai perjalanan kuliner baru?
        </h1>
        <div className="subheading flex items-center gap-5">
          <Link to="/resep">
            <Button className="rounded-full px-4 py-5 font-semibold lg:py-6">
              <Dessert />
              Jelajahi resep terbaru
            </Button>
          </Link>
          <Link to="https://github.com/AhmadJanuarr/recipe-managements" target="_blank">
            <Button className="rounded-xl" variant="link">
              Dokumentasi
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute -right-20 top-0 z-10 w-full opacity-30 md:block md:w-2/5">
        <img src="/elements/element-sayur.png" alt="element-sayur" />
      </div>
    </section>
  )
}
