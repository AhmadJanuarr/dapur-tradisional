import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { AlignJustify } from "lucide-react"

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
    <header className="flex justify-between border-b px-10 py-5">
      <div className="flex gap-10">
        <Link to="/" className="text-2xl font-bold md:text-3xl">
          ResepKita
        </Link>
        <nav className="hidden gap-10 md:flex">
          <ul className="flex items-center gap-5 ">
            {[
              { name: "Beranda", href: "/" },
              { name: "Resep", href: "/" },
              { name: "Tentang", href: "/" },
              { name: "Kontak", href: "/" },
            ].map((item) => (
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
