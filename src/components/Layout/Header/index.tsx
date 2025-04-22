import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Bookmark, LogOut, Menu, Moon, Settings, Sun, User, X } from "lucide-react"
import { LIST_MENU } from "@/data/datas"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { LoadingFullScreen } from "@/components/Loading/LoadingFullScreen"
import { useTheme } from "@/hooks/useTheme"
import { useHeader } from "@/hooks/useHeader"
import { useState } from "react"
import { User as UserProps } from "@/types/auth.types"

type NavLinkProps = {
  children: React.ReactNode
  href: string
  onClick?: () => void
}
type UserAlreadyLoggedProps = {
  user?: UserProps
  theme: string
  isPopoverOpen?: boolean
  setIsPopoverOpen?: React.Dispatch<React.SetStateAction<boolean>>
  handlePopoverClose?: () => void
  handleFavorite?: () => void
  toggleDarkMode: () => void
  handleAuth: (action: string) => void
  handleUserProfile?: (target: string) => void | undefined
}

interface UserNotLooggedProps extends UserAlreadyLoggedProps {
  isHome?: boolean
  isScrollY?: boolean
}

const NavLink = ({ children, href, onClick }: NavLinkProps) => {
  return (
    <li>
      <Link to={href} className="text-[#F97316] hover:underline" onClick={onClick}>
        {children}
      </Link>
      <hr className="mt-2 block border-gray-200 md:hidden" />
    </li>
  )
}

const LogoHeader = () => {
  return (
    <Link to="/" className="flex w-1/3 items-center gap-2 text-[1rem] dark:text-white">
      <img src="/logo/logo-t.png" alt="logo website" className="w-10" />
      Dapur<span className="text-[#F97316]">tadisional</span>
    </Link>
  )
}

