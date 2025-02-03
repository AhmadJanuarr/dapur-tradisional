import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SupportsFaqList } from "@/data/datas"
import { LucideIcon } from "lucide-react"

interface SupportFaqProps {
  question: string
  answer: string
  icon?: LucideIcon
}

interface SupportFaqSectionProps {
  heading: string
  subheading: string
}

const SupportFaq = ({ heading, subheading }: SupportFaqSectionProps) => {
  return (
    <section className="flex flex-col items-center justify-center px-5 py-20 mx-auto mt-10 lg:w-4/5 lg:px-0">
      <header className="w-full">
        <h1 className="pb-5 font-semibold text-black text heading">{heading}</h1>
        <p className="text-gray-500 subheading">{subheading}</p>
      </header>

      <div className="grid w-full grid-cols-1 gap-4 py-10 place-items-center md:grid-cols-2 xl:grid-cols-2">
        {SupportsFaqList.map(({ question, answer }: SupportFaqProps, index) => (
          <div className="w-full" key={index}>
            <Accordion type="single" collapsible className="w-full px-2 bg-gray-100 rounded-md lg:px-4">
              <AccordionItem value={`item-${index}`} className="border-none subheading">
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SupportFaq
