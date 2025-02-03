import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

type HeroSectionProps = {
  heading: string
  subheading: string
  image: string
}

const HeroSectionRecipe = ({ heading, subheading, image }: HeroSectionProps) => {
  return (
    <section className="flex w-full lg:mt-28">
      <div className="flex h-[500px] w-full flex-col-reverse gap-3 lg:flex-row ">
        <div className="flex w-full flex-col justify-center rounded-xl bg-[#D6EFD8] px-4 py-4 text-black md:py-10 lg:w-[40%] lg:gap-5 lg:px-6 lg:py-32">
          <h1 className="heading font-inter font-semibold">{heading}</h1>
          <p className="subheading">{subheading}</p>
          <div className="relative lg:mt-5">
            <div className="-translate-y- pointer-events-none absolute left-3 top-1/2 transform">
              <Search className="text-black" size={20} />
            </div>
            <Input
              type="search"
              placeholder="Cari resep..."
              className="mt-4 w-full rounded-md border-none bg-white pl-11 text-black placeholder:text-black"
              sonner-spinner
              aria-label="Search recipes"
            />
          </div>
        </div>
        <div
          className="-z-10 flex h-[200px] w-full justify-center rounded-xl bg-center bg-no-repeat object-cover lg:h-full lg:w-[60%]"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
    </section>
  )
}

export default HeroSectionRecipe
