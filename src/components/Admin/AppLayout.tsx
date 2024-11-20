import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSideBar from "./SideBar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSideBar />
      <main className=" w-full items-center justify-center">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
