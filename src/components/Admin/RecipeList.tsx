import { TableBody, TableCell, TableRow } from "@/components/ui/table"
import { EditIcon, Trash2 } from "lucide-react"
import { Button } from "../ui/button"
import axios from "axios"
import { toast } from "sonner"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog"

interface Recipe {
  title: string
  id: number
  image: string
  description: string
  category: string
  difficulty: string
}

export default function RecipeList({ recipes = [] }: { recipes: Recipe[] }) {
  const handleDelete = async (id: number) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/recipes/${id}`)
      toast.success(response.data.message)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TableBody>
      {recipes.slice(0, 10).map(({ title, image, description, category, difficulty, id }: Recipe, index) => (
        <TableRow key={title} className="subheading">
          <TableCell className="text-center font-medium">{index + 1}</TableCell>
          <TableCell className="flex items-center gap-2">
            <img src={image} width={100} alt="image" loading="lazy" className="rounded-sm" />
            {title}
          </TableCell>
          <TableCell>{description.slice(0, 100)}...</TableCell>
          <TableCell>{category.replace("_", " ")}</TableCell>
          <TableCell>
            <div
              className={`${difficulty === "Mudah" ? "bg-green-200  text-green-900" : difficulty === "Sedang" ? "bg-yellow-200 text-yellow-900" : "bg-red-200 text-red-900"} rounded-md py-1 text-center`}
            >
              {difficulty}
            </div>
          </TableCell>
          <TableCell>
            <div className="flex justify-center gap-5">
              <Button variant="link" className="p-0">
                <EditIcon />
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="link" className="p-0 text-red-500">
                    <Trash2 />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Apakah kamu yakin ingin menghapus ini ?</AlertDialogTitle>
                    <AlertDialogDescription>Kamu akan menghapus resep ini secara permanen.</AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="rounded-md">Batalkan</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(id)} className="rounded-md bg-red-500">
                      Lanjutkan
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
