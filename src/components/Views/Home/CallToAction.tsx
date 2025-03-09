import { Button } from "@/components/ui/button"

const CallToAction = () => {
  return (
    <section className="mx-auto mt-60 flex flex-col items-center justify-center rounded-3xl bg-[#ffeddf] px-5 lg:w-11/12 lg:flex-row lg:px-0 2xl:w-4/5">
      <div className="bor der flex w-3/5 flex-col gap-10 pl-10">
        <h1 className="heading w-full font-semibold leading-tight">
          Apakah kamu siap untuk memulai perjalanan kuliner baru?
        </h1>
        <div className="flex items-center gap-5">
          <Button className="rounded-xl px-4 py-6 text-lg">Dapur tradisional</Button>
          <Button className="rounded-xl text-lg" variant="link">
            Dokumentasi
          </Button>
        </div>
      </div>
      <div className="w-2/5">
        <img src="/elements/element-spice-2.png" alt="element-spice" />
      </div>
    </section>
  )
}

export default CallToAction
