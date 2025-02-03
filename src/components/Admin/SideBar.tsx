// Refactored Sidebar Component for Better Maintainability
import { useEffect, useState } from "react"
import { CircleUser, LayoutGrid, ChevronsUpDown, Lock, LogOut, BookText } from "lucide-react"
import { Link } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

type MenuItem = {
  title: string
  icon: React.ReactNode
  onClick?: () => void
}

type NavListProps = {
  to: string
  label: string
  icon: React.ReactNode
  isActive: boolean
  onClick: () => void
}

const navItems = [
  { to: "/admin/dashboard", label: "Dashboard", icon: <LayoutGrid /> },
  { to: "/admin/recipes", label: "Recipes", icon: <BookText /> },
]

const handleLogout = () => {
  localStorage.removeItem("token")
  window.location.href = "/"
}

// Components
const NavList = ({ to, label, icon, isActive, onClick }: NavListProps) => (
  <Link to={to} onClick={onClick}>
    <Button
      className={`flex w-full justify-start gap-8 py-5 font-semibold hover:cursor-pointer hover:rounded-md ${
        isActive ? "bg-black text-white" : "hover:bg-black hover:text-white"
      }`}
      variant="ghost"
    >
      {icon}
      {label}
    </Button>
  </Link>
)

const Footer = ({ menuItems }: { menuItems: MenuItem[] }) => {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="py-5 hover:bg-gray-100">
                <Avatar className="h-8 w-8 rounded-md">
                  <AvatarImage src="/img/me.jpg" alt="AhmadJanuar" />
                </Avatar>
                Admin@gmail.com
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
              {menuItems.map((item) => (
                <DropdownMenuItem
                  key={item.title}
                  onClick={() => {
                    if (item.title === "Keluar") {
                      handleLogout()
                    }
                  }}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}

// Main Component
const AppSideBar = () => {
  const [activeItem, setActiveItem] = useState<string>("")
  useEffect(() => {
    setActiveItem(window.location.pathname)
  }, [])

  const menuItems = [
    { title: "Profile", icon: <CircleUser />, onClick: () => {} },
    { title: "Lupa Password", icon: <Lock />, onClick: () => {} },
    { title: "Keluar", icon: <LogOut />, onClick: () => {} },
  ]

  return (
    <Sidebar>
      <SidebarHeader>Resep Manajemen</SidebarHeader>
      <SidebarGroupLabel>Utama</SidebarGroupLabel>
      <SidebarContent>
        {navItems.map((item) => (
          <NavList
            key={item.to}
            to={item.to}
            label={item.label}
            icon={item.icon}
            isActive={activeItem === item.to}
            onClick={() => setActiveItem(item.to)}
          />
        ))}
      </SidebarContent>
      <Footer menuItems={menuItems} />
    </Sidebar>
  )
}

export default AppSideBar
