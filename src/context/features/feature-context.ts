import { createContext, SetStateAction } from "react"

type FeatureContextType = {
  keyword: string
  isBlocking: boolean
  keywordRef: React.RefObject<HTMLInputElement>
  setIsBlocking: React.Dispatch<SetStateAction<boolean>>
  setHistory: React.Dispatch<SetStateAction<string[]>>
  setKeyword: React.Dispatch<SetStateAction<string>>
}

export const FeatureContext = createContext<FeatureContextType | undefined>(undefined)
