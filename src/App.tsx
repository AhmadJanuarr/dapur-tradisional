import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ProtectedRoute } from "./route/protected.route"
import HomePage from "./pages/public/Home"
import NotFoundPage from "./pages/error/404"
import AppLayout from "./components/Layout/App"
import Authentication from "./pages/auth/Authentication"
import Recipes from "./pages/public/Recipes"
import AdminPanel from "./pages/admin/AdminPanel"
import DetailRecipe from "./pages/public/details/DetailRecipe"
import UnauthorizedPage from "./pages/error/unauthorized"
import AboutUsPage from "./pages/public/AboutUs"
import ContactPage from "./pages/public/Contact"

export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={new QueryClient()}>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Halaman Authentication (Login & Signup) */}
            <Route path="/auth/login" element={<Authentication />} />
            <Route path="/auth/register" element={<Authentication />} />

            {/* Halaman Admin */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute allowedRoles={["ADMIN"]}>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/recipes"
              element={
                <ProtectedRoute allowedRoles={["ADMIN"]}>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
            {/* Halaman Recipes */}
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:slug" element={<DetailRecipe />} />

            {/* Halaman 404 */}
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppLayout>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
