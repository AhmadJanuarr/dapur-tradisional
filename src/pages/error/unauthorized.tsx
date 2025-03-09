import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function UnauthorizedPage() {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Unauthorized</h1>
        <p className="mt-4">Anda tidak memiliki hak akses untuk mengakses halaman ini.</p>
        <Link to={"/"}>
          <Button className="mt-4 rounded-xl px-5">Kembali ke halaman utama</Button>
        </Link>
      </div>
    </section>
  )
}
