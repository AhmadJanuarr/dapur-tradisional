import { ListTraditionalCuisineBenefits } from "@/data/datas"
import { LucideIcon } from "lucide-react"

interface TraditionalProps {
  title: string
  description: string
  icon: LucideIcon
}

const TraditionalCuisineBenefits = ({ heading }: { heading: string }) => {
  return (
    <section className="relative mx-auto mt-24 flex w-full flex-col items-center justify-center overflow-hidden px-5 lg:mt-10">
      <img
        src="/elements/element-daun3.png"
        alt="element-daun3"
        className="absolute bottom-0 left-0 z-10 hidden w-32 lg:block"
      />
      <img
        src="/elements/element-daun4.png"
        alt="element-daun4"
        className="absolute right-0 top-0 z-10 hidden w-32 lg:block"
      />

      <div className="flex flex-col items-center justify-center lg:w-11/12 2xl:w-4/5">
        <h1 className="heading w-full pb-5 text-center font-raleway lg:h-2/3 lg:leading-relaxed 2xl:w-1/2">
          {heading}
        </h1>
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border pt-11 shadow-none sm:grid-cols-2 md:grid-cols-3 lg:pt-0">
          {ListTraditionalCuisineBenefits.map(
            ({ title, description, icon: IconComponent }: TraditionalProps, index) => (
              <div
                key={title}
                className={`mb-11 flex items-center justify-start gap-5 border-[#F1F1F1] px-5 dark:bg-darkPrimary lg:mb-0 lg:flex-col lg:gap-0 lg:border lg:p-6 ${
                  index < 3 ? "lg:border-b" : ""
                } ${index % 3 !== 2 ? "lg:border-r" : ""}`}
              >
                <div className="flex  justify-start rounded-xl bg-[#ffeddf] p-4 ">
                  <IconComponent className="size-9 text-[#f97316]" />
                </div>
                <div className="flex flex-col ">
                  <h2 className="subheading font-semibold text-black dark:text-white lg:my-6">{title}</h2>
                  <p className="subheading mt-2 text-gray-800 dark:text-white">{description}</p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default TraditionalCuisineBenefits
