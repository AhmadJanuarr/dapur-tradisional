import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { BookMarksButton } from "../Button/Bookmark"
// import { useState } from "react"
// import { Recipe } from "@/types/Recipe.types"

type RecipeCardProps = {
  image: string
  title: string
  category: string
  handleClickViewDetail?: () => void
}

const RecipeImage = ({ image, title }: { image: string; title: string }) => (
  <div className="mx-auto h-36 w-36 lg:h-[300px] lg:w-[300px]">
    <img src={image} className="h-full w-full rounded-full object-cover shadow-xl" alt={title} />
  </div>
)

export default function RecipeCard({ image, title, category, handleClickViewDetail }: RecipeCardProps) {
  // const [bookmarks, setBookmarks] = useState<Recipe[]>([])
  return (
    <Card className="relative flex w-full flex-col rounded-xl border-none bg-slate-100 shadow-none dark:bg-darkBackground">
      <CardHeader className="relative overflow-hidden">
        <RecipeImage image={image} title={title} />
        <BookMarksButton />
      </CardHeader>
      <div className="flex h-32 flex-col justify-between gap-2 rounded-xl border border-slate-200 bg-white px-2 py-2 lg:h-[180px] lg:px-6 lg:py-4">
        <div className="flex flex-col gap-2 dark:text-black">
          <CardDescription>{category.replace("_", " ")}</CardDescription>
          <CardTitle className="mb-2 lg:text-2xl">{title}</CardTitle>
        </div>
        <Button
          onClick={handleClickViewDetail}
          variant="outline"
          className="rounded-xl border-[#ffeddf] px-10 text-[#f97316] hover:bg-[#f97316] hover:text-white md:w-[50%]"
        >
          <p className="subheading">Lihat Resep</p> <ChevronRight />
        </Button>
      </div>
    </Card>
  )
}
