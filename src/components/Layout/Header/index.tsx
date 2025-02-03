import { Link, useLocation, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { AlignJustify, HeartIcon } from "lucide-react"
import { LIST_MENU } from "@/data/datas"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

type NavLinkProps = {
  children: React.ReactNode
  href: string
  onClick?: () => void
}

const NavLink = ({ children, href, onClick }: NavLinkProps) => {
  return (
    <li>
      <Link to={href} className="hover:underline" onClick={onClick}>
        {children}
        <hr className="mt-2 border-gray-200" />
      </Link>
    </li>
  )
}

const LogoHeader = ({ title }: { title: string }) => {
  return (
    <Link to="/" className="flex items-center gap-2 font-inter text-xl md:text-2xl">
      <img src="/logo/logo-t.png" alt="logo website" className="w-10" />
      {title}
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState<boolean>(false)
  const [isScrollY, setIsScrollY] = useState<boolean>(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === "/"
  const isLogin = typeof window !== "undefined" && Boolean(localStorage.getItem("token"))

  const handleAuth = (value: string) => {
    const routes: { [key: string]: string | (() => void) } = {
      masuk: "/auth/login",
      daftar: "/auth/register",
      keluar: () => {
        localStorage.removeItem("token")
        navigate("/")
      },
    }
    if (typeof routes[value] === "string") navigate(routes[value])
    if (typeof routes[value] === "function") routes[value]()
  }

  useEffect(() => {
    const handleScroll = () => setIsScrollY(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    window.scrollTo(0, 0)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location])
  return (
    <header
      className={`left-0 top-0 z-50 w-full  
      ${isScrollY ? "fixed bg-white shadow-lg " : "absolute"}`}
    >
      <div
        className={`z-50 flex justify-between  px-5 py-5 transition-all duration-300 ${isScrollY && isHome ? " bg-white text-black" : isHome ? "text-white" : "bg-white text-black"}`}
      >
        <LogoHeader title="Dapur Tradisional" />
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-5">
            {LIST_MENU.usefulLinks.map((item) => (
              <NavLink href={item.href} key={item.name}>
                {item.name}
              </NavLink>
            ))}
          </ul>
        </nav>
        {/* Checking User Login */}
        {isLogin ? (
          <div className="hidden items-center gap-5 md:flex">
            <HeartIcon className="h-5 w-5" />
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage src="/img/user.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent side="top" align="end" className="w-auto text-[14px]">
                <div className="grid gap-4">
                  <ul className="space-y-2">
                    <li>Profil Saya</li>
                    <li>Pengaturan</li>
                    <li>Mode Gelap</li>
                    <Separator />
                    <li onClick={() => handleAuth("keluar")} className="cursor-pointer hover:underline">
                      Keluar
                    </li>
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <div className="hidden gap-5 md:flex">
            <Button
              variant="ghost"
              className={`${isHome && !isScrollY ? "border border-white" : "border border-black "} subheading`}
              onClick={() => handleAuth("masuk")}
            >
              Masuk
            </Button>
            <Button
              variant={`${isHome && !isScrollY ? "secondary" : "default"}`}
              onClick={() => handleAuth("daftar")}
              className="subheading"
            >
              Daftar sekarang
            </Button>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button className="flex items-center md:hidden" onClick={() => setOpen(!open)}>
          <AlignJustify className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Devices */}
      <div
        className={`absolute left-0 -z-10  mx-auto w-full rounded-b-xl  
          shadow-lg transition-all duration-500 ${!open && "-translate-y-[30rem] opacity-0"}`}
      >
        <div className="absolute -z-20 h-screen w-screen bg-slate-800 opacity-50 " onClick={() => setOpen(false)}></div>
        <div className="rounded-b-xl border bg-white px-2 py-5">
          <ul className="flex w-full flex-col gap-5">
            {LIST_MENU.usefulLinks.map((item) => (
              <NavLink href={item.href} key={item.name} onClick={() => setOpen(false)}>
                {item.name}
              </NavLink>
            ))}
            {isLogin ? (
              <li onClick={() => handleAuth("keluar")} className="cursor-pointer hover:underline">
                Keluar
              </li>
            ) : (
              <div className="flex flex-col gap-5">
                <li>
                  <Button className="w-full rounded-xl" variant="secondary" onClick={() => handleAuth("masuk")}>
                    Masuk
                  </Button>
                </li>
                <li>
                  <Button className="w-full rounded-xl" variant="default" onClick={() => handleAuth("daftar")}>
                    Daftar sekarang
                  </Button>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </header>
  )
}
