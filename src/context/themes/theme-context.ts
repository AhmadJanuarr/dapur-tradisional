import { createContext } from "react"

type ThemeContextType = {
  theme: "light" | "dark"
  toggleDarkMode: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
