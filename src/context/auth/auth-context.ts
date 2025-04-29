import { createContext } from "react"
import { AuthContextProps } from "@/types/auth.types"

export const AuthContext = createContext<AuthContextProps>(null!)
