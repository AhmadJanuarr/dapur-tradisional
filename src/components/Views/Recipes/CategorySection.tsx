import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import HeadingSection from "./HeadingSection"

// Komponen untuk menampilkan kategori kartu
function CardCategory({ title, content, src }: { title: string; content: string; src: string }) {
  return (
    <Card
      className={`relative flex h-[600px] w-1/3 items-center justify-between rounded-xl border-none bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="absolute w-full h-full bg-black rounded-xl bg-opacity-30" />
      <div className="z-10 text-white">
        <CardHeader>
          <CardTitle className="text-3xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{content}</p>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="p-0 text-white text-primary">
            Lihat Resep
            <ChevronRight />
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}

// Komponen untuk menampilkan bagian kategori
export default function CategorySection() {
  return (
    <section className="w-full">
      <HeadingSection
        heading="Kategori Resep"
        description="Temukan resep favoritmu berdasarkan kategori"
        isShowButton={false}
      />
      <div className="flex justify-center w-full gap-2">
        <CardCategory
          title="Makanan Ringan (Cemilan)"
          content="Cemilan unik dengan rasa dan tekstur khas Nusantara."
          src="/img/resep/klepon.webp"
        />
        <CardCategory
          title="Makanan Utama (Berat)"
          content="Hidangan penuh cita rasa khas dari berbagai daerah Indonesia."
          src="/img/resep/ayam-betutu.webp"
        />
        <CardCategory
          title="Kue Tradisional"
          content="Kue autentik yang menghadirkan rasa khas budaya Indonesia."
          src="/img/resep/serabi.webp"
        />
      </div>
    </section>
  )
}
