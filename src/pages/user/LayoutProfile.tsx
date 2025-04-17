import { LoadingFullScreen } from "@/components/Loading"
import { SidebarProfile } from "@/components/User/SidebarProfile"
import { useAuth } from "@/context/AuthContext"
import { useState } from "react"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"

export default function LayoutProfile() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { logout } = useAuth()
  const { username } = useParams()
  const navigate = useNavigate()
  const pathname = useLocation().pathname

  const handleLogout = () => {
    setIsLoading(true)
    logout()
    setTimeout(() => {
      setIsLoading(false)
      navigate("/", { replace: true })
      toast.success(`Berhasil keluar dari akun ${username?.replace(/-/g, " ")}`)
    }, 2000)
  }

  return (
    <div className="flex min-h-screen w-full justify-center">
      {isLoading && <LoadingFullScreen />}
      <div className="2xl:py-18 grid w-full grid-cols-[20%,auto] lg:py-24">
        <SidebarProfile username={username} onLogout={handleLogout} pathname={pathname} />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
