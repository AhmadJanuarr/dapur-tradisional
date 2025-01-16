import { ListTraditionalCuisineBenefits } from "@/data/datas"
import { LucideIcon } from "lucide-react"

interface TraditionalProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function TraditionalCuisineBenefits() {
  return (
    <section className="flex flex-col items-center justify-center w-4/5 py-20 mx-auto mt-10">
      <h1 className="w-1/2 py-10 text-5xl leading-tight text-center font-domine">
        Mengapa Masakan Tradisional Tak Tergantikan?
      </h1>
      <div className="grid grid-cols-1 overflow-hidden bg-white border shadow-lg rounded-2xl md:grid-cols-3 ">
        {ListTraditionalCuisineBenefits.map(({ title, description, icon: IconComponent }: TraditionalProps, index) => (
          <div
            key={title}
            className={`flex flex-col  justify-start border p-6 ${
              index < 3 ? "border-b" : ""
            } ${index % 3 !== 2 ? "md:border-r" : ""}`}
          >
            <div className="flex items-center justify-center w-16 h-16 shadow-xl rounded-xl">
              <IconComponent className="w-8 h-8 text-black" />
            </div>

            <h2 className="my-6 text-lg font-semibold text-black">{title}</h2>
            <p className="mt-2 text-sm text-black">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
