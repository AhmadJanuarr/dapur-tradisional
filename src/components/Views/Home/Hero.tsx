import { Link } from "react-router-dom"
import { Button } from "../../ui/button"
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
    <section className="w-full py-10">
      <div className="flex max-w-full items-center justify-center">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="mt-6">{description}</p>
          <Link to={to}>
            <Button className="mt-5">
              <Dessert />
              {callToAction}
            </Button>
          </Link>
        </div>
        <div className="flex w-1/2 justify-center">
          <img src={src} alt={src} />
        </div>
      </div>
    </section>
  )
}
