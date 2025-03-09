/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from "react"

type Theme = "light" | "dark"
type ThemeContextType = {
  theme: Theme
  toggleDarkMode: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export default function DarkModeTheme({ children }: { children: React.ReactNode }) {
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
