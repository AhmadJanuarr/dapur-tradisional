import { Input } from "../../ui/input"
import { Search } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative h-[700px] w-full bg-cover bg-center" style={{ backgroundImage: "url('/img/hero.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex h-full items-center justify-center text-white">
        <div className="p-5 text-center">
          <h1 className="text-5xl font-bold">Resep Makanan Ringan Khas Daerah</h1>
          <p className="mt-4 text-lg">
            Jelajahi kekayaan kuliner Indonesia melalui berbagai makanan ringan khas daerah yang penuh cita rasa dan
            keunikan.
          </p>
          <div className="relative mx-auto md:w-1/2">
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
              <Search className="text-black" size={24} />
            </div>
            <Input
              type="search"
              placeholder="Cari resep..."
              className="mt-4 rounded-xl bg-white pl-12 placeholder:text-black"
              aria-label="Search recipes"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
