import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotificationPage } from "./pages/user/NotificationPage"
import { SettingProfilePage } from "./pages/user/SettingProfilePage"
import { UserProfilePage } from "./pages/user/UserProfilePage"
import { ProtectedRoute } from "./route/protected.route"
import { AddRecipePage } from "./pages/user/AddRecipePage"
import { AuthProvider } from "./context/auth/auth-provider"
import AppLayout from "./components/Layout/App"
import AdminPanel from "./pages/admin/AdminPanel"
import DashboardPage from "./pages/admin/DashboardPage"
import ManageRecipesPage from "./pages/admin/ManageRecipesPage"
import AuthenticationPage from "./pages/auth/Authentication"
import NotFoundPage from "./pages/error/404"
import UnauthorizedPage from "./pages/error/unauthorized"
import AboutUsPage from "./pages/public/AboutUsPage"
import ContactPage from "./pages/public/ContactPage"
import HomePage from "./pages/public/HomePage"
import DetailRecipePage from "./pages/public/RecipeDetail/RecipeDetailPage"
import RecipesCategoryPage from "./pages/public/RecipesCategory/RecipeCategoryPage"
import RecipeSearchPage from "./pages/public/RecipeSearch/RecipeSearchPage"
import RecipesPage from "./pages/public/RecipesPage"
import FavoritePage from "./pages/user/FavoritePage"
import LayoutProfilePage from "./pages/user/LayoutProfilePage"
import { FeatureProvider } from "./context/features/feature-provider"

export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={new QueryClient()}>
        <AuthProvider>
          <FeatureProvider>
            <AppLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tentang-kami" element={<AboutUsPage />} />
                <Route path="/kontak" element={<ContactPage />} /> {/* Halaman Authentication (Login & Signup) */}
                <Route path="/auth/login" element={<AuthenticationPage />} />
                <Route path="/auth/register" element={<AuthenticationPage />} />
                {/* Halaman profile user */}
                <Route
                  path="/profile/:username"
                  element={
                    <ProtectedRoute allowedRoles={["USER"]}>
                      <LayoutProfilePage />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<UserProfilePage />} />
                  <Route path="pengaturan-akun" element={<SettingProfilePage />} />
                  <Route path="notifikasi" element={<NotificationPage />} />
                  <Route path="favorit" element={<FavoritePage />} />
                  <Route path="tambahkan-resep" element={<AddRecipePage />} />
                </Route>
                {/* Halaman Admin */}
                <Route path="/resep/cari-resep" element={<RecipeSearchPage />} />
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
                  <Route path="manage-resep" element={<ManageRecipesPage />} />
                </Route>
                {/* Halaman resep */}
                <Route path="/resep" element={<RecipesPage />} />
                <Route path="/resep/:slug" element={<DetailRecipePage />} />
                <Route path="/resep/kategori/:slug" element={<RecipesCategoryPage />} />
                {/* Halaman 404 */}
                <Route path="/unauthorized" element={<UnauthorizedPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </AppLayout>
          </FeatureProvider>
        </AuthProvider>
      </QueryClientProvider>{" "}
    </BrowserRouter>
  )
}
