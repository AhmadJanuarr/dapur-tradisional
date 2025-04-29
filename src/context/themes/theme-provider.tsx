import { ReactNode, useEffect, useState } from "react"
import { ThemeContext } from "./theme-context"

type Theme = "light" | "dark"

export const DarkModeTheme = ({ children }: { children: ReactNode }) => {
  const StoredThemeLocalStorage = localStorage.getItem("theme") as Theme | null
  const initialTheme: Theme = StoredThemeLocalStorage === "dark" ? "dark" : "light"
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const toggleDarkMode = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark"
      localStorage.setItem("theme", newTheme)
      return newTheme
    })
  }
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])
  return <ThemeContext.Provider value={{ theme, toggleDarkMode }}>{children}</ThemeContext.Provider>
}
