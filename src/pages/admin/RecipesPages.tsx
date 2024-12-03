import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { BookPlus } from "lucide-react"
import { Separator } from "@radix-ui/react-separator"
import { useEffect, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import RecipeForm from "@/components/Admin/RecipeForm"
import axios from "axios"
import { RecipeFormValues } from "@/types/RecipeForm.types"
import RecipeList from "@/components/Admin/RecipeList"
import PaginationControl from "@/components/Admin/PaginationControl"

export default function RecipesPages() {
  const [open, setOpen] = useState(false)
  const isDesktop = useIsMobile()
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const fetching = await axios.get(`${import.meta.env.VITE_API_URL}/api/recipes`)
        const response = fetching.data
        setRecipes(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getRecipes()
  }, [])
  console.log(recipes)
  return (
    <section className="flex w-full">
      <div className="w-full px-10">
        <div className="pt-10">
          <h1 className="text-3xl font-bold">Manajemen Resep</h1>
          <p>Tambahkan resep makanan daerah sesuai form yang tersedia</p>
        </div>

        <Card className="w-full px-4 my-10">
          <div className="flex justify-between w-full px-3 py-5 text-sm leading-none text-muted-foreground">
            <div className="flex items-center gap-5">
              <BookPlus />
              <h2 className="font-medium">Recipes list</h2>
            </div>

            <div>
              {!isDesktop ? (
                //DEKSTOP DEVICE
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button variant="default">Tambahkan Resep Baru</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px]">
                    <DialogHeader>
                      <DialogTitle>Tambahkan Resep Baru</DialogTitle>
                      <DialogDescription>Isi formulir di bawah ini untuk menambahkan resep baru..</DialogDescription>
                    </DialogHeader>
                    <RecipeForm />
                  </DialogContent>
                </Dialog>
              ) : (
                //MOBILE DEVICE
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger asChild>
                    <Button variant="default">Tambahkan Resep Baru</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Tambahkan Resep Baru</DrawerTitle>
                      <DrawerDescription>Isi formulir di bawah ini untuk menambahkan resep baru..</DrawerDescription>
                    </DrawerHeader>
                    <RecipeForm className="px-4" />
                    <DrawerFooter className="pt-2">
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </div>
          </div>

          <Separator />

          <Table>
            <TableHeader>
              <TableRow className="text-[13px]">
                <TableHead className="w-[50px] text-black">ID</TableHead>
                <TableHead className="w-[150px] text-black">NAMA RESEP</TableHead>
                <TableHead className="text-black">GAMBAR</TableHead>
                <TableHead className="w-[300px] text-black">DESKRIPSI</TableHead>
                <TableHead className="text-black">KATEGORI</TableHead>
                <TableHead className="text-black">BAHAN</TableHead>
                <TableHead className="text-black">LANGKAH</TableHead>
              </TableRow>
            </TableHeader>
            <RecipeList recipes={recipes} />
          </Table>
          <PaginationControl />
        </Card>
      </div>
    </section>
  )
}
