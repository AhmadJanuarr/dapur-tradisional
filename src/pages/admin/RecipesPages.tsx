import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { BookPlus } from "lucide-react"
import { Separator } from "@radix-ui/react-separator"
import { useState } from "react"
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

export default function RecipesPages() {
  const [open, setOpen] = useState(false)
  const isDesktop = useIsMobile()

  return (
    <section className="flex w-full">
      <div className="w-full px-10">
        <div className="py-10">
          <h1 className="text-3xl font-bold">Manajemen Resep</h1>
          <p>Tambahkan resep makanan daerah sesuai form yang tersedia</p>
        </div>

        <Card className="w-full px-4">
          <div className="flex w-full justify-between px-3 py-5 text-sm leading-none text-muted-foreground">
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
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>NAMA RESEP</TableHead>
                <TableHead>GAMBAR</TableHead>
                <TableHead>DESKRIPSI</TableHead>
                <TableHead>KATEGORI</TableHead>
                <TableHead>BAHAN</TableHead>
                <TableHead>LANGKAH</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium ">01</TableCell>
                <TableCell>Getuk</TableCell>
                <TableCell>
                  <img src="https://source.unsplash.com/1600x900/?food" width={100} height={100} alt="image" />
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  )
}
