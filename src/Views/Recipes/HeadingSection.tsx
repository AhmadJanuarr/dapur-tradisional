import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeadingSection({
  heading,
  description,
  isShowButton,
  cta,
}: {
  heading: string
  description?: string
  isShowButton: boolean
  cta?: string
}) {
  return (
    <section className="w-full pb-8 pt-14 lg:pb-5 lg:pt-20">
      <div className={`flex w-full ${isShowButton ? "justify-between" : "justify-center text-center"} `}>
        <div>
          <h1 className="heading font-raleway">{heading}</h1>
          <p className="subheading my-2 text-gray-800 dark:text-slate-200">{description}</p>
        </div>
        {isShowButton && (
          <Button variant="link" className="hidden w-1/5 items-center text-[16px] lg:flex">
            {cta}
            <ArrowRight />
          </Button>
        )}
      </div>
    </section>
  )
}
