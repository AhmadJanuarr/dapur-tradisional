/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ReactNode, createContext } from "react"

// Membuat interface untuk props dan context
interface AuthProviderProps {
  children: ReactNode
}
interface AuthContextType {
  user: any
  login: (userData: any) => void
  logout: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType>(null!)
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null)

  const login = (userData: any) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}
