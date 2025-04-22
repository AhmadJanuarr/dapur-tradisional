import { LoadingFullScreen } from "@/components/Loading/LoadingFullScreen"
import { SidebarProfile } from "@/components/User/SidebarProfile"
import { useAuth } from "@/context/AuthContext"
import { useTheme } from "@/hooks/useTheme"
import { ArrowLeft, Moon, Sun } from "lucide-react"
import { useState } from "react"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"

export default function LayoutProfile() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { theme, toggleDarkMode } = useTheme()
  const { logout, user } = useAuth()
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

  const notShowLayout = pathname === `/profile/${user?.name?.replace(" ", "-")}/favorit`
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex w-full flex-col justify-center">
        {isLoading && <LoadingFullScreen />}
        <div className="flex w-full items-center justify-between py-10">
          <span className="flex cursor-pointer items-center gap-2 text-[#F97316]" onClick={() => navigate("/resep")}>
            <ArrowLeft />
            Kembali
          </span>
          <span className="rounded-full bg-darkBackground p-2 dark:bg-white">
            {theme === "dark" ? (
              <Sun onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer text-darkBackground " />
            ) : (
              <Moon onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer text-white dark:bg-white" />
            )}
          </span>
        </div>
        <div className={`grid w-full ${notShowLayout ? "grid-cols-1" : "lg:grid-cols-[20%,auto]"}`}>
          {!notShowLayout && (
            <div className="block lg:block">
              <SidebarProfile username={username} onLogout={handleLogout} pathname={pathname} />
            </div>
          )}
          <div className={`p-5 ${notShowLayout ? "block" : "hidden lg:block"}`}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
