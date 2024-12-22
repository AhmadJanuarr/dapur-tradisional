import { ListTraditionalCuisineBenefits } from "@/data/datas"
import { LucideIcon } from "lucide-react"

interface TraditionalProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function TraditionalCuisineBenefits() {
  return (
    <section className="flex flex-col items-center justify-center w-full py-32 mt-20">
      <div className="absolute -z-10 mt-32 h-[800px] w-full bg-[#F5F5F4]"></div>
      <h1 className="w-1/2 py-10 text-4xl text-center text-gray-500 font-regular ">
        Mengapa <span className="text-gray-900 ">Masakan Tradisional</span> Tak Tergantikan?
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
              <IconComponent className="h-8 w-8 text-[#FFA500]" />
            </div>

            <h2 className="my-6 text-lg font-semibold text-gray-800">{title}</h2>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
