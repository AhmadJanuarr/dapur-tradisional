import { Link, useLocation } from "react-router-dom"
import { HeadingAuth } from "@/components/Auth/HeadingAuth"
import { ArrowLeft, Moon, Sun } from "lucide-react"
import { LoadingFullScreen } from "@/components/Loading/LoadingFullScreen"
import { LoginForm } from "@/components/Auth/Login/LoginForm"
import { SignupForm } from "@/components/Auth/Signup/SignupForm"
import { useTheme } from "@/context/themes/useTheme"
import { useAuth } from "@/context/auth/useAuth"

export default function AuthenticationPage() {
  const { theme, toggleDarkMode } = useTheme()
  const { state } = useAuth()
  const pathname = useLocation().pathname
  const isLoginPage = pathname.includes("/auth/login")
  const isSignupPage = pathname.includes("/auth/register")
  const headingText = isLoginPage ? "Masuk" : "Daftar"
  const description = isLoginPage
    ? "Masuk untuk menemukan resep favoritmu dan buat daftar resep dengan mudah"
    : "Daftarkan akunmu untuk menemukan resep favoritmu"

  const formComponent = () => {
    if (isLoginPage) {
      return <LoginForm />
    } else if (isSignupPage) {
      return <SignupForm />
    }
    return null
  }

  return (
    <section className="flex w-full justify-center gap-5 px-5 md:px-0 lg:min-h-screen">
      <div className="hidden w-1/2 md:block">
        <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/img/bg-auth.png')" }}>
          <Link to={"/"} className="flex gap-2 p-10 text-3xl">
            <img src="/logo/logo-t.png" alt="logo" className="w-10" />
            <h1 className="flex items-center gap-2 font-raleway text-black">Dapur Tradisional</h1>
          </Link>
        </div>
      </div>
      <div className="relative flex w-full flex-col justify-center md:w-1/2">
        <div className="absolute right-10 top-10 hidden rounded-full bg-darkBackground p-2 dark:bg-white md:block">
          {theme === "dark" ? (
            <Sun onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer text-darkBackground " />
          ) : (
            <Moon onClick={toggleDarkMode} className="h-5 w-5 cursor-pointer text-white dark:bg-white" />
          )}
        </div>
        {state.isLoading ? (
          <LoadingFullScreen />
        ) : (
          <div className="flex w-full flex-col lg:items-center">
            <Link to={"/"} className="flex gap-2 pt-5 text-left lg:hidden">
              <ArrowLeft />
              Kembali
            </Link>
            <div className="w-full py-5 pb-10 lg:w-1/2 ">
              <HeadingAuth heading={headingText} description={description} />
              <div className="w-full md:w-full">{formComponent()}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
