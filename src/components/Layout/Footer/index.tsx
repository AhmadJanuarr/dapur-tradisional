import { LIST_MENU } from "@/data/datas"

const RenderLinks = (title: string, items: { name: string; href: string }[]) => {
  return (
    <ol className="flex flex-col flex-1 gap-4">
      <p className="font-bold">{title}</p>
      {items.map((item) => (
        <li key={item.name}>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </ol>
  )
}

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center w-full">
      <div className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
          <path
            fill="#F5F5F4"
            fillOpacity="1"
            d="M0,224L60,224C120,224,240,224,360,224C480,224,600,224,720,240C840,256,960,288,1080,282.7C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
      <div className="flex w-full justify-center gap-10 bg-[#F5F5F4] px-5">
        <div className="flex flex-col flex-1 max-w-6xl gap-10 py-5 md:flex-row">
          <p className="flex-1 font-bold">Dapur Tradisional</p>
          {RenderLinks("Useful Links", LIST_MENU.usefulLinks)}
          {RenderLinks("Resources", LIST_MENU.resources)}
          {RenderLinks("Support", LIST_MENU.support)}
        </div>
      </div>
      <div className="w-full bg-[#F5F5F4] pb-5 pt-8 text-center">
        <p className="text-sm">Copyright © 2024 Dapur Tradisional</p>
      </div>
    </footer>
  )
}
