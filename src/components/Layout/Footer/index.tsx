import { LIST_MENU } from "@/data/datas"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6"
import { Link } from "react-router-dom"
interface MenuItem {
  name: string
  href: string
}

const RenderLinks = ({ title, items }: { title: string; items: MenuItem[] }) => (
  <ol className="flex flex-1 flex-col gap-4">
    <p className="text-md font-bold">{title}</p>
    {items.map((item) => (
      <li key={item.name}>
        <a href={item.href} className="subheading text-[#656565] hover:underline">
          {item.name}
        </a>
      </li>
    ))}
  </ol>
)

export const Footer = () => {
  const handleSocialMediaIcon = (name: string) => {
    if (name === "facebook")
      return window.open("https://www.facebook.com/profile.php?id=61564521532109&locale=id_ID", "_blank")
    if (name === "instagram") return window.open("https://www.instagram.com/madds.dev/", "_blank")
    if (name === "linkedin") return window.open("https://www.linkedin.com/in/ahmad-januar-a96515221/", "_blank")
  }

  return (
    <footer className="relative flex w-full flex-col justify-center overflow-hidden px-5 py-10 pt-20 text-black dark:bg-[#262626] dark:text-white">
      <img
        src="/elements/element-footer.png"
        alt="element-footer"
        className="absolute bottom-0 -z-20 w-full dark:hidden lg:-bottom-40"
      />
      <img src="/elements/element-daun2.png" alt="element-daun2" className="absolute bottom-0 -z-10 w-32 opacity-50" />
      <div className="mx-auto flex flex-col justify-center gap-10 lg:w-4/5 ">
        <div className="flex justify-center">
          <div className="flex w-full flex-1 flex-col gap-10 py-5 md:flex-row">
            <div className="flex-col lg:w-2/5">
              <Link to="/" className="font-italian flex items-center gap-2 text-xl font-bold lg:text-2xl">
                <img src="/logo/logo-t.png" alt="logo" className="w-10" />
                Dapur Tradisional
              </Link>
              <p className="subheading mt-5 text-[#656565]">
                Resep tradisional adalah kumpulan cara memasak makanan khas suatu daerah yang diwariskan secara
                turun-temurun.
              </p>
            </div>
            <RenderLinks title="Tautan Berguna" items={LIST_MENU.usefulLinks} />
            <RenderLinks title="Sumber daya" items={LIST_MENU.resources} />
            <RenderLinks title="Bantuan" items={LIST_MENU.support} />
          </div>
        </div>
        <div className="flex w-full flex-col-reverse justify-between gap-5 pb-5 text-center lg:flex-row">
          <p className="subheading text-[#656565]">Copyright © 2024 Dapur Tradisional</p>
          <div className="flex justify-center gap-4">
            <FaFacebook
              className="size-5 text-[#656565] hover:text-[#F97316]"
              onClick={() => handleSocialMediaIcon("facebook")}
            />
            <FaInstagram
              className="size-5 text-[#656565] hover:text-[#F97316]"
              onClick={() => handleSocialMediaIcon("instagram")}
            />
            <FaLinkedin
              className="size-5 text-[#656565] hover:text-[#F97316]"
              onClick={() => handleSocialMediaIcon("linkedin")}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
