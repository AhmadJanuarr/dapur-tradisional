import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { AlignJustify, Bookmark, LogOut, Moon, Settings, Sun, User } from "lucide-react"
import { LIST_MENU } from "@/data/datas"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { LoadingFullScreen } from "@/components/Loading"
import { useTheme } from "@/hooks/useTheme"
import { useHeader } from "@/hooks/useHeader"

type NavLinkProps = {
  children: React.ReactNode
  href: string
  onClick?: () => void
}
type UserAlreadyLoggedProps = {
  theme: string
  handleAuth: (action: string) => void
  toggleDarkMode: () => void
  handleUserProfile?: () => void | undefined
}

interface UserNotLooggedProps extends UserAlreadyLoggedProps {
  isHome: boolean
  isScrollY: boolean
}

const NavLink = ({ children, href, onClick }: NavLinkProps) => {
  return (
    <li>
      <Link to={href} className="hover:underline" onClick={onClick}>
        {children}
      </Link>
      <hr className="mt-2 block border-gray-200 md:hidden" />
    </li>
  )
}

const LogoHeader = () => {
  return (
    <Link to="/" className="flex w-1/3 items-center gap-2 text-xl md:text-2xl">
      <img src="/logo/logo-t.png" alt="logo website" className="w-10" />
      Dapur <span className="text-[#F97316]">tadisional</span>
    </Link>
  )
}

const UserAlreadyLogged = ({ handleAuth, toggleDarkMode, theme, handleUserProfile }: UserAlreadyLoggedProps) => (
  <div className="hidden w-1/3 items-center justify-end gap-5 md:flex">
    {theme === "dark" ? (
      <Sun onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer" />
    ) : (
      <Moon onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer" />
    )}
    <Separator orientation="vertical" className="h-5 bg-gray-700" />
    <Bookmark className="h-5 w-5 cursor-pointer" />
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="/img/user.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent side="top" align="end" className="z-50">
        <div className="grid gap-4">
          <ul className="subheading space-y-4">
            <li className="flex items-center gap-2">
              <img src="/img/user.png" alt="user" className="h-12 w-12 rounded-full" />
              <div className="flex items-center gap-2">Username</div>
            </li>
            <li
              className="flex cursor-pointer items-center gap-5 hover:underline"
              onClick={() => handleUserProfile?.()}
            >
              <User className="h-5 w-5" /> Profil Saya
            </li>
            <li className="flex cursor-pointer items-center gap-5 hover:underline">
              <Settings className="h-5 w-5" />
              Pengaturan
            </li>
            <Separator />
            <li onClick={() => handleAuth("keluar")} className="flex cursor-pointer items-center gap-5 hover:underline">
              <LogOut className="h-5 w-5" />
              Keluar
            </li>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  </div>
)

const UserNotLogged = ({ handleAuth, isHome, isScrollY, theme, toggleDarkMode }: UserNotLooggedProps) => (
  <div className="hidden w-1/3 items-center justify-end gap-5 md:flex">
    {theme === "dark" ? (
      <Sun onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer" />
    ) : (
      <Moon onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer" />
    )}
    <Separator orientation="vertical" className="h-5 bg-gray-700" />
    <Button
      variant="ghost"
      className={`${isHome && !isScrollY ? "border border-white" : "border border-black dark:border-white "} subheading`}
      onClick={() => handleAuth("login")}
    >
      Masuk
    </Button>
    <Button
      variant={`${isHome && !isScrollY ? "secondary" : "default"}`}
      onClick={() => handleAuth("register")}
      className="subheading"
    >
      Daftar sekarang
    </Button>
  </div>
)

export default function Header() {
  const { handleAuth, isHome, user, isScrollY, loading, open, setOpen } = useHeader()
  const { toggleDarkMode, theme } = useTheme()
  const navigate = useNavigate()

  const handleUserProfile = () => {
    navigate("/profile")
  }
  return (
    <header className={`fixed left-0 top-0 z-30 w-full`}>
      <div
        className={`flex w-full justify-between px-5 py-5 transition-all duration-200 ${isScrollY && isHome ? " bg-white text-black dark:bg-darkSecondary dark:text-white" : isHome ? "text-white" : "bg-white text-black dark:bg-darkSecondary dark:text-white"}`}
      >
        <LogoHeader />
        <nav className="hidden w-1/3 justify-center md:flex">
          <ul className="flex items-center justify-center gap-5">
            {LIST_MENU.usefulLinks.map((item) => (
              <NavLink href={item.href} key={item.name}>
                {item.name}
              </NavLink>
            ))}
          </ul>
        </nav>
        {user.role === "USER" ? (
          <UserAlreadyLogged
            handleAuth={handleAuth}
            toggleDarkMode={toggleDarkMode}
            theme={theme}
            handleUserProfile={handleUserProfile}
          />
        ) : (
          <UserNotLogged
            handleAuth={handleAuth}
            isHome={isHome}
            isScrollY={isScrollY}
            theme={theme}
            toggleDarkMode={toggleDarkMode}
          />
        )}

        {/* Mobile Menu Toggle */}
        <Button className="flex items-center md:hidden" onClick={() => setOpen(!open)}>
          <AlignJustify className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Devices */}
      <div
        className={`absolute left-0 -z-10  mx-auto w-full rounded-b-xl  
          shadow-lg transition-all duration-500 ${!open && "-translate-y-[30rem] opacity-0"}`}
      >
        <div
          className="absolute -z-20 block h-screen w-screen bg-slate-800 opacity-50 md:hidden "
          onClick={() => setOpen(false)}
        ></div>
        <div className="rounded-b-xl border bg-white px-2 py-5">
          <ul className="flex w-full flex-col gap-5">
            {LIST_MENU.usefulLinks.map((item) => (
              <NavLink href={item.href} key={item.name} onClick={() => setOpen(false)}>
                {item.name}
              </NavLink>
            ))}
            {user.role === "USER" ? (
              <li onClick={() => handleAuth("keluar")} className="cursor-pointer hover:underline">
                Keluar
              </li>
            ) : (
              <div className="flex flex-col gap-5">
                <li>
                  <Button className="w-full rounded-xl" variant="secondary" onClick={() => handleAuth("login")}>
                    Masuk
                  </Button>
                </li>
                <li>
                  <Button className="w-full rounded-xl" variant="default" onClick={() => handleAuth("signup")}>
                    Daftar sekarang
                  </Button>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
      {loading && <LoadingFullScreen />}
    </header>
  )
}
