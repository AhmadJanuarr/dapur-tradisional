import { ListTraditionalCuisineBenefits } from "@/data/datas"
import { LucideIcon } from "lucide-react"

interface TraditionalProps {
  title: string
  description: string
  icon: LucideIcon
}

const TraditionalCuisineBenefits = ({ heading }: { heading: string }) => {
  return (
    <section className="mx-auto mt-10 flex flex-col items-center justify-center lg:mt-10 lg:w-4/5 lg:py-20">
      <h1 className="heading w-full py-10 text-center font-domine leading-tight lg:w-1/2 ">{heading}</h1>
      <div className="grid grid-cols-2 overflow-hidden rounded-2xl border bg-white shadow-lg md:grid-cols-3 ">
        {ListTraditionalCuisineBenefits.map(({ title, description, icon: IconComponent }: TraditionalProps, index) => (
          <div
            key={title}
            className={`flex flex-col  justify-start border p-6 ${
              index < 3 ? "border-b" : ""
            } ${index % 3 !== 2 ? "md:border-r" : ""}`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-xl shadow-xl">
              <IconComponent className="h-8 w-8 text-black" />
            </div>

            <h2 className="subheading my-6 font-semibold text-black ">{title}</h2>
            <p className="subheading mt-2 text-black">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TraditionalCuisineBenefits
