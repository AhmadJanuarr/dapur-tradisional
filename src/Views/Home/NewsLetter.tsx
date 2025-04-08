import { Button } from "@/components/ui/button"
import { MailPlus } from "lucide-react"

export default function NewsLetter() {
  return (
    <section className="relative flex w-full flex-col items-center justify-start overflow-hidden rounded-xl bg-[#ffeddf] lg:mb-52 lg:h-[480px] lg:flex-row lg:rounded-[50px] lg:py-0">
      <img
        className="absolute bottom-0 left-0 w-1/3 opacity-30 lg:top-0 lg:w-[30%] lg:opacity-100"
        src="/elements/element-sawi.png"
        alt="Element Sawi"
      />
      <div className="z-20 flex w-full flex-col items-center justify-center gap-8 px-5 py-10 text-center dark:text-black">
        <h1 className="heading w-full font-prata ">Siap jadi master chef di rumah?</h1>
        <p className="subheading lg:w-[60%]">
          Jangan lewatkan rahasia kuliner nusantara! Berlangganan newsletter kami dan dapatkan resep tradisional
          autentik, tips memasak, serta kisah menarik di balik setiap hidangan langsung ke inbox Anda.
        </p>

        <form action="" className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row">
          <input
            type="email"
            className="w-full rounded-xl px-6 py-2 text-center placeholder:text-center lg:w-96"
            placeholder="Masukkan email"
          />
          <Button className="subheading flex gap-2 py-5">
            <MailPlus /> Get this newsletter
          </Button>
        </form>

        <p className="subheading text-[14px] text-[#656565]">
          Tinjau Kebijakan Privasi kami untuk informasi lebih lanjut tentang praktik privasi kami.
        </p>
      </div>
    </section>
  )
}
