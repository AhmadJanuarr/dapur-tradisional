import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type HeroSectionProps = {
  heading: string
  subheading: string
  image: string
}

const HeroSectionRecipe = ({ heading, subheading, image }: HeroSectionProps) => {
  return (
    <section className="mt-10 flex w-full lg:mt-28">
      <div className="flex h-[500px] w-full flex-col-reverse gap-3 lg:flex-row ">
        <div className="flex w-full flex-col justify-center rounded-xl bg-[#ffeddf] px-4 py-4 text-black md:py-10 lg:w-[40%] lg:gap-5 lg:px-6 lg:py-32">
          <h1 className="heading font-raleway leading-tight">{heading}</h1>
          <p className="subheading py-3 text-gray-800">{subheading}</p>
          <div className="relative py-5 lg:mt-3">
            <form className="flex w-full items-center justify-center gap-3">
              <Input
                type="search"
                placeholder="Cari resep..."
                className="w-full rounded-md border-none bg-white  text-black placeholder:text-[#656565]"
                aria-label="Search recipes"
              />
              <Button>Pencarian</Button>
            </form>
          </div>
        </div>
        <div
          className="z-10 flex h-[200px] w-full justify-center rounded-xl bg-center lg:h-full lg:w-[60%]"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
    </section>
  )
}

export default HeroSectionRecipe
