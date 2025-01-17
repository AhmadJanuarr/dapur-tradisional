import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SupportsFaqList } from "@/data/datas"
import { LucideIcon } from "lucide-react"
import { useEffect, useState } from "react"

interface SupportFaqProps {
  question: string
  answer: string
  icon: LucideIcon
}

export default function SupportFaq() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="mx-auto mt-10 flex flex-col items-center justify-center px-5 py-20 lg:w-4/5 lg:px-0">
      <div className="w-full">
        <h1 className="text heading-mobile pb-5 font-domine text-black">Pertanyaan yang Sering Diajukan</h1>
        <p className="subheading-mobile text-gray-500">
          Jawaban untuk Pertanyaan Umum tentang Resep dan Penggunaan Website
        </p>
      </div>

      <div className="grid w-full grid-cols-1 place-items-center justify-center justify-items-center py-10 md:grid-cols-2 xl:grid-cols-3">
        {SupportsFaqList.map(({ question, answer, icon: IconComponent }: SupportFaqProps, index) => (
          <div className="w-full" key={index}>
            {isMobile ? (
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index}`} className="subheading-mobile">
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <div className="flex gap-5 py-5 pl-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border p-2">
                  <IconComponent />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[1rem] font-semibold text-gray-800 lg:text-lg">{question}</h2>
                  <p className="subheading-mobile mt-2 text-gray-600 text-primary">{answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
