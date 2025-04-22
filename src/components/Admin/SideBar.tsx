import { BookText, LayoutGrid, LogOut, Moon, Sun, User } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from "sonner"
import { LoadingFullScreen } from "../Loading/LoadingFullScreen"
import { useState } from "react"
import { useTheme } from "@/hooks/useTheme"
import { useAuth } from "@/context/AuthContext"

const navItems = [
  { to: "/admin/dashboard", label: "Dashboards", icon: LayoutGrid },
  { to: "/admin/manage-resep", label: "Resep", icon: BookText },
  { to: "/admin/user", label: "Users", icon: User },
]

// Main Component
export const AppSideBar = () => {
  const { theme, toggleDarkMode } = useTheme()
  const { logout } = useAuth()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsLoading(true)
    setTimeout(() => {
      logout()
      navigate("/")
      toast.success("Berhasil keluar dari akun admin")
    }, 3000)
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-white dark:bg-darkBackground">
        {isLoading && <LoadingFullScreen />}
        <SidebarHeader className="text-2xl font-bold">Resep Manajemen</SidebarHeader>
        <SidebarGroupLabel className="heading">Utama</SidebarGroupLabel>
        <hr />
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuSubItem className="flex flex-col gap-5 pl-2">
              {navItems.map((item) => (
                <SidebarMenuSubButton asChild key={item.label}>
                  <Link to={item.to}>
                    <item.icon className="subheading w-5" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuSubButton>
              ))}
              <hr />
              <SidebarMenuSubButton asChild onClick={toggleDarkMode}>
                <span className="subheading flex cursor-pointer gap-2 pl-2">
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 cursor-pointer" />
                  ) : (
                    <Moon className="h-5 w-5 cursor-pointer" />
                  )}
                  Mode {theme === "dark" ? "terang" : "gelap"}
                </span>
              </SidebarMenuSubButton>
              <SidebarMenuSubButton asChild>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <span className="subheading flex cursor-pointer gap-2 pl-2">
                      <LogOut className="w-4" />
                      Keluar
                    </span>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Apakah kamu yakin ingin keluar?</AlertDialogTitle>
                      <AlertDialogDescription>Kamu akan keluar dari akun ini.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="rounded-md">Batalkan</AlertDialogCancel>
                      <AlertDialogAction onClick={handleLogout} className="rounded-md">
                        Lanjutkan
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>
    </Sidebar>
  )
}
