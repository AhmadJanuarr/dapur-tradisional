import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const CardCategory = ({ title, src, color }: { title: string; src: string; color: string }) => {
  return (
    <div
      className={`relative flex h-[150px] items-center justify-between overflow-hidden rounded-xl border-none bg-cover bg-center bg-no-repeat lg:h-[250px] lg:w-1/3`}
      style={{ backgroundColor: `${color}` }}
    >
      <div className="z-10 flex w-full items-center justify-between px-5">
        <div className="z-20 flex w-1/2 flex-col gap-5">
          <h1 className="font-inter text-xl font-semibold lg:text-3xl">{title}</h1>
          <Button className="w-10 lg:w-12" variant="outline">
            <ArrowRight />
          </Button>
        </div>
        <figure className="absolute -right-14 top-10">
          <img src={src} alt="kategori" className=" w-[10rem] object-cover lg:w-[20rem]" />
        </figure>
      </div>
    </div>
  )
}

const CategorySection = () => {
  return (
    <section className="mt-10 w-full lg:mt-3">
      <div className="flex w-full flex-col justify-center gap-2 lg:flex-row ">
        <CardCategory title="Makanan Ringan (Cemilan)" color="#D0E7D2" src="/logo/kategori-ringan.png" />
        <CardCategory title="Makanan Utama (Berat)" color="#D0E7D2" src="/logo/kategori-berat.png" />
        <CardCategory title="Kue Tradisional" color="#D0E7D2" src="/logo/kategori-kue.png" />
      </div>
    </section>
  )
}

export default CategorySection
