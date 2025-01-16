import { BookOpenText, Database } from "lucide-react"

export default function RecipeStatistics() {
  const statistics = [
    {
      icon: <Database />,
      label: "data tersedia",
      value: "100 resep data tersedia",
    },
    {
      icon: <BookOpenText />,
      label: "Kategori",
      value: "3 kategori tersedia",
    },
  ]

  return (
    <section className="w-full px-5 mx-auto mt-10 lg:w-4/5 lg:px-0 lg:py-20">
      <div className="flex flex-col items-center justify-center w-full gap-10 lg:flex-row">
        <div className="hidden lg:block lg:w-1/3">
          <img src="/img/makanan-arrival.png" alt="hero" />
        </div>
        <div className="lg:w-2/3">
          <h1 className="pb-5 text-center text-black heading-mobile font-domine lg:text-left">
            Daftar resep yang tersedia sekarang
          </h1>
          <div className="w-full lg:hidden ">
            <img src="/img/makanan-arrival.png" alt="hero" />
          </div>
          <p className="subheading-mobile">
            <span className="py-10">Dapur Tradisional</span> menyediakan berbagai macam resep makanan ringan khas daerah
            yang penuh cita rasa dan keunikan. Dengan resep-resep ini, Anda dapat menikmati kelezatan kuliner khas
            daerah dengan mudah.
          </p>

          <div className="flex gap-10 pt-10">
            {statistics.map((stat, index) => (
              <div key={index} className="flex items-center gap-5">
                {stat.icon}
                <div className="flex flex-col subheading-mobile">
                  <p className="text-gray-500">{stat.label}</p>
                  <p className="font-semibold text-black">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
