import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeadingSection({
  heading,
  description,
  isShowButton,
}: {
  heading: string
  description: string
  isShowButton: boolean
}) {
  return (
    <section className="w-full pt-24 pb-10">
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="mt-2">{description}</p>
        </div>
        {isShowButton && (
          <Button variant="link" className="text-[16px]">
            Lihat Semua <ArrowRight />
          </Button>
        )}
      </div>
    </section>
  )
}
