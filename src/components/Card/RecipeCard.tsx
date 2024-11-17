import { Button } from "../ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { ChevronRight } from "lucide-react"

export default function RecipeCard() {
  return (
    <Card className="flex flex-col items-center  border-none text-center shadow-none">
      <CardHeader>
        <div className="h-[400px] w-[300px]">
          <img src="/img/resep/Getuk.png" className="h-full w-full object-cover" alt="getuk" />
        </div>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="link">
          Lihat Resep <ChevronRight />
        </Button>
      </CardFooter>
    </Card>
  )
}
