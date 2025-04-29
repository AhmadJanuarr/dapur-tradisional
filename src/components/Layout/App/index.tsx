import { useLocation } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { useAuth } from "@/context/auth/useAuth"
import { ReactNode } from "react"
import { useFeature } from "@/context/features/useFeature"

export default function AppLayout({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const { isBlocking } = useFeature()
  const location = useLocation()
  const pathname = location.pathname
  const routes = {
    availablePaths: ["/", "/tentang-kami", "/kontak", "/resep", "/profile"],
    isAdminRoute: pathname.startsWith("/admin"),
    isFullWidthRoute: ["/auth/login", "/auth/register"].includes(location.pathname),
    isHome: pathname === "/",
  }
  const showHeaderFooter =
    routes.availablePaths.includes(pathname) ||
    pathname.startsWith("/resep/") ||
    pathname.includes(`/profile/${user?.name?.replace(" ", "-")}/favorit`)

  const mainWidth =
    routes.isAdminRoute || routes.isFullWidthRoute || routes.isHome
      ? "w-full"
      : "2xl:w-4/5 lg:w-11/12 w-full px-5 lg:px-0"

  return (
    <div className={`flex w-full flex-col items-center justify-center font-mona tracking-wide`}>
      {isBlocking && <div className="pointer-events-auto fixed inset-0 z-50 cursor-wait bg-transparent" />}
      <div className="relative w-full">
        {showHeaderFooter && <Header />}
        <Toaster richColors />
        <main className="flex w-full items-center justify-center dark:bg-darkPrimary ">
          <div className={mainWidth}>{children}</div>
        </main>
        {showHeaderFooter && <Footer />}
      </div>
    </div>
  )
}
