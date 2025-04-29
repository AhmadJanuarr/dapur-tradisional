import { useContext } from "react"
import { FeatureContext } from "./feature-context"

export function useFeature() {
  const context = useContext(FeatureContext)
  if (!context) throw new Error("useFeature must be used within FeatureProvider")
  return context
}
