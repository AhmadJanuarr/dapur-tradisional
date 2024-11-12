import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

export default function RecipeCard() {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <div className="w-full">
          <img src="/img/resep/getuk.png" className="w-full rounded-md" alt="getuk" />
        </div>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>Lihat Resep</Button>
      </CardFooter>
    </Card>
  )
}
