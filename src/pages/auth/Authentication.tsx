import { Link, useLocation } from "react-router-dom"
import LoginForm from "@/components/Auth/Login/LoginForm"
import SignupForm from "@/components/Auth/Signup/SignupForm"
import { HeadingAuth } from "@/components/Auth/HeadingAuth"
import { useState } from "react"
import { Loading } from "@/components/Loading"

export default function Authentication() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = useLocation().pathname

  const isLoginPage = pathname.includes("/auth/login")
  const isSignupPage = pathname.includes("/auth/register")

  return (
    <section className="flex min-h-screen w-full justify-center gap-5 px-5 md:px-0">
      <div className="hidden w-1/2 md:block">
        <div className="h-screen w-full bg-gray-700">
          <h1 className="p-10 text-3xl font-bold text-white">
            <Link to={"/"}>ResepKita</Link>
          </h1>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center md:w-1/2">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex w-full flex-col items-center">
            <HeadingAuth
              heading={isLoginPage ? "Masuk" : "Daftar"}
              description={
                isLoginPage
                  ? "Masuk untuk menemukan resep favoritmu dan buat daftar resep dengan mudah"
                  : "Daftarkan akunmu untuk menemukan resep favoritmu"
              }
            />
            <div className="w-full md:w-1/2">
              {isLoginPage && <LoginForm />}
              {isSignupPage && <SignupForm isLoading={isLoading} setIsLoading={setIsLoading} />}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
