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
import { Bell, BookPlus, LogOut, Settings, User } from "lucide-react"
import { Link } from "react-router-dom"

type SidebarProfileProps = {
  username?: string
  pathname?: string
  onLogout: () => void
  onNavigateMobile?: () => void
}

const navItems = [
  { label: "Profil saya", path: "", icon: <User className="size-5" /> },
  { label: "Tambahkan resep", path: "tambahkan-resep", icon: <BookPlus className="size-5" /> },
  { label: "Pengaturan akun", path: "pengaturan-akun", icon: <Settings className="size-5" /> },
  { label: "Notifikasi", path: "notifikasi", icon: <Bell className="size-5" /> },
]

export function SidebarProfile({ username, onLogout, pathname, onNavigateMobile }: SidebarProfileProps) {
  const basePath = `/profile/${username}/`
  const isActive = (target: string) => pathname === `${basePath}${target ? `${target}` : ""}`
  const activeClass = "bg-[#FFEDDF] font-bold text-gray-800"
  const baseClass = "cursor-pointer px-4 py-2 transition-all duration-200 flex items-center gap-5 subheading"

  return (
    <aside className="w-full lg:border-r-2">
      <h1 className="heading font-raleway">Settings</h1>
      <nav className="flex h-full w-full flex-col items-start justify-start gap-4 py-10">
        <ul className="flex w-full flex-col gap-4">
          {navItems.map(({ label, path, icon }) => (
            <Link
              key={path}
              to={`${basePath}${path ? `${path}` : ""}`}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  onNavigateMobile?.()
                }
              }}
            >
              <li className={`${baseClass} ${isActive(path) ? activeClass : ""}`}>
                {icon}
                {label}
              </li>
            </Link>
          ))}

          <li>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <p className={`${baseClass}`}>
                  <LogOut className="size-5" />
                  Keluar akun
                </p>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Apakah kamu yakin ingin keluar?</AlertDialogTitle>
                  <AlertDialogDescription>Kamu akan keluar dari akun ini.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="rounded-md">Batalkan</AlertDialogCancel>
                  <AlertDialogAction onClick={onLogout} className="rounded-md">
                    Lanjutkan
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
