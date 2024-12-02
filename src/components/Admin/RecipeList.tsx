import { TableBody, TableCell, TableRow } from "@/components/ui/table"

interface Recipe {
  title: string
  id: number
  image: string
  description: string
  category: string
  ingredients: { name: string; id: number }[]
  steps: { name: string; id: number }[]
}
export default function RecipeList({ recipes }: { recipes: Recipe[] }) {
  return (
    <TableBody>
      {recipes.slice(0, 10).map(({ title, id, image, description, category, ingredients, steps }: Recipe) => (
        <TableRow key={title} className="text-[13px]">
          <TableCell className="font-medium ">{id}</TableCell>
          <TableCell>{title}</TableCell>
          <TableCell>
            <img src={`${import.meta.env.VITE_API_URL}/images/${image}`} width={100} height={100} alt="image" />
          </TableCell>
          <TableCell>{description}</TableCell>
          <TableCell>{category.replace("_", " ")}</TableCell>
          <TableCell>
            <ol className="list-disc list-inside">
              {ingredients.map(({ name, id }: { name: string; id: number }) => (
                <li key={id}>{name}</li>
              ))}
            </ol>
          </TableCell>
          <TableCell>
            <ol className="list-disc list-inside">
              {steps.map(({ name, id }: { name: string; id: number }) => (
                <li key={id}>{name}</li>
              ))}
            </ol>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
