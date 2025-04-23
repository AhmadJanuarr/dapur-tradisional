import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { BookMarksButton } from "../Button/Bookmark"
import { RecipeCardProps } from "@/types/components.type"
import { LazyLoadImage } from "react-lazy-load-image-component"
import palceholderImage from "/elements/element-placeholder.jpg"
import "react-lazy-load-image-component/src/effects/blur.css"

const RecipeImage = ({ img, title }: { img: string; title: string }) => (
  <div className="h-36 lg:h-40 2xl:h-48">
    <LazyLoadImage
      placeholderSrc={palceholderImage}
      effect="blur"
      src={img}
      className="object-cover w-full h-full shadow-xl rounded-t-xl"
      alt={title}
    />
  </div>
)

export const RecipeCard = ({
  img,
  title,
  category,
  isFavorite,
  onClickViewDetail,
  onClickFavorite,
}: RecipeCardProps) => {
  return (
    <Card className="relative flex flex-col w-full border-none shadow-none rounded-xl bg-slate-100 dark:bg-darkBackground">
      <div className="relative overflow-hidden">
        <RecipeImage img={img} title={title} />
        <div
          onClick={onClickFavorite}
          className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow cursor-pointer right-2 top-2"
        >
          <BookMarksButton isFavorite={isFavorite} />
        </div>
      </div>
      <div className="flex h-32 flex-col justify-between gap-2 rounded-b-xl border border-slate-200 bg-white px-2 py-2 dark:bg-neutral-800 lg:h-[170px] lg:px-6 lg:py-4">
        <div className="flex flex-col gap-2 dark:text-black">
          <CardDescription className="dark:text-white">{category.replace("_", " ")}</CardDescription>
          <CardTitle className="mb-2 font-raleway dark:text-white lg:text-2xl">{title}</CardTitle>
        </div>
        <Button
          onClick={onClickViewDetail}
          variant="outline"
          className="rounded-xl border-[#ffeddf] px-10 text-[#f97316] hover:bg-[#f97316] hover:text-white lg:w-[60%] 2xl:w-[50%]"
        >
          <p className="subheading">Lihat Resep</p> <ChevronRight />
        </Button>
      </div>
    </Card>
  )
}
