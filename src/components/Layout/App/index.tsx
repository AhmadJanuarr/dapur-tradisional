import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import { useLocation } from "react-router-dom"
import { Toaster } from "sonner"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const availablePaths = ["/", "/about", "/contact", "/recipes", "/admin/dashboard"]
  const pathname = availablePaths.includes(location.pathname)

  return (
    <div className="flex w-full flex-col items-center justify-center border font-inter">
      <div className="w-full">
        {pathname && <Header />}
        <Toaster />
        <main className="flex w-full items-center justify-center">
          <div className={location.pathname === "/login" || location.pathname === "/signup" ? "w-full" : "w-3/4"}>
            {children}
          </div>
        </main>
        {pathname && <Footer />}
      </div>
    </div>
  )
}
