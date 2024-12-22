import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="flex w-full mt-20">
      <div className="flex w-full rounded-xl bg-[#F9802D]">
        <div className="flex flex-col w-1/2 gap-2 pl-4 md:py-10 lg:py-32 lg:pl-8">
          <h1 className="text-xl font-semibold text-white md:text-2xl xl:text-4xl">
            Dapur tradisional - resep makanan khas daerah
          </h1>
          <p className="text-white text-primary">
            Temukan resep makanan khas daerah Indonesia yang lezat dan mudah dibuat
          </p>
          <div className="relative ">
            <div className="absolute transform -translate-y-1 pointer-events-none left-3 top-1/2">
              <Search className="text-black" size={24} />
            </div>
            <Input
              type="search"
              placeholder="Cari resep..."
              className="pl-12 mt-4 bg-white border-none rounded-md text- black placeholder:text-black"
              sonner-spinner
              aria-label="Search recipes"
            />
          </div>
        </div>

        <div className="flex justify-center w-1/2">
          <img src="/svg/cooking.svg" alt="cooking image" className="w-[200px] lg:w-[400px]" />
        </div>
      </div>
    </div>
  )
}
