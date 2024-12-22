import { BookOpenText, Database } from "lucide-react"

export default function RecipeStatistics() {
  return (
    <section>
      <div className="flex items-center justify-center w-full gap-10 py-32 mt-20">
        <div className="absolute -z-10 mt-32 h-[800px] w-full"></div>
        <div className="w-1/3">
          <img src="/img/makanan-arrival.png" alt="hero" />
        </div>
        <div className="w-2/3">
          <h1 className="pb-5 text-4xl text-gray-400 ">Daftar resep yang tersedia sekarang</h1>
          <p>
            <span className="py-10">Dapur Tradisional</span> menyediakan berbagai macam resep makanan ringan khas daerah
            yang penuh cita rasa dan keunikan. Dengan resep-resep ini, Anda dapat menikmati kelezatan kuliner khas
            daerah dengan mudah.
          </p>
          <div className="flex gap-10 pt-10">
            <div className="flex items-center gap-5">
              <Database />
              <div className="flex flex-col">
                <p className="text-gray-500">data tersedia</p>
                <p className="text-[#FFA500]">100 resep data tersedia</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <BookOpenText />
              <div className="flex flex-col">
                <p className="text-gray-500">Kategori</p>
                <p className="text-[#FFA500]">3 kategori tersedia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
