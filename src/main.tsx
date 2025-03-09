import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import DarkModeTheme from "./context/Themes.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeTheme>
      <App />
    </DarkModeTheme>
  </StrictMode>,
)
