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
import { Link } from "react-router-dom"

type SidebarProfileProps = {
  username?: string
  onLogout: () => void
  pathname?: string
}

const navItems = [
  { label: "Profil saya", path: "" },
  { label: "Pengaturan akun", path: "pengaturan-akun" },
  { label: "Notifikasi", path: "notifikasi" },
]

export function SidebarProfile({ username, onLogout, pathname }: SidebarProfileProps) {
  const basePath = `/profile/${username}/`
  const isActive = (target: string) => pathname === `${basePath}${target ? `${target}` : ""}`
  const activeClass = " bg-[#FFEDDF] font-bold text-gray-800"
  const baseClass = "cursor-pointer px-4 py-2 transition-all duration-200"

  return (
    <aside className="border-r-2">
      <h1 className="heading font-raleway">Settings</h1>
      <nav className="flex h-full w-full flex-col items-start justify-start gap-4 py-10">
        <ul className="flex w-full flex-col gap-4">
          {navItems.map(({ label, path }) => (
            <Link key={path} to={`${basePath}${path ? `${path}` : ""}`}>
              <li className={`${baseClass} ${isActive(path) ? activeClass : ""}`}>{label}</li>
            </Link>
          ))}
          <li>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <p className={`${baseClass}`}>Keluar akun</p>
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
