import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./route/protected.route"
import { UserProfile } from "./pages/user/UserProfile"
import { SettingProfile } from "./pages/user/SettingProfile"
import { Notification } from "./pages/user/Notification"
import { AuthProvider } from "./context/AuthContext"
import AppLayout from "./components/Layout/App"
import AdminPanel from "./pages/admin/AdminPanel"
import Authentication from "./pages/auth/Authentication"
import NotFoundPage from "./pages/error/404"
import UnauthorizedPage from "./pages/error/unauthorized"
import AboutUsPage from "./pages/public/AboutUs"
import ContactPage from "./pages/public/Contact"
import HomePage from "./pages/public/Home"
import DetailRecipe from "./pages/public/RecipeDetail"
import Recipes from "./pages/public/Recipes"
import RecipesCategory from "./pages/public/RecipesCategory"
import LayoutProfile from "./pages/user/LayoutProfile"
import FavoritePage from "./pages/user/FavoritePage"
import DashboardPage from "./pages/admin/DashboardPage"
import ManageRecipes from "./pages/admin/ManageRecipes"

export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={new QueryClient()}>
        <AuthProvider>
          <AppLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tentang-kami" element={<AboutUsPage />} />
              <Route path="/kontak" element={<ContactPage />} />   {/* Halaman Authentication (Login & Signup) */}
              <Route path="/auth/login" element={<Authentication />} />
              <Route path="/auth/register" element={<Authentication />} />

              {/* Halaman profile user */}
              <Route
                path="/profile/:username"
                element={
                  <ProtectedRoute allowedRoles={["USER"]}>
                    <LayoutProfile />
                  </ProtectedRoute>
                }
              >
                <Route index element={<UserProfile />} />
                <Route path="pengaturan-akun" element={<SettingProfile />} />
                <Route path="notifikasi" element={<Notification />} />
                <Route path="favorit" element={<FavoritePage />} />
              </Route>

              {/* Halaman Admin */}
              <Route
                path="/admin/"
                element={
                  <ProtectedRoute allowedRoles={["ADMIN"]}>
                    <AdminPanel />
                  </ProtectedRoute>
                }
              >
                <Route index element={<AdminPanel />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="manage-resep" element={<ManageRecipes />} />
              </Route>

              {/* Halaman resep */}
              <Route path="/resep" element={<Recipes />} />
              <Route path="/resep/:slug" element={<DetailRecipe />} />
              <Route path="/resep/kategori/:slug" element={<RecipesCategory />} />

              {/* Halaman 404 */}
              <Route path="/unauthorized" element={<UnauthorizedPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AppLayout>
        </AuthProvider>
      </QueryClientProvider>{" "}
    </BrowserRouter>
  )
}
