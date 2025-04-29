import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { DarkModeTheme } from "./context/themes/theme-provider.tsx"
import App from "./App.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeTheme>
      <App />
    </DarkModeTheme>
  </StrictMode>,
)
