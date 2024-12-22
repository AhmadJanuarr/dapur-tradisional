import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="mt-20 flex w-full border">
      <div className="flex w-full rounded-xl bg-[#F9802D]">
        <div className="flex w-1/2 flex-col gap-2 pl-4 md:py-10 lg:py-32 lg:pl-8">
          <h1 className="text-xl font-semibold text-white md:text-2xl xl:text-4xl">
            Dapur tradisional - resep makanan khas daerah
          </h1>
          <p className="text-primary text-white">
            Temukan resep makanan khas daerah Indonesia yang lezat dan mudah dibuat
          </p>
          <div className="relative ">
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1 transform">
              <Search className="text-black" size={24} />
            </div>
            <Input
              type="search"
              placeholder="Cari resep..."
              className="text- black mt-4 rounded-md border-none bg-white pl-12 placeholder:text-black"
              sonner-spinner
              aria-label="Search recipes"
            />
          </div>
        </div>

        <div className="flex w-1/2 justify-center">
          <img src="/svg/cooking.svg" alt="cooking image" className="w-[200px] lg:w-[400px]" />
        </div>
      </div>
    </div>
  )
}
