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
    <section className="items-left mx-auto mt-24 flex flex-col justify-center gap-10 px-5 lg:w-11/12 lg:px-0 lg:py-14 2xl:w-4/5">
      <h1 className="text heading font-raleway text-black dark:text-white">{heading}</h1>
      <p className="subheading text-gray-800 dark:text-white">{subheading}</p>
      <div className="grid w-full grid-cols-1 place-items-center gap-4 md:grid-cols-2 xl:grid-cols-2">
        {SupportsFaqList.map(({ question, answer }: SupportFaqProps, index) => (
          <div className="w-full" key={index}>
            <Accordion
              type="single"
              collapsible
              className="w-full rounded-md bg-gray-100 px-2 dark:bg-darkBackground lg:px-4"
            >
              <AccordionItem value={`item-${index}`} className="subheading border-none dark:text-white">
                <AccordionTrigger className="text-left font-semibold">{question}</AccordionTrigger>
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
