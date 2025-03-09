import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Book, Eye, History, Tag, CircleUser } from "lucide-react"

interface DashboardStatsProps {
  title: string
  description: string
  color?: string
  icon: React.ReactNode
}

const RecentActivity = () => {
  return (
    <div className="flex w-full flex-col rounded-md border bg-white dark:bg-darkBackground md:w-1/2">
      <span className="subheading flex gap-5 px-4 py-5 font-semibold">
        <History />
        Recent Activity
      </span>
      <Table>
        <TableHeader>
          <TableRow className="subheading bg-slate-50 dark:bg-darkPrimary">
            <TableHead>Tanggal/Waktu</TableHead>
            <TableHead>Aktivitas</TableHead>
            <TableHead>Pengguna</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="subheading">
            <TableCell>2023-01-01 10:00:00</TableCell>
            <TableCell>Menambahkan resep baru</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell className={`text-green-500`}>Success</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

const DashboardStats = ({ title, description, icon }: DashboardStatsProps) => {
  return (
    <Card className="flex h-[100px] w-full rounded-lg shadow-none lg:h-[150px]">
      <CardContent className="flex w-full items-center justify-between p-0 px-5 leading-none ">
        <div className="flex flex-col justify-center">
          <CardDescription className="text-sm font-medium">{description}</CardDescription>
          <CardTitle className="text-xl font-bold lg:text-3xl">{title}</CardTitle>
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-50 text-green-800">{icon}</div>
      </CardContent>
    </Card>
  )
}

export default function DashboardPage() {
  const stats = [
    { title: "100", description: "Total Resep", icon: <Book className="h-10 w-10" /> },
    { title: "5", description: "Jumlah Pengguna", icon: <CircleUser className="h-10 w-10" /> },
    { title: "3", description: "Total Kategori", icon: <Tag className="h-10 w-10" /> },
    { title: "4030", description: "Jumlah Reviews", icon: <Eye className="h-10 w-10" /> },
  ]

  return (
    <section className="flex w-full">
      <div className="w-full px-3 lg:px-10">
        <div className="py-10">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p>Selamat datang di halaman dashboard</p>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-4">
          {stats.map((stat, index) => (
            <DashboardStats key={index} title={stat.title} description={stat.description} icon={stat.icon} />
          ))}
        </div>
        <div className="w-full rounded-lg py-5">
          <div className="flex gap-5">
            <RecentActivity />
          </div>
        </div>
      </div>
    </section>
  )
}
