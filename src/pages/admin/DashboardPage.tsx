import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, TrendingUp, ChartPie } from "lucide-react"
import { CircleUser } from "lucide-react"
import { Tag } from "lucide-react"
import { Star } from "lucide-react"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import { Separator } from "@/components/ui/separator"
import { UserManagements } from "@/components/Admin/UserManagements"

interface DashboardStatsProps {
  title: string
  description: string
  color?: string
  icon: React.ReactNode
}

const DashboardStats = ({ title, description, icon }: DashboardStatsProps) => {
  return (
    <Card className="flex h-[150px] w-1/3 items-center justify-between bg-[#F5F7F8] px-8 ">
      <div className="flex flex-col justify-center leading-none">
        <CardDescription className="text-sm font-medium">{description}</CardDescription>
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
      </div>
      <div style={{ backgroundColor: "#F1F1F1" }} className="flex h-20 w-20 items-center justify-center rounded-full">
        {icon}
      </div>
    </Card>
  )
}

const Analytics = () => {
  const chartData = [{ browser: "safari", visitors: 200, fill: "var(--color-safari)" }]

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    safari: {
      label: "Safari",
    },
  } satisfies ChartConfig
  return (
    <section className="w-full">
      <Card className="flex flex-col">
        <div className="flex items-center gap-5 px-3 py-5 text-sm leading-none text-muted-foreground">
          <ChartPie />
          <div className="font-medium">Analisis Keterlibatan Pengguna</div>
        </div>
        <Separator />
        <CardHeader className="items-center pb-0">
          <CardTitle>Bagan Radial - Teks</CardTitle>
          <CardDescription>Agustus - November 2024</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
            <RadialBarChart data={chartData} startAngle={0} endAngle={250} innerRadius={80} outerRadius={110}>
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="visitors" background cornerRadius={10} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                          <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-4xl font-bold">
                            {chartData[0].visitors.toLocaleString()}
                          </tspan>
                          <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                            Pengunjung
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Tren naik sebesar 5,2% bulan ini <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">Menunjukkan total pengunjung selama 6 bulan terakhir</div>
        </CardFooter>
      </Card>
    </section>
  )
}

export default function DashboardPage() {
  const stats = [
    { title: "100", description: "Total Resep", icon: <Book className="h-10 w-10" /> },
    { title: "5", description: "Jumlah Pengguna", icon: <CircleUser className="h-10 w-10" /> },
    { title: "3", description: "Total Kategori", icon: <Tag className="h-10 w-10" /> },
    { title: "4030", description: "Jumlah Reviews", icon: <Star className="h-10 w-10" /> },
  ]

  return (
    <section className="flex w-full">
      <div className="w-full px-10">
        <div className="py-10">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p>Selamat datang di halaman dashboard</p>
        </div>
        <div className="flex w-full gap-5">
          {stats.map((stat, index) => (
            <DashboardStats key={index} title={stat.title} description={stat.description} icon={stat.icon} />
          ))}
        </div>
        <div className="my-5 w-full rounded-lg bg-white py-10">
          <div className="flex gap-5">
            <UserManagements />
            <Analytics />
          </div>
        </div>
      </div>
    </section>
  )
}
