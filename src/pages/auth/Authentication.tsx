import { Link, useLocation } from "react-router-dom"
import LoginForm from "@/components/Auth/Login/LoginForm"
import SignupForm from "@/components/Auth/Signup/SignupForm"
import { HeadingAuth } from "@/components/Auth/HeadingAuth"
import { useState } from "react"
import { LoadingFullScreen } from "@/components/Loading"
import { ArrowLeft } from "lucide-react"

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
    <section className="flex justify-center w-full gap-5 px-5 md:px-0 lg:min-h-screen">
      <div className="hidden w-1/2 md:block">
        <div className="w-full h-screen bg-center bg-cover" style={{ backgroundImage: "url('/img/bg-auth.png')" }}>
          <h1 className="flex gap-2 p-10 text-3xl font-bold text-white">
            <img src="/logo/logo-t.png" alt="logo" className="w-10" />
            <Link to={"/"} className="flex items-center gap-2 text-black font-italian">
              Dapur Tradisional
            </Link>
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2">
        {isLoading ? (
          <LoadingFullScreen />
        ) : (
          <div className="flex flex-col w-full lg:items-center">
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
