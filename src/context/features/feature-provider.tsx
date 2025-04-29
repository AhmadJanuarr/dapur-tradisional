import { useEffect, useRef, useState } from "react"
import { FeatureContext } from "./feature-context"
import type { ReactNode } from "react"

export const FeatureProvider = ({ children }: { children: ReactNode }) => {
  const [keyword, setKeyword] = useState("")
  const [isBlocking, setIsBlocking] = useState(false)
  const [history, setHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem("keyword")
    return saved ? JSON.parse(saved) : []
  })
  const keywordRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    localStorage.setItem("keyword", JSON.stringify(history))
  }, [history])
  localStorage.setItem("keyword", JSON.stringify(history))
  return (
    <FeatureContext.Provider value={{ keyword, isBlocking, keywordRef, setIsBlocking, setHistory, setKeyword }}>
      {children}
    </FeatureContext.Provider>
  )
}
