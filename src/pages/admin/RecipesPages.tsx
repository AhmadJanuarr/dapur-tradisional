import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { BookPlus, PlusIcon, TrashIcon } from "lucide-react"
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
import { FormControl } from "@/components/ui/form"
import { useFieldArray, useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"

function ProfileForm({ className }: { className?: string }) {
  const method = useForm()
  const ingredientsArray = useFieldArray({
    control: method.control,
    name: "ingredients",
  })

  const stepsArray = useFieldArray({
    control: method.control,
    name: "steps",
  })
  async function onSubmit(e) {
    e.preventDefault()
    console.log(e)
  }

  return (
    <form className={`flex flex-col items-start gap-4 ${className}`} onSubmit={onSubmit}>
      <div className="flex w-full gap-5">
        {/* Kolom Kiri */}
        <div className="w-1/2 space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="title">Nama resep</Label>
            <Input type="text" id="title" placeholder="Nama resep" {...method.register("title")} />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="text">Deskripsi</Label>
            <Textarea id="text" placeholder="Deskripsi resep" {...method.register("description")} />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="image" className="text-sm font-medium">
              Gambar
            </label>
            <Input id="image" type="file" className="w-full rounded border px-3 py-2" {...method.register("image")} />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="category" className="text-sm font-medium">
              Kategori
            </label>
            <Select {...method.register("category")}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Makanan_Ringan">Makanan Ringan</SelectItem>
                <SelectItem value="Makanan_Berat">Makanan Berat</SelectItem>
                <SelectItem value="Kue">Kue</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="w-1/2 space-y-4">
          <div className="space-y-2 p-4">
            <h3 className="font-semibold">Bahan-bahan</h3>
            {ingredientsArray.fields.map((field, index) => (
              <div key={field.id} className="flex items-center gap-2">
                <Input type="text" {...method.register(`ingredients.${index}`)} placeholder={`Bahan ${index + 1}`} />
                <Button variant="destructive" size="icon" onClick={() => ingredientsArray.remove(index)}>
                  <TrashIcon />
                </Button>
              </div>
            ))}
            <Button variant="secondary" size="sm" onClick={() => ingredientsArray.append("")}>
              <PlusIcon className="mr-2" /> Tambah Bahan
            </Button>
          </div>

          <div className="space-y-2 p-4">
            <h3 className="font-semibold">Langkah-langkah</h3>
            {stepsArray.fields.map((field, index) => (
              <div key={field.id} className="flex items-center gap-2">
                <Input {...method.register(`steps.${index}`)} placeholder={`Langkah ${index + 1}`} />
                <Button variant="destructive" size="icon" onClick={() => stepsArray.remove(index)}>
                  <TrashIcon />
                </Button>
              </div>
            ))}
            <Button variant="secondary" size="sm" onClick={() => stepsArray.append("")}>
              <PlusIcon className="mr-2" /> Tambah Langkah
            </Button>
          </div>
        </div>
      </div>
      <Button type="submit">Simpan Resep</Button>
    </form>
  )
}

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
                  <DialogContent className="sm:max-w-[888px]">
                    <DialogHeader>
                      <DialogTitle>Tambahkan Resep Baru</DialogTitle>
                      <DialogDescription>Isi formulir di bawah ini untuk menambahkan resep baru..</DialogDescription>
                    </DialogHeader>
                    <ProfileForm />
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
                    <ProfileForm className="px-4" />
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
