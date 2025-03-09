import { ThemeContext } from "@/context/Themes"
import { useContext } from "react"

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme harus digunakan dalam DarkModeTheme")
  }
  return context
}
