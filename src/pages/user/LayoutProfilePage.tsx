import { LoadingFullScreen } from "@/components/Loading/LoadingFullScreen"
import { SidebarProfile } from "@/components/User/SidebarProfile"
import { useAuth } from "@/context/AuthContext"
import { useTheme } from "@/hooks/useTheme"
import { ArrowLeft, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"

export default function LayoutProfilePage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showContentOnly, setShowContentOnly] = useState<boolean>(false)
  const { theme, toggleDarkMode } = useTheme()
  const { logout, user } = useAuth()
  const { username } = useParams()
  const navigate = useNavigate()
  const pathname = useLocation().pathname

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowContentOnly(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleLogout = () => {
    setIsLoading(true)
    logout()
    setTimeout(() => {
      setIsLoading(false)
      navigate("/", { replace: true })
      toast.success(`Berhasil keluar dari akun ${username?.replace(/-/g, " ")}`)
    }, 2000)
  }

  const notShowLayoutFavoritePage = pathname === `/profile/${user?.name?.replace(" ", "-")}/favorit`
  return (
    <div className="subheading flex min-h-screen flex-col">
      <div className="flex w-full flex-col justify-center">
        {isLoading && <LoadingFullScreen />}
        <div className="flex w-full items-center justify-between py-10">
          <button
            className={`flex cursor-pointer items-center gap-2 text-[#F97316] ${notShowLayoutFavoritePage || showContentOnly ? "hidden" : "block"}`}
            onClick={() => navigate("/")}
          >
            <ArrowLeft />
            Kembali
          </button>
          <button
            onClick={() => setShowContentOnly(false)}
            className={`flex cursor-pointer items-center gap-2 text-[#F97316] lg:hidden ${notShowLayoutFavoritePage || !showContentOnly ? "hidden" : "block"}`}
          >
            <ArrowLeft />
            Kembali ke menu
          </button>
          <span className="rounded-full bg-darkBackground p-2 dark:bg-white">
            {theme === "dark" ? (
              <Sun onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer text-darkBackground " />
            ) : (
              <Moon onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer text-white dark:bg-white" />
            )}
          </span>
        </div>
        <div
          className={`grid w-full ${notShowLayoutFavoritePage || showContentOnly ? "grid-cols-1" : "lg:grid-cols-[20%,auto]"}`}
        >
          {!notShowLayoutFavoritePage && !showContentOnly && (
            <div className="block lg:block">
              <SidebarProfile
                username={username}
                onLogout={handleLogout}
                pathname={pathname}
                onNavigateMobile={() => setShowContentOnly(true)}
              />
            </div>
          )}
          <div className={`p-5 ${notShowLayoutFavoritePage || showContentOnly ? "block" : "hidden lg:block"}`}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
