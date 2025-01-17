import { LIST_MENU } from "@/data/datas"
import { Link } from "react-router-dom"

interface MenuItem {
  name: string
  href: string
}

const RenderLinks = ({ title, items }: { title: string; items: MenuItem[] }) => (
  <ol className="flex flex-1 flex-col gap-4">
    <p className="text-lg font-bold">{title}</p>
    {items.map((item) => (
      <li key={item.name}>
        <a href={item.href} className="subheading-mobile hover:underline">
          {item.name}
        </a>
      </li>
    ))}
  </ol>
)

export default function Footer() {
  return (
    <footer className="flex w-full flex-col justify-center bg-black py-5 text-white">
      <div className="mx-auto flex justify-center gap-10 px-5 py-10 lg:w-4/5">
        <div className="flex w-full flex-1 flex-col gap-10 py-5 md:flex-row">
          <div className="flex-col lg:w-2/5">
            <Link to="/" className="flex items-center gap-2 font-italian text-xl font-bold lg:text-2xl">
              <img src="/logo/logo-t.png" alt="logo" className="w-10" />
              Dapur Tradisional
            </Link>
            <p className="subheading-mobile mt-5">
              Resep tradisional adalah kumpulan cara memasak makanan khas suatu daerah yang diwariskan secara
              turun-temurun.
            </p>
          </div>
          <RenderLinks title="Tautan Berguna" items={LIST_MENU.usefulLinks} />
          <RenderLinks title="Sumber daya" items={LIST_MENU.resources} />
          <RenderLinks title="Bantuan" items={LIST_MENU.support} />
        </div>
      </div>
      <div className="w-full pb-5 pt-8 text-center">
        <p className="subheading-mobile">Copyright © 2024 Dapur Tradisional</p>
      </div>
    </footer>
  )
}
