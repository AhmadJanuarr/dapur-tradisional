import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import { useLocation } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const pathname = location.pathname

  const routes = {
    availablePaths: ["/", "/about", "/contact", "/recipes", "/profile"],
    isAdminRoute: location.pathname.startsWith("/admin"),
    isFullWidthRoute: ["/auth/login", "/auth/register", "/contact"].includes(location.pathname),
    isHome: pathname === "/",
  }
  const showHeaderFooter = routes.availablePaths.includes(pathname) || pathname.startsWith("/recipes/")
  const mainWidth =
    routes.isAdminRoute || routes.isFullWidthRoute || routes.isHome
      ? "w-full"
      : "2xl:w-4/5 lg:w-11/12 w-full px-5 lg:px-0"

  return (
    <div className="flex w-full flex-col items-center justify-center font-rubik transition-all duration-300">
      <div className="w-full">
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
