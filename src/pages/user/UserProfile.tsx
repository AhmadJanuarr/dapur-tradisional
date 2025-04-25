/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentsDialogContent } from "@/components/Dialog/Dialog"
import { HoverOverlay } from "@/components/Hover/HoverOverlay"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { useAuth } from "@/context/AuthContext"
import { AxiosWithAuth } from "@/lib/AxiosWithAuth"
import { useRef, useState } from "react"
import { toast } from "sonner"
import axios from "axios"

export const UserProfile = () => {
  const { user, updateName } = useAuth()
  const [preview, setPreview] = useState<string>(user?.avatar || "/elements/element-user.png")
  const [name, setName] = useState(user?.name)
  const [open, setOpen] = useState<boolean>(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const APIURL = import.meta.env.VITE_API_URL

  const handleUpdateName = async () => {
    if (name) updateName(name)
    setOpen(false)
  }

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onloadend = () => setPreview(reader?.result as string)
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    if (fileInputRef.current != null) {
      fileInputRef.current.click()
    }
  }

  const handleUpdateImage = async () => {
    const file = fileInputRef.current?.files?.[0]
    if (!file) return toast.error("Pilih gambar anda terlebih dahulu")
    const formData = new FormData()
    formData.append("avatar", file)

    try {
      const response = await AxiosWithAuth.put(`${APIURL}/api/auth/profile/upload-avatar`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      const avatarUpdate = response.data.data.avatar
      localStorage.setItem("user", JSON.stringify({ ...user, avatar: avatarUpdate }))
      toast.success("Berhasil mengganti gambar profile")
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(error.response.data.message)
      }
      toast.error("Terjadi kesalahan saat mengganti gambar profile")
    }
  }
  return (
    <div className="subheading lg:px-20">
      <h1 className="heading font-raleway">Profile</h1>
      <div className="flex justify-center ">
        <div className="group relative flex h-40 w-40 flex-col items-center justify-center py-8 ">
          <img
            src={preview}
            className="h-40 w-40 rounded-full border-4 border-[#FFEDDF] object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            alt="user not found"
          />
          <HoverOverlay onClick={triggerFileInput} />
          <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
        </div>
      </div>
      <div className="flex flex-col gap-10 py-5">
        <div className="flex justify-center gap-5">
          <button className="subheading underline" onClick={triggerFileInput}>
            Edit
          </button>
          <button onClick={() => handleUpdateImage()} className="subheading underline">
            Simpan
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-semibold text-[16px] lg:text-[18px]">Nama lengkap</h5>
          <div className="subheading flex justify-between">
            <h5 className="text-gray-800 dark:text-slate-200">{name}</h5>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <span className="cursor-pointer font-semibold underline">Edit</span>
              </DialogTrigger>
              <ComponentsDialogContent
                description="Masukkan nama lengkap kamu disini"
                title="Mengganti nama"
                value={name}
                isDelete={false}
                setValue={setName}
                handleClick={handleUpdateName}
              />
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
