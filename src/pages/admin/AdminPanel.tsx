import DashboardPage from "./DashboardPage"
import AppLayout from "@/components/Admin/AppLayout"
import RecipesPages from "./RecipesPages"
import { useLocation } from "react-router-dom"

export default function AdminPanel() {
  const location = useLocation().pathname
  return (
    <AppLayout>
      {location.includes("/admin/dashboard") && <DashboardPage />}
      {location.includes("/admin/recipes") && <RecipesPages />}
      {location.includes("/admin/users") && <h1>Dashboard</h1>}
    </AppLayout>
  )
}
