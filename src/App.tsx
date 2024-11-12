import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import NotFoundPage from "./pages/404"
import AppLayout from "./components/Layout/App"
import Authentication from "./pages/auth/Authentication"
import Recipes from "./pages/Recipes"

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Halaman Authentication (Login & Signup) */}
          <Route path="/login" element={<Authentication />} />
          <Route path="/signup" element={<Authentication />} />

          <Route path="/recipes" element={<Recipes />} />
          {/* Halaman 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}
