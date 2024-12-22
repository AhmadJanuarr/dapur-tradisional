import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { AlignJustify, BookOpenText } from "lucide-react"
import { LIST_MENU } from "@/data/datas"

function NavLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <li>
      <Link to={href}>{children}</Link>
    </li>
  )
}
export default function Header() {
  const [open, setOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleAuth = (value: string) => {
    if (value === "masuk") {
      navigate("/auth/login")
    } else if (value === "daftar") {
      navigate("/auth/register")
    }
  }

  return (
    <header className="fixed top-0 left-0 z-50 flex justify-between w-full px-5 py-5 bg-white border-b shadow-sm md:px-10">
      <div className="flex gap-10 ">
        <Link to="/" className="flex items-center flex-1 gap-2 text-xl font-bold md:text-2xl">
          Dapur Tradisional
          <BookOpenText className="text-[#F9802D]" />
        </Link>
        <nav className="hidden gap-10 md:flex">
          <ul className="flex items-center gap-5 ">
            {LIST_MENU.usefulLinks.map((item) => (
              <NavLink href={item.href} key={item.name}>
                {item.name}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
      <div className="hidden gap-5 md:flex">
        <Button variant={"secondary"} onClick={() => handleAuth("masuk")}>
          Masuk
        </Button>
        <Button onClick={() => handleAuth("daftar")}>Daftar sekarang</Button>
      </div>
      <div className="flex items-center justify-center md:hidden">
        <AlignJustify onClick={() => setOpen(!open)} />
      </div>
    </header>
  )
}
