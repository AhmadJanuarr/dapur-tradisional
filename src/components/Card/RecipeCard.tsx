import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Heart } from "lucide-react"

type RecipeCardProps = {
  image: string
  title: string
  category: string
  handleClick?: () => void
}

const RecipeImage = ({ image, title }: { image: string; title: string }) => (
  <div className="3xl:h-[300px] mx-auto h-[250px] w-[250px] lg:h-[250px]">
    <img src={image} className="h-full w-full rounded-full object-cover shadow-xl" alt={title} />
  </div>
)

const FavoriteButton = () => (
  <div className="absolute right-2 top-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow">
    <Heart className="text-slate-400" size={25} />
  </div>
)

export default function RecipeCard({ image, title, category, handleClick = () => {} }: RecipeCardProps) {
  return (
    <Card className="relative flex w-full flex-col rounded-xl border-none bg-slate-100 p-1 shadow-none md:w-[48.8%] lg:w-[24%]">
      <CardHeader className="relative">
        <RecipeImage image={image} title={title} />
        <FavoriteButton />
      </CardHeader>
      <div className="flex flex-col justify-between gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2 lg:h-[170px]">
        <div className="flex flex-col gap-2">
          <CardDescription>{category.replace("_", " ")}</CardDescription>
          <CardTitle className="mb-2 lg:text-2xl">{title}</CardTitle>
        </div>
        <Button
          onClick={handleClick}
          variant="outline"
          className="w-[50%] border-[#31ac5d] text-[#31ac5d] hover:bg-[#31ac5d] hover:text-white"
        >
          Lihat Resep <ChevronRight />
        </Button>
      </div>
    </Card>
  )
}
