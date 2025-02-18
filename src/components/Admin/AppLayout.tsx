import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { useEffect, useState } from "react"
import AppSideBar from "./SideBar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <SidebarProvider>
      <AppSideBar />
      <main className="dark:bg-darkPrimary w-full items-center justify-center bg-slate-50">
        {!isMobile && <SidebarTrigger />}
        <header className="fixed z-50 flex w-full justify-between border-b-2 bg-white px-3 py-2 md:hidden">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        </header>
        <div className="pt-6 md:pt-0">{children}</div>
      </main>
    </SidebarProvider>
  )
}
