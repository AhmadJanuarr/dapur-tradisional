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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

interface NavListProps {
  to: string
  children: React.ReactNode
  icon: React.ReactNode
  isActive: boolean
  onClick: () => void
}

interface MenuItem {
  title: string
  icon: React.ReactNode
}

const items = [
  {
    to: "/admin/dashboard",
    label: "Dashboard",
    icon: <LayoutGrid />,
  },
  {
    to: "/admin/recipes",
    label: "Recipes",
    icon: <BookText />,
  },
]

const menuItems: MenuItem[] = [
  {
    title: "Account",
    icon: <CircleUser />,
  },
  {
    title: "Forgot Password",
    icon: <Lock />,
  },
  {
    title: "Sign out",
    icon: <LogOut />,
  },
]

const NavList = ({ to, children, icon, isActive, onClick }: NavListProps) => {
  return (
    <Link to={to} onClick={onClick}>
      <Button
        className={`flex w-full justify-start gap-8 py-5 font-semibold hover:cursor-pointer hover:rounded-md ${
          isActive ? "bg-black text-white" : "hover:bg-black hover:text-white"
        }`}
        variant={"ghost"}
      >
        {icon}
        {children}
      </Button>
    </Link>
  )
}

const Footer = () => {
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
                <DropdownMenuItem key={item.title}>
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

export default function AppSideBar() {
  const [activeItem, setActiveItem] = useState<string>()

  useEffect(() => {
    setActiveItem(window.location.pathname)
  }, [])

  return (
    <Sidebar>
      <SidebarHeader>Recipe App</SidebarHeader>
      <SidebarGroupLabel>Application</SidebarGroupLabel>
      <SidebarContent>
        {items.map((item) => (
          <NavList
            key={item.to}
            to={item.to}
            icon={item.icon}
            isActive={activeItem === item.to}
            onClick={() => setActiveItem(item.to)}
          >
            {item.label}
          </NavList>
        ))}
      </SidebarContent>
      <Footer />
    </Sidebar>
  )
}
