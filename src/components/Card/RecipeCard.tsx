import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function RecipeCard({ image, title, category }: { image: string; title: string; category: string }) {
  return (
    <Card className="flex w-[25%] flex-col items-center border-none text-center shadow-none">
      <CardHeader>
        <div className="h-[300px]">
          <img src={image} className="h-full w-full object-cover" alt={title} />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{category.replace("_", " ")}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="link">
          Lihat Resep <ChevronRight />
        </Button>
      </CardFooter>
    </Card>
  )
}
