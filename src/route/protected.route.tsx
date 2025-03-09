/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useAuth } from "@/context/AuthContext"

interface ProtectedRouteProps extends React.PropsWithChildren {
  allowedRoles: string[]
}
export const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      return navigate("/auth/login")
    }

    if (!allowedRoles.includes(user.role)) {
      return navigate("/unauthorized")
    }
  }, [user, allowedRoles, children])

  return <>{children}</>
}
