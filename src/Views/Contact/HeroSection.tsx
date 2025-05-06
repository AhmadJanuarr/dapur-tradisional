import { FormFieldContact } from "@/components/FormField/FormFieldContact"
import { FaDiscord, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6"

const ContactInfo = () => {
  const handleClickSosialMedia = (url: string) => {
    if (url === "discord") window.open("https://discord.gg/J9UBsvBtH4", "_blank")
    if (url === "instagram") window.open("https://www.instagram.com/madds.dev/", "_blank")
    if (url === "telegram") window.open("https://t.me/ahmad_januar", "_blank")
  }

  return (
    <div className="flex flex-col gap-5">
      <h5 className="text-[15px] lg:text-[18px]">Bicara dengan kami</h5>
      <p className="subheading text-gray-800 dark:text-slate-400">
        Butuh respon cepat? Langsung chat dengan kami melalui sosial media dibawah ini
      </p>
      <div className="flex cursor-pointer items-center gap-3" onClick={() => handleClickSosialMedia("discord")}>
        <FaDiscord className="size-5 text-[#F97316]" />
        <p className="underline">Discord</p>
      </div>
      <div className="flex cursor-pointer items-center gap-3" onClick={() => handleClickSosialMedia("instagram")}>
        <FaInstagram className="size-5 text-[#F97316]" />
        <p className="underline">Instagram</p>
      </div>
      <div className="flex cursor-pointer items-center gap-3" onClick={() => handleClickSosialMedia("telegram")}>
        <FaTelegram className="size-5 text-[#F97316]" />
        <p className="underline">Telegram</p>
      </div>
      <h5 className="text-[15px] lg:text-[18px]">Hubungi kami</h5>
      <p className="text-gray-800 dark:text-slate-400">Chat secara pribadi melalui whatsapp</p>
      <div className="flex items-center gap-3">
        <FaWhatsapp className="size-5 text-[#F97316]" />
        <p className="underline">+62 812 3456 789</p>
      </div>
    </div>
  )
}

const LeftFormCard = () => {
  return (
    <div className="border-non w-full shadow-none lg:mt-0">
      <FormFieldContact />
    </div>
  )
}

const RightContactCard = () => {
  return (
    <div className="flex flex-col pr-10 lg:w-[80%]">
      <ContactInfo />
    </div>
  )
}

export const HeroSectionContact = ({ heading, subheading }: { heading: string; subheading: string }) => {
  return (
    <section className="mt-24 flex w-full flex-col md:py-0 lg:mt-40">
      <div>
        <div className="mx-auto flex flex-col items-center justify-center gap-8 text-center lg:w-4/5 lg:text-center">
          <h1 className="heading font-raleway lg:w-4/5">{heading}</h1>
          <p className="subheading text-gray-900 dark:text-white lg:w-4/5">{subheading}</p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-16 pt-16 lg:grid-cols-2">
        <LeftFormCard />
        <RightContactCard />
      </div>
    </section>
  )
}
