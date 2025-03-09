import { useEffect, useState } from "react"
import { toast } from "sonner"
import { useAuth } from "@/context/AuthContext"
import { useLocation, useNavigate } from "react-router-dom"

export function useHeader() {
  const [open, setOpen] = useState<boolean>(false)
  const [isScrollY, setIsScrollY] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const { logout, user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => setIsScrollY(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    window.scrollTo(0, 0)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location])

  const handleAuth = (action: string) => {
    setLoading(true)
    if (action === "keluar") {
      logout()
      setTimeout(() => {
        setLoading(false)
        navigate("/")
        toast.success("Berhasil keluar dari akun")
      }, 2000)
    } else {
      navigate(`/auth/${action}`)
    }
  }
  return { open, setOpen, isScrollY, handleAuth, user, isHome, loading }
}
