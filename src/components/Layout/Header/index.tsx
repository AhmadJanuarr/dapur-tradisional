import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../ui/button"

function NavLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <li>
      <Link to={href}>{children}</Link>
    </li>
  )
}
export default function Header() {
  const navigate = useNavigate()
  const handleAuth = (value: string) => {
    if (value === "masuk") {
      navigate("/login")
    } else if (value === "daftar") {
      navigate("/signup")
    }
  }

  return (
    <header className="flex justify-between border-b px-10 py-5">
      <div className="flex gap-10">
        <h1 className="text-2xl font-bold md:text-3xl">ResepKita</h1>
        <nav className="flex gap-10">
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
      <div className="flex gap-5">
        <Button variant={"secondary"} onClick={() => handleAuth("masuk")}>
          Masuk
        </Button>
        <Button onClick={() => handleAuth("daftar")}>Daftar sekarang</Button>
      </div>
    </header>
  )
}
