import { BookOpenText, Database } from "lucide-react"

interface StatisticsProps {
  heading: string
  img: string
  description: string
}

const RecipeStatistics = ({ heading, img, description }: StatisticsProps) => {
  const statistics = [
    {
      icon: <Database />,
      label: "Data tersedia",
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
          <img src={img} alt="hero" />
        </div>
        <div className="lg:w-2/3">
          <h1 className="pb-5 font-semibold text-center text-black heading lg:text-left">{heading}</h1>
          <div className="w-full lg:hidden">
            <img src={img} alt="hero" />
          </div>
          <p className="subheading">{description}</p>

          <div className="flex gap-10 pt-10">
            {statistics.map((stat, index) => (
              <div key={index} className="flex items-center gap-5">
                {stat.icon}
                <div className="flex flex-col subheading">
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

export default RecipeStatistics
