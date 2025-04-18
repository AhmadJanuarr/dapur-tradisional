import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { BookMarksButton } from "../Button/Bookmark"
// import { useState } from "react"
// import { Recipe } from "@/types/Recipe.types"

type RecipeCardProps = {
  img: string
  title: string
  category: string
  onClick?: () => void
}

const RecipeImage = ({ img, title }: { img: string; title: string }) => (
  <div className="mx-auto h-28 w-28 lg:h-[300px] lg:w-[300px]">
    <img src={img} className="h-full w-full rounded-full object-cover shadow-xl" alt={title} />
  </div>
)

const RecipeCard = ({ img, title, category, onClick }: RecipeCardProps) => {
  // const [bookmarks, setBookmarks] = useState<Recipe[]>([])
  return (
    <Card className="relative flex w-full flex-col rounded-xl border-none bg-slate-100 shadow-none dark:bg-darkBackground">
      <CardHeader className="relative overflow-hidden">
        <RecipeImage img={img} title={title} />
        <BookMarksButton />
      </CardHeader>
      <div className="flex h-32 flex-col justify-between gap-2 rounded-xl border border-slate-200 bg-white px-2 py-2  dark:bg-neutral-900 lg:h-[180px] lg:px-6 lg:py-4">
        <div className="flex flex-col gap-2 dark:text-black">
          <CardDescription className="dark:text-white">{category.replace("_", " ")}</CardDescription>
          <CardTitle className="mb-2 dark:text-white lg:text-2xl">{title}</CardTitle>
        </div>
        <Button
          onClick={onClick}
          variant="outline"
          className="rounded-xl border-[#ffeddf] px-10 text-[#f97316] hover:bg-[#f97316] hover:text-white md:w-[50%]"
        >
          <p className="subheading">Lihat Resep</p> <ChevronRight />
        </Button>
      </div>
    </Card>
  )
}

export default RecipeCard
