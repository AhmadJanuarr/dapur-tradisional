import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const CardCategory = ({ title, src, color, to }: { title: string; src: string; color: string; to: string }) => {
  return (
    <div
      className={`relative flex h-[150px] items-center justify-between overflow-hidden rounded-xl border-none bg-cover bg-center bg-no-repeat lg:h-[250px] lg:w-1/3`}
      style={{ backgroundColor: `${color}` }}
    >
      <div className="z-10 flex w-full items-center justify-between px-5">
        <div className="z-20 flex w-full flex-col gap-5 lg:w-2/3">
          <h1 className="heading font-prata text-black lg:text-3xl">{title}</h1>
          <Link to={to}>
            <Button className="w-14 rounded-xl lg:w-12" variant="default">
              <ArrowRight />
            </Button>
          </Link>
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
    <section className="mt-2 w-full lg:mt-3">
      <div className="flex w-full flex-col justify-center gap-2 lg:flex-row ">
        <CardCategory
          title="Makanan Ringan (Cemilan)"
          color="#ffeddf"
          src="/logo/kategori-ringan.png"
          to="/recipes/category/Makanan_Ringan"
        />
        <CardCategory
          title="Makanan Utama (Berat)"
          color="#ffeddf"
          src="/logo/kategori-berat.png"
          to="/recipes/category/Makanan_Berat "
        />
        <CardCategory title="Kue Tradisional" color="#ffeddf" src="/logo/kategori-kue.png" to="/recipes/category/Kue" />
      </div>
    </section>
  )
}

export default CategorySection
