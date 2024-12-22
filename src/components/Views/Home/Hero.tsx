import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Dessert } from "lucide-react"

export default function HeroSection({
  heading,
  description,
  callToAction,
  src,
  to,
}: {
  heading: string
  description: string
  callToAction: string
  src: string
  to: string
}) {
  return (
    <section className="w-full py-10 mx-auto mt-20">
      <div className="flex items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl leading-tight">{heading}</h1>
          <p className="mt-6">{description}</p>
          <Link to={to}>
            <Button className="mt-5">
              <Dessert />
              {callToAction}
            </Button>
          </Link>
        </div>
        <div className="justify-center hidden w-1/2 md:flex">
          <img src={src} alt={src} />
        </div>
      </div>
    </section>
  )
}
