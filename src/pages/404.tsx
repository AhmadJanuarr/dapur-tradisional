import { Button } from "../components/ui/button"

export default function NotFoundPage() {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div className="items-center justify-center gap-10 px-8 md:flex md:w-1/2">
        <div className="md:w-[500px]">
          <img src="/svg/page-not-found.svg" alt="not found page" />
        </div>
        <div className="text-left">
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            Oops! Halaman tidak ditemukan
          </h1>
          <p className="mt-2 leading-7 md:mt-6">
            Maaf, halaman yang Anda cari tidak ada atau mungkin telah dipindahkan. Silakan periksa URL atau kembali ke
            halaman utama
          </p>
          <Button asChild className="mt-6 md:mt-8">
            <a href="/">Kembali ke halaman utama</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