const UserAlreadyLogged = ({
  user,
  theme,
  isPopoverOpen,
  setIsPopoverOpen,
  handleFavorite,
  handleAuth,
  toggleDarkMode,
  handleUserProfile,
  handlePopoverClose,
}: UserAlreadyLoggedProps) => {
  return (
    <div className="hidden w-1/3 items-center justify-end gap-5 md:flex">
      {theme === "dark" ? (
        <Sun onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer text-white" />
      ) : (
        <Moon onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer" />
      )}
      <Separator orientation="vertical" className="h-5 bg-gray-800" />
      <Bookmark className="h-5 w-5 cursor-pointer dark:text-white" onClick={() => handleFavorite?.()} />
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src={user?.avatar || "/elements/element-user.png"} className="object-cover" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent side="top" align="end" className="z-50">
          <div className="subheading grid gap-4 font-mona tracking-wide">
            <ul className="subheading space-y-4">
              <li
                className="flex cursor-pointer items-center gap-5 hover:underline"
                onClick={() => {
                  handleUserProfile?.("")
                  handlePopoverClose?.()
                }}
              >
                <img src={user?.avatar || "/elements/element-user.png"} alt="user" className="h-12 w-12 rounded-full" />
                <div className="subheading flex items-center gap-2 ">{user?.name}</div>
              </li>
              <li
                className="flex cursor-pointer items-center gap-5 hover:underline"
                onClick={() => {
                  handleUserProfile?.("")
                  handlePopoverClose?.()
                }}
              >
                <User className="h-5 w-5" />
                Profil Saya
              </li>
              <li
                className="flex cursor-pointer items-center gap-5 hover:underline"
                onClick={() => {
                  handleUserProfile?.("pengaturan-akun")
                  handlePopoverClose?.()
                }}
              >
                <Settings className="h-5 w-5" />
                Pengaturan
              </li>
              <Separator />
              <li
                onClick={() => {
                  handleAuth("keluar")
                  handlePopoverClose?.()
                }}
                className="flex cursor-pointer items-center gap-5 hover:underline"
              >
                <LogOut className="h-5 w-5" />
                Keluar
              </li>
            </ul>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

const UserNotLogged = ({ handleAuth, theme, toggleDarkMode }: UserNotLooggedProps) => (
  <div className="hidden w-1/3 items-center justify-end gap-5 md:flex">
    {theme === "dark" ? (
      <Sun onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer text-white" />
    ) : (
      <Moon onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer" />
    )}
    <Separator orientation="vertical" className="h-5 bg-gray-700" />
    <Button
      variant="ghost"
      className="subheading border border-black dark:border-white dark:text-white"
      onClick={() => handleAuth("login")}
    >
      Masuk
    </Button>
    <Button variant="default" onClick={() => handleAuth("register")} className="subheading">
      Daftar sekarang
    </Button>
  </div>
)

export const Header = () => {
  const { handleAuth, isHome, user, isScrollY, loading, open, setOpen } = useHeader()
  const { toggleDarkMode, theme } = useTheme()
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const navigate = useNavigate()

  const handlePopoverClose = () => {
    setIsPopoverOpen(false)
  }

  const handleFavorite = () => {
    navigate(`/profile/${user?.name?.replace(" ", "-")}/favorit`)
  }
  const handleUserProfile = (target: string) => {
    const userName = user?.name?.replace(" ", "-")
    if (userName) {
      navigate(`profile/${userName}/${target}`)
    }
  }
  return (
    <header className={`fixed left-0 top-0 z-30 w-full`}>
      <div
        className={`flex w-full justify-between px-5 py-5 text-black transition-all duration-200 ${isScrollY && isHome ? "bg-white shadow-xl dark:bg-neutral-800 dark:text-white" : isHome ? "bg-transparent" : "bg-white dark:bg-neutral-800 dark:text-white"}`}
      >
        <LogoHeader />
        <nav className="hidden w-1/3 justify-center md:flex">
          <ul className="flex items-center justify-center gap-8">
            {LIST_MENU.usefulLinks.map((item) => (
              <NavLink href={item.href} key={item.name}>
                {item.name}
              </NavLink>
            ))}
          </ul>
        </nav>
        {user!.role === "USER" ? (
          <UserAlreadyLogged
            user={user || undefined}
            theme={theme}
            isPopoverOpen={isPopoverOpen}
            setIsPopoverOpen={setIsPopoverOpen}
            handleAuth={handleAuth}
            toggleDarkMode={toggleDarkMode}
            handleUserProfile={handleUserProfile}
            handleFavorite={handleFavorite}
            handlePopoverClose={handlePopoverClose}
          />
        ) : (
          <UserNotLogged handleAuth={handleAuth} theme={theme} toggleDarkMode={toggleDarkMode} />
        )}

        {/* Mobile Menu Toggle */}
        <div className="flex items-center justify-between gap-5 md:hidden">
          <button>
            {theme === "dark" ? (
              <Sun onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer text-white" />
            ) : (
              <Moon onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer" />
            )}
          </button>
          <button className="text-[#F97316]" onClick={() => setOpen(!open)}>
            {open ? <X className="size-8" /> : <Menu className="size-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Devices */}
      <div
        className={`absolute left-0 -z-10  mx-auto w-full rounded-b-xl  
          shadow-lg transition-all duration-500 ${!open && "-translate-y-[30rem] opacity-0"}`}
      >
        <div className="rounded-b-xl border bg-white px-2 py-5">
          <ul className="flex w-full flex-col gap-5">
            {user?.role === "USER" && (
              <li
                className="flex cursor-pointer items-center gap-5 hover:underline"
                onClick={() => {
                  handleUserProfile?.("")
                  handlePopoverClose()
                }}
              >
                <img src="/elements/element-user.png" alt="user" className="h-12 w-12 rounded-full" />
                <div className="subheading flex items-center gap-2 ">{user?.name}</div>
              </li>
            )}
            {LIST_MENU.usefulLinks.map((item) => (
              <NavLink href={item.href} key={item.name} onClick={() => setOpen(false)}>
                {item.name}
              </NavLink>
            ))}
            {user?.role === "USER" ? (
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
                  <Button className="w-full rounded-xl" variant="default" onClick={() => handleAuth("register")}>
                    Daftar sekarang
                  </Button>
                </li>
              </div>
            )}
          </ul>
          {open && (
            <div
              className="absolute -z-20 block h-screen w-screen bg-gradient-to-t from-white to-black opacity-85 backdrop-blur-xl md:hidden"
              onClick={() => setOpen(false)}
            ></div>
          )}
        </div>
      </div>
      {loading && <LoadingFullScreen />}
    </header>
  )
}
