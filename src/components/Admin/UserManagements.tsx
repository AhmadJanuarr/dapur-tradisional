import { UsersRound } from "lucide-react"
import { Card } from "../ui/card"
import { Separator } from "../ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

export const UserManagements = () => {
  return (
    <section className="w-full">
      <Card className="w-full px-4">
        <div className="flex items-center gap-5 px-3 py-5 text-sm leading-none text-muted-foreground">
          <UsersRound />
          <div className="font-medium">Manajemen pengguna</div>
        </div>
        <Separator />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Pengguna id</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium ">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </section>
  )
}
