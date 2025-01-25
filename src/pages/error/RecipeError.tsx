import { Button } from "@/components/ui/button"
import { ArrowLeft, Repeat } from "lucide-react"
import { Link } from "react-router-dom"

const ErrorRecipe = () => {
  const handleClick = () => {
    window.location.reload()
  }

  return (
    <section className="flex flex-col items-center justify-center w-full h-screen px-5 my-20">
      <div className="flex flex-col items-center text-center lg:w-1/2">
        <figure>
          <img src="/img/error-recipe.png" alt="Ilustrasi kesalahan saat memuat resep" className="mx-auto" />
          <figcaption className="sr-only">Ilustrasi kesalahan memuat resep</figcaption>
        </figure>

        <header>
          <h1 className="text-[1.5rem] font-bold lg:text-xl">Tidak Dapat Memuat Resep</h1>
          <p className="subheading">
            Kami mengalami masalah saat terhubung ke server kami. Hal ini mungkin disebabkan oleh masalah jaringan atau
            pemeliharaan server.
          </p>
        </header>

        <div className="flex gap-4 mt-5">
          <Button className="rounded-md subheading" onClick={handleClick}>
            <Repeat />
            Coba lagi
          </Button>
          <Link to="/">
            <Button className="rounded-md subheading" variant="secondary">
              <ArrowLeft />
              Kembali ke beranda
            </Button>
          </Link>
        </div>

        <footer className="mt-5">
          <p className="text-gray-500 subheading">
            Masih mengalami masalah?
            <span className="font-semibold text-black cursor-pointer"> Hubungi Dukungan</span>
          </p>
        </footer>
      </div>
    </section>
  )
}

export default ErrorRecipe
