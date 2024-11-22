import { Button } from "../../ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import { ChevronRight } from "lucide-react"
import HeadingSection from "./HeadingSection"

function CardCategory({ title, content, src }: { title: string; content: string; src: string }) {
  return (
    <Card
      className="flex h-[300px] w-1/3 items-center justify-between border-none shadow-none"
      style={{ backgroundColor: "#F1F1F1" }}
    >
      <div className="">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="p-0 font-bold">
            Lihat Resep
            <ChevronRight className="" />
          </Button>
        </CardFooter>
      </div>
      <div className="flex w-[200px] items-center justify-center">
        <img src={src} alt="Bakpia" className="w-full" />
      </div>
    </Card>
  )
}
export default function CategorySection() {
  return (
    <section className="w-full">
      <HeadingSection heading="Kategori Resep" description="Temukan resep favoritmu berdasarkan kategori" />
      <div className="flex w-full justify-center gap-2">
        <CardCategory
          title="Makanan Ringan (Cemilan)"
          content="Cemilan unik dengan rasa dan tekstur khas Nusantara."
          src="/img/resep/Bakpia.png"
        />
        <CardCategory
          title="Makanan Utama (Berat)"
          content="Hidangan penuh cita rasa khas dari berbagai daerah Indonesia."
          src="/img/resep/SotoBetawi.png"
        />
        <CardCategory
          title="Kue Tradisional"
          content="Kue autentik yang menghadirkan rasa khas budaya Indonesia."
          src="/img/resep/KuePutu.png"
        />
      </div>
    </section>
  )
}
