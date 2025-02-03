import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "@/context/AuthContext"

interface ProtectedRouteProps extends React.PropsWithChildren {
  allowedRoles: string[]
}
export const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      return navigate("/auth/login")
    }

    if (!allowedRoles.includes(user.role)) {
      return navigate("/unauthorized")
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, allowedRoles, children])

  return <>{children}</>
}
