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
    <section className="mx-auto mt-10 w-full px-5 lg:w-4/5 lg:px-0 lg:py-20">
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="hidden lg:block lg:w-1/3">
          <img src={img} alt="hero" />
        </div>
        <div className="lg:w-2/3">
          <h1 className="heading pb-5 text-center font-domine text-black lg:text-left">{heading}</h1>
          <div className="w-full lg:hidden">
            <img src={img} alt="hero" />
          </div>
          <p className="subheading">{description}</p>

          <div className="flex gap-10 pt-10">
            {statistics.map((stat, index) => (
              <div key={index} className="flex items-center gap-5">
                {stat.icon}
                <div className="subheading flex flex-col">
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
