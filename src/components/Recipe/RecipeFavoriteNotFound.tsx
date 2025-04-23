import { Link } from "react-router-dom"
import { Button } from "../ui/button"

export const RecipeFavoriteNotFound = () => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Favorite belum ada</h1>
        <p className="mt-4">Apakah anda ingin menambahkan resep favorit?</p>
        <Link to={"/resep"}>
          <Button className="mt-4 rounded-xl px-5">Kembali ke halaman resep</Button>
        </Link>
      </div>
    </section>
  )
}
