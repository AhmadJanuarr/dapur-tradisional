/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { PasswordFields } from "@/components/User/PasswordFields"
import { useAuth } from "@/context/AuthContext"
import { useState } from "react"
import { FaSpinner } from "react-icons/fa6"

export const SettingProfile = () => {
  const { user, updateEmail, updatePassword } = useAuth()
  const [open, setOpen] = useState<boolean>(false)
  const [email, setEmail] = useState(user?.email)
  const [loading, setLoading] = useState<boolean>(false)
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
  })

  const handleUpdateEmail = async () => {
    if (email) updateEmail(email)
    setOpen(false)
  }

  const handleUpdatePassword = async (e: React.FormEvent) => {
    console.log("update password")
    try {
      setLoading(true)
      e.preventDefault()
      updatePassword(password.newPassword, password.currentPassword)
    } catch (error: any) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="px-20">
      <h1 className="heading font-raleway">Pengaturan akun</h1>
      <div className="flex flex-col gap-10 py-5">
        <div className="flex flex-col gap-4">
          <h5 className="text-semibold text-[16px] lg:text-[18px]">Email address</h5>
          <div className="subheading flex justify-between">
            <h5 className="text-gray-800 dark:text-slate-200">
              Email address kamu adalah <span className="font-semibold">{user!.email}</span>
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
          <form onSubmit={handleUpdatePassword}>
            <PasswordFields password={password} setPassword={setPassword} />
            <p>
              Ups! Lupa kata sandi?{" "}
              <a href="/forgot-password" className="font-semibold underline">
                Reset your password
              </a>
            </p>
            <div className="py-10">
              <Button className="w-60 rounded-full px-4 py-5 font-semibold lg:py-6" type="submit" disabled={loading}>
                {loading ? (
                  <div className="flex items-center gap-2">
                    <FaSpinner className="animate-spin" />
                    Tunggu sebentar
                  </div>
                ) : (
                  "Simpan perubahan"
                )}
              </Button>
            </div>
          </form>
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
