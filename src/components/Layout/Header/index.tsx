import { Link, useLocation, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Bookmark, LogOut, Menu, Moon, Settings, Sun, User, X } from "lucide-react"
import { LIST_MENU } from "@/data/datas"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { LoadingFullScreen } from "@/components/Loading/LoadingFullScreen"
import { useHeader } from "@/hooks/useHeader"
import { useEffect, useRef, useState } from "react"
import { User as UserProps } from "@/types/auth.types"
import { useTheme } from "@/context/themes/useTheme"
import { useFeature } from "@/context/features/useFeature"
import { toast } from "sonner"

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
            <AvatarImage
              src={user?.avatar === " " ? "/elements/element-user.png" : user?.avatar}
              className="object-cover"
            />
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
                <Avatar>
                  <AvatarImage
                    src={user?.avatar === " " ? "/elements/element-user.png" : user?.avatar}
                    className="object-cover"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="subheading flex flex-col">
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-gray-500">{user?.email}</p>
                </div>
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
  const { keywordRef } = useFeature()
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false)
  const [isBoxOpen, setIsBoxOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const location = useLocation()
  const boxRef = useRef<HTMLDivElement>(null)

  const recipeRemoveNavlist = location.pathname.includes("resep/cari-resep")
  const handlePopoverClose = () => setIsPopoverOpen(false)
  const handleFavorite = () => navigate(`/profile/${user?.name?.replace(" ", "-")}/favorit`)

  const handleRecipeSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const KeywordValue = keywordRef.current?.value
    const editKeywordValue = KeywordValue?.trim().replace(" ", "-")
    console.log({ editKeywordValue })
    if (!editKeywordValue) {
      toast.warning("Masukkan kata kunci pencarian resep")
    }
    try {
      navigate(`/resep/cari-resep?pencarian=${editKeywordValue}`)
    } catch (error) {
      console.log(error)
      toast.error("Terjadi kesalahan pencarian resep")
    } finally {
      setIsBoxOpen(false)
    }
  }
  const handleUserProfile = (target: string) => {
    const userName = user?.name?.replace(" ", "-")
    if (userName) {
      navigate(`profile/${userName}/${target}`)
    }
  }

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setIsBoxOpen(false)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  })
  return (
    <header className={`fixed left-0 top-0 z-30 w-full`}>
      <div
        className={`flex w-full justify-between px-5 py-5 text-black transition-all duration-200 ${isScrollY && isHome ? "bg-white shadow-xl dark:bg-neutral-800 dark:text-white" : isHome ? "bg-transparent" : "bg-white dark:bg-neutral-800 dark:text-white"}`}
      >
        <LogoHeader />
        <nav className="hidden w-1/3 items-center justify-center md:flex">
          {recipeRemoveNavlist ? (
            <div className="relative hidden w-full flex-col lg:flex" ref={boxRef}>
              <form className="subheading flex w-full gap-3" onSubmit={handleRecipeSearch}>
                <input
                  type="search"
                  placeholder="Cari Resep"
                  aria-label="Search recipes"
                  className="w-full rounded-md border px-4 placeholder:text-[#656565]"
                  ref={keywordRef}
                  onClick={() => setIsBoxOpen(true)}
                />
                <Button className="rounded-md" type="submit">
                  Pencarian
                </Button>
                {isBoxOpen && (
                  <div className="absolute left-0 right-0 top-0 z-20 mt-12 rounded-md border bg-white p-4 shadow-xl">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <h1 className="font-semibold">Pencarian sebelumnya</h1>
                        <span className="cursor-pointer text-slate-500">clear</span>
                      </div>
                      <div className="py-2">
                        <Button variant="outline" className="borer-2 rounded-md bg-transparent">
                          Ayam penyet
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <h1 className="py-2 font-semibold">Filter</h1>
                        <span className="cursor-pointer text-slate-500">clear</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {["Makanan ringan", "Makanan berat", "Kue tradisional"].map((item) => (
                          <label key={item} className="flex items-center gap-2">
                            <input type="checkbox" id={item.toLowerCase().replace(/\s+/g, "-")} />
                            {item}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          ) : (
            <ul className="flex gap-8">
              {LIST_MENU.usefulLinks.map((item) => (
                <NavLink href={item.href} key={item.name}>
                  {item.name}
                </NavLink>
              ))}
            </ul>
          )}
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
        <div className="rounded-b-xl border bg-white px-2 py-5 dark:bg-[#1B1B1B]">
          <ul className="flex w-full flex-col gap-5">
            {user?.role === "USER" && (
              <li
                className="flex cursor-pointer items-center gap-5 hover:underline"
                onClick={() => {
                  handleUserProfile?.("")
                  handlePopoverClose()
                }}
              >
                <Avatar>
                  <AvatarImage
                    src={user?.avatar === " " ? "/elements/element-user.png" : user?.avatar}
                    className="object-cover"
                    alt="avatar"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="subheading flex flex-col">
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-gray-500">{user?.email}</p>
                </div>
              </li>
            )}
            {LIST_MENU.usefulLinks.map((item) => (
              <NavLink href={item.href} key={item.name} onClick={() => setOpen(false)}>
                {item.name}
              </NavLink>
            ))}
            {user?.role === "USER" ? (
              <li onClick={() => handleAuth("keluar")} className="text-bold cursor-pointer hover:underline">
                Keluar
              </li>
            ) : (
              <div className="flex flex-col gap-5">
                <li>
                  <Button
                    className="w-full rounded-xl dark:bg-slate-100 dark:text-[#F97316]"
                    variant="secondary"
                    onClick={() => handleAuth("login")}
                  >
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
            />
          )}
        </div>
      </div>
      {loading && <LoadingFullScreen />}
    </header>
  )
}
