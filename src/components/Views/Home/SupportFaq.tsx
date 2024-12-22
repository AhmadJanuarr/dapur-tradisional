import { SupportsFaqList } from "@/data/datas"
import { LucideIcon } from "lucide-react"

interface SupportFaqProps {
  question: string
  answer: string
  icon: LucideIcon
}

export default function SupportFaq() {
  return (
    <section className="flex flex-col items-center justify-center w-full py-32 mt-20">
      <div className="w-full">
        <h1 className="pb-5 text-4xl text-gray-900">Frequently Asked Questions</h1>
        <p className="text-gray-500">Jawaban untuk Pertanyaan Umum tentang Resep dan Penggunaan Website</p>
      </div>

      <div className="grid justify-center w-full grid-cols-1 py-10 place-items-center justify-items-center md:grid-cols-2 xl:grid-cols-3">
        {SupportsFaqList.map(({ question, answer, icon: IconComponent }: SupportFaqProps, index) => (
          <div className="flex gap-5 py-5 pl-5" key={index}>
            <div className="flex items-center justify-center w-12 h-12 p-2 border rounded-sm">
              <IconComponent />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800">{question}</h2>
              <p className="mt-2 text-sm text-gray-600">{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
