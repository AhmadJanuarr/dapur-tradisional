import { Button } from "../ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { ChevronRight } from "lucide-react"

export default function RecipeCard({
  image,
  title,
  description,
  category,
}: {
  image: string
  title: string
  description: string
  category: string
}) {
  return (
    <Card className="flex flex-col items-center  border-none text-center shadow-none">
      <CardHeader>
        <div className="h-[400px] w-[300px]">
          <img src={image} className="h-full w-full object-cover" alt="getuk" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description} - {category}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="link">
          Lihat Resep <ChevronRight />
        </Button>
      </CardFooter>
    </Card>
  )
}
