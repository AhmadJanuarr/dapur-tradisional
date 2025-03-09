import { BookOpenText, Database } from "lucide-react"

interface StatisticsProps {
  heading: string
  img: string
  description: string
}

const RecipeStatistics = ({ heading, img, description }: StatisticsProps) => {
  const statistics = [
    {
      icon: <Database className="text-[#f97316]" />,
      label: "Data tersedia",
      value: "100 resep data tersedia",
    },
    {
      icon: <BookOpenText className="text-[#f97316]" />,
      label: "Kategori",
      value: "3 kategori tersedia",
    },
  ]

  return (
    <section className="relative mx-auto mt-52 w-full px-5 lg:w-11/12 lg:px-0 lg:py-20 2xl:w-4/5">
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="z-20 hidden lg:block lg:w-1/3">
          <img src={img} alt="food" className="z-10 w-full lg:w-[500px]" />
          <img
            src="/elements/element-spice.png"
            alt="spice"
            className="absolute -top-10 left-0 -z-10 md:w-[300px] 2xl:w-[300px]"
          />
          <img
            src="/elements/element-ring.png"
            alt="ring"
            className="absolute -left-1/3 top-0 -z-10 lg:w-[500px] 2xl:w-[700px]"
          />
          <img
            src="/elements/element-leaf.png"
            alt="leaf"
            className="absolute top-10 -z-10 lg:left-52 lg:w-[200px] 2xl:left-80 2xl:w-[200px]"
          />
          <img
            src="/elements/element-kemangi.png"
            alt="kemangi"
            className="absolute left-52 -z-10 lg:bottom-0 lg:w-[150px] 2xl:-bottom-10 2xl:w-[200px]"
          />
        </div>
        <div className="z-20 items-center lg:w-2/3">
          <h1 className="heading text-center font-semibold text-black dark:text-white lg:text-left">{heading}</h1>
          <div className="mx-auto w-1/2 items-center py-5 lg:hidden">
            <img src={img} alt="hero" />
          </div>
          <p className="subheading py-5 dark:text-white">{description}</p>
          <div className="flex gap-10 pt-5">
            {statistics.map((stat, index) => (
              <div key={index} className="flex items-center gap-5 dark:text-white">
                {stat.icon}
                <div className="subheading flex flex-col">
                  <p className="text-gray-500">{stat.label}</p>
                  <p className="font-semibold text-[#f97316] dark:text-white">{stat.value}</p>
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
