import { Button } from "@/components/ui/button"
import { ArrowLeft, Repeat } from "lucide-react"
import { Link } from "react-router-dom"

export const ErrorRecipe = () => {
  const handleClick = () => {
    window.location.reload()
  }

  return (
    <section className="my-2 flex w-full flex-col items-center justify-center px-5">
      <div className="flex flex-col items-center text-center lg:w-1/2">
        <figure>
          <img src="/elements/error-recipe.png" alt="Ilustrasi kesalahan saat memuat resep" className="mx-auto" />
          <figcaption className="sr-only">Ilustrasi kesalahan memuat resep</figcaption>
        </figure>
        <header>
          <h1 className="text-[1.5rem] font-bold lg:text-xl">Tidak Dapat Memuat Resep</h1>
          <p className="subheading">
            Kami mengalami masalah saat terhubung ke server kami. Hal ini mungkin disebabkan oleh masalah jaringan atau
            pemeliharaan server.
          </p>
        </header>
        <div className="mt-5 flex gap-4">
          <Button className="subheading rounded-md" onClick={handleClick}>
            <Repeat />
            Coba lagi
          </Button>
          <Link to="/">
            <Button className="subheading rounded-md" variant="secondary">
              <ArrowLeft />
              Kembali ke beranda
            </Button>
          </Link>
        </div>
        <footer className="mt-5">
          <p className="subheading text-gray-500">
            Masih mengalami masalah?
            <span className="cursor-pointer font-semibold text-black"> Hubungi Dukungan</span>
          </p>
        </footer>
      </div>
    </section>
  )
}
