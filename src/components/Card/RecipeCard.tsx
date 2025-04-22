import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { BookMarksButton } from "../Button/Bookmark"
import { RecipeCardProps } from "@/types/components.type"

const RecipeImage = ({ img, title }: { img: string; title: string }) => (
  <div className="lg:h-52 2xl:h-72">
    <img src={img} className="h-full w-full rounded-t-xl object-cover shadow-xl" alt={title} />
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
    <Card className="relative flex w-full flex-col rounded-xl border-none bg-slate-100 shadow-none dark:bg-darkBackground">
      <div className="relative overflow-hidden">
        <RecipeImage img={img} title={title} />
        <BookMarksButton onClickFavorite={onClickFavorite} isFavorite={isFavorite} />
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
