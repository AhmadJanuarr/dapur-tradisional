import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import { useLocation } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const pathname = location.pathname

  const routes = {
    availablePaths: ["/", "/about", "/contact", "/recipes"],
    isAdminRoute: location.pathname.startsWith("/admin"),
    isFullWidthRoute: ["/auth/login", "/auth/register", "/contact"].includes(location.pathname),
    isHome: pathname === "/",
  }
  const showHeaderFooter = routes.availablePaths.includes(pathname) || pathname.startsWith("/recipes/")
  const mainWidth =
    routes.isAdminRoute || routes.isFullWidthRoute || routes.isHome ? "w-full" : "lg:w-4/5 w-full px-5 lg:px-0"

  return (
    <div className="flex w-full flex-col items-center justify-center font-inter">
      <div className="w-full">
        {showHeaderFooter && <Header />}
        <Toaster richColors />
        <main className="flex w-full items-center justify-center">
          <div className={mainWidth}>{children}</div>
        </main>
        {showHeaderFooter && <Footer />}
      </div>
    </div>
  )
}
