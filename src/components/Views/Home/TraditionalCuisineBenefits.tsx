import { ListTraditionalCuisineBenefits } from "@/data/datas"
import { LucideIcon } from "lucide-react"

interface TraditionalProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function TraditionalCuisineBenefits({ heading }: { heading: string }) {
  return (
    <section className="mx-auto mt-10 flex flex-col items-center justify-center lg:mt-10 lg:w-4/5 lg:py-20">
      <h1 className="w-full py-10 text-center font-domine text-[1.5rem] leading-tight lg:w-1/2 lg:text-5xl">
        {heading}
      </h1>
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

            <h2 className="my-6 text-[1rem] font-semibold text-black lg:text-lg">{title}</h2>
            <p className="mt-2 text-[0.8rem] text-black lg:text-sm ">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
