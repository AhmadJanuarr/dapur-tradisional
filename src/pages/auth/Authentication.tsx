import { Link, useLocation } from "react-router-dom"
import { HeadingAuth } from "@/components/Auth/HeadingAuth"
import { useState } from "react"
import { LoadingFullScreen } from "@/components/Loading"
import { ArrowLeft } from "lucide-react"
import LoginForm from "@/components/Auth/Login/LoginForm"
import SignupForm from "@/components/Auth/Signup/SignupForm"

export default function Authentication() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = useLocation().pathname
  const isLoginPage = pathname.includes("/auth/login")
  const isSignupPage = pathname.includes("/auth/register")
  const headingText = isLoginPage ? "Masuk" : "Daftar"
  const description = isLoginPage
    ? "Masuk untuk menemukan resep favoritmu dan buat daftar resep dengan mudah"
    : "Daftarkan akunmu untuk menemukan resep favoritmu"

  const formComponent = () => {
    if (isLoginPage) {
      return <LoginForm setIsLoading={setIsLoading} />
    } else if (isSignupPage) {
      return <SignupForm isLoading={isLoading} setIsLoading={setIsLoading} />
    }
    return null
  }

  return (
    <section className="flex w-full justify-center gap-5 px-5 md:px-0 lg:min-h-screen">
      <div className="hidden w-1/2 md:block">
        <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/img/bg-auth.png')" }}>
          <Link to={"/"} className="flex gap-2 p-10 text-3xl">
            <img src="/logo/logo-t.png" alt="logo" className="w-10" />
            <h1 className="flex items-center gap-2 font-inter text-black">Dapur Tradisional</h1>
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center md:w-1/2">
        {isLoading ? (
          <LoadingFullScreen />
        ) : (
          <div className="flex w-full flex-col lg:items-center">
            <Link to={"/"} className="flex gap-2 py-3 text-left lg:hidden">
              <ArrowLeft />
              Kembali
            </Link>
            <HeadingAuth heading={headingText} description={description} />
            <div className="w-full md:w-1/2">{formComponent()}</div>
          </div>
        )}
      </div>
    </section>
  )
}
