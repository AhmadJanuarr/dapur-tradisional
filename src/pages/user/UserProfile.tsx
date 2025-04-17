import { useAuth } from "@/context/AuthContext"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export const UserProfile = () => {
  const { user, updateName } = useAuth()
  const [name, setName] = useState(user.name)
  const [open, setOpen] = useState<boolean>(false)

  const handleUpdateName = async () => {
    await updateName(name)
    setOpen(false)
  }

  return (
    <div className="px-20">
      <h1 className="heading font-raleway">Profile</h1>
      <figure className="flex w-full flex-col items-center justify-center py-8">
        <img src="/elements/element-user.png" alt="Avatar" className="h-40 w-40" />
        <figcaption className="cursor-pointer py-5 text-center font-semibold underline">Edit</figcaption>
      </figure>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h5 className="text-semibold text-[16px] lg:text-[18px]">Nama lengkap</h5>
          <div className="subheading flex justify-between">
            <h5 className="text-gray-800 dark:text-slate-200">{name}</h5>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <span className="cursor-pointer font-semibold underline">Edit</span>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Mengganti nama</DialogTitle>
                  <DialogDescription>Masukkan nama lengkap kamu disini</DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                      Link
                    </Label>
                    <Input id="link" defaultValue={user.name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <Button type="submit" size="sm" className="px-3" onClick={() => handleUpdateName()}>
                    <span>Simpan</span>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="text-semibold text-[16px] lg:text-[18px]">Bio</h5>
          <div className="subheading flex justify-between">
            <h5 className="text-gray-800 dark:text-slate-200">Pengembang Web Senior di PT. Teknologi Masa Depan</h5>
            <button className="cursor-pointer font-semibold underline">Edit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
