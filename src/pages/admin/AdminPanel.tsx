import { useLocation } from "react-router-dom"
import DashboardPage from "./DashboardPage"
import AppLayout from "@/components/Admin/AppLayout"
import ManageRecipes from "./ManageRecipes"

export default function AdminPanel() {
  const location = useLocation().pathname
  return (
    <AppLayout>
      {location.includes("/admin/dashboard") && <DashboardPage />}
      {location.includes("/admin/recipes") && <ManageRecipes />}
      {location.includes("/admin/users") && <h1>Dashboard</h1>}
    </AppLayout>
  )
}
