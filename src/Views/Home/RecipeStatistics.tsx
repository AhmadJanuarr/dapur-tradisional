import { BookOpenText, Database } from "lucide-react"

interface StatisticsProps {
  heading: string
  img: string
  description: string
}

export const RecipeStatistics = ({ heading, img, description }: StatisticsProps) => {
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
    <section className="relative mx-auto mt-14 flex w-full items-center justify-center px-5 lg:mt-24 lg:px-0 lg:py-28">
      <img
        src="/elements/element-spice.png"
        alt="spice"
        className="absolute left-5 top-0 -z-10 w-[180px] md:w-[300px] 2xl:w-[300px]"
      />
      <img
        src="/elements/element-blur.png"
        alt="ring"
        className="absolute left-0 top-0 -z-10 lg:w-[500px] 2xl:w-[900px]"
      />
      <img
        src="/elements/element-leaf.png"
        alt="leaf"
        className="absolute right-10 top-0 -z-10 w-[120px] lg:left-52 lg:w-[200px] 2xl:left-80 2xl:w-[200px]"
      />
      <img
        src="/elements/element-kemangi.png"
        alt="kemangi"
        className="absolute left-20 top-20  -z-10 w-[120px]  md:left-52 lg:bottom-0 lg:w-[150px] 2xl:bottom-10 2xl:w-[200px]"
      />
      <img
        src="/elements/element-daun5.png"
        alt="element-daun5"
        className="absolute -left-10 bottom-20 -z-10 w-32 rotate-45 opacity-50 "
      />
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-11/12 lg:flex-row 2xl:w-4/5">
        <div className="z-20 w-1/2 lg:w-1/3">
          <img src={img} alt="food" className="z-10 w-full lg:w-[500px]" />
        </div>
        <div className="z-20 items-center lg:w-2/3">
          <h1 className="heading text-center font-raleway text-black dark:text-white lg:text-left">{heading}</h1>
          <p className="subheading py-8 text-center text-gray-800 dark:text-white lg:text-left">{description}</p>
          <div className="flex gap-10 pt-5">
            {statistics.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 dark:text-white">
                {stat.icon}
                <div className="subheading flex flex-col">
                  <p className="font-regular text-gray-800">{stat.label}</p>
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
