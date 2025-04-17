import { Button } from "@/components/ui/button"
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
import { useAuth } from "@/context/AuthContext"
import { useState } from "react"

export const SettingProfile = () => {
  const { user, updateEmail } = useAuth()
  const [open, setOpen] = useState<boolean>(false)
  const [email, setEmail] = useState(user.email)

  const handleUpdateEmail = async () => {
    await updateEmail(email)
    setOpen(false)
  }
  return (
    <div className="px-20 ">
      <h1 className="heading font-raleway">Pengaturan akun</h1>
      <div className="flex flex-col gap-10 py-5">
        <div className="flex flex-col gap-4">
          <h5 className="text-semibold text-[16px] lg:text-[18px]">Email address</h5>
          <div className="subheading flex justify-between">
            <h5 className="text-gray-800 dark:text-slate-200">
              Email address kamu adalah <span className="font-semibold">{user.email}</span>
            </h5>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <span className="cursor-pointer font-semibold underline">Edit</span>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Mengganti email</DialogTitle>
                  <DialogDescription>Masukkan email kamu disini</DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                      Link
                    </Label>
                    <Input id="link" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <Button type="submit" size="sm" className="px-3" onClick={() => handleUpdateEmail()}>
                    <span>Simpan</span>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-semibold text-[16px] lg:text-[18px]">Password</h5>
          <div className="subheading flex justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-5">
                <label htmlFor="password" className="text-gray-800 dark:text-slate-200">
                  Password sekarang
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="*********"
                  className="h-12 w-full rounded-lg border-2 border-gray-300 px-4 outline-none focus:border-blue-500 dark:text-black dark:placeholder:text-black"
                />
              </div>
              <div className="flex flex-col gap-5">
                <label htmlFor="new-password" className="text-gray-800 dark:text-slate-200">
                  Password baru
                </label>
                <input
                  type="password"
                  id="new-password"
                  placeholder="*********"
                  className="h-12 w-full rounded-lg border-2 border-gray-300 px-4 outline-none focus:border-blue-500 dark:text-black dark:placeholder:text-black"
                />
              </div>
            </div>
            <button className="cursor-pointer font-semibold underline">Tampilkan</button>
          </div>
          <p>
            Ups! Lupa kata sandi?{" "}
            <a href="/forgot-password" className="font-semibold underline">
              Reset your password
            </a>
          </p>

          <div className="py-10">
            <Button className="w-60 rounded-full px-4 py-5 font-semibold lg:py-6">Simpan perubahan</Button>
          </div>

          <div className="grid w-full gap-5">
            <p>Menghapus akun ?</p>
            <p>
              Jika Anda melanjutkan penghapusan akun, semua informasi terkait akun Anda, termasuk data dapur, menu, dan
              riwayat pesanan akan dihapus secara permanen dan tidak dapat dipulihkan.
            </p>
            <p className="cursor-pointer font-semibold text-red-800 hover:underline">saya ingin menghapus akun saya</p>
          </div>
        </div>
      </div>
    </div>
  )
}
