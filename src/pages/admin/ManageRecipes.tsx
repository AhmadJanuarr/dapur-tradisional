import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { BookPlus } from "lucide-react"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { useQueryClient } from "@tanstack/react-query"
import { LoadingManageRecipes } from "@/components/Loading/LoadingManageRecipes"
import { RecipeList } from "@/components/Admin/RecipeList"
import { PaginationControl } from "@/components/Admin/PaginationControl"
import { RecipeForm } from "@/components/Admin/RecipeForm"
import axios from "axios"

export default function ManageRecipes() {
  const [openForm, setOpenForm] = useState<boolean>(false)
  const [current, setCurrent] = useState<number>(1)
  const queryClient = useQueryClient()
  const recordPerPage: number = 10
  const lastIndex = current * recordPerPage
  const firstIndex = lastIndex - recordPerPage

  const fetchData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/recipes`)
    return data
  }

  const { data, isLoading } = useQuery({ queryKey: ["recipes"], queryFn: fetchData })
  queryClient.invalidateQueries({ queryKey: ["recipes"] })
  const recipes = Array.isArray(data?.data) ? data?.data : []
  const records = recipes.slice(firstIndex, lastIndex)
  const totalPage = Math.ceil(recipes.length / recordPerPage)
  const number = [...Array(totalPage + 1).keys()].slice(1)
  const prevPage = () => {
    if (current === 1) return
    if (current !== firstIndex) {
      setCurrent(current - 1)
    }
  }
  const changePage = (id: number) => {
    setCurrent(id)
  }
  const nextPage = () => {
    if (current === totalPage) return
    if (current !== lastIndex) {
      setCurrent(current + 1)
    }
  }

  return (
    <section className="flex w-full px-4">
      <div className="w-full">
        <div className="pt-10">
          <h1 className="text-3xl font-bold">Manajemen Resep</h1>
          <p>Tambahkan resep makanan daerah sesuai form yang tersedia</p>
        </div>
        <Card className="my-10 w-full px-4">
          <div className="flex w-full justify-between py-5 text-sm leading-none text-muted-foreground">
            <div className="flex items-center gap-5 font-semibold text-black dark:text-white">
              <BookPlus />
              Recipes list
            </div>
            <Button
              className="rounded-md"
              onClick={() => setOpenForm(!openForm)}
              variant={openForm ? "destructive" : "default"}
            >
              {openForm ? "Kembali" : "Tambahkan Resep"}
            </Button>
          </div>
          {openForm ? (
            <RecipeForm setOpenForm={setOpenForm} />
          ) : (
            <>
              <Table>
                <TableHeader className="w-full">
                  <TableRow className="subheading bg-slate-100 dark:bg-darkPrimary dark:text-white">
                    <TableHead className="text-center ">Id</TableHead>
                    <TableHead className="w-[300px]">Title</TableHead>
                    <TableHead className="w-[700px]">Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="w-[100px] text-center">Difficulty</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                {isLoading ? <LoadingManageRecipes /> : <RecipeList recipes={records} />}
              </Table>
              <PaginationControl
                numbers={number}
                current={current}
                prevPage={prevPage}
                changePage={changePage}
                nextPage={nextPage}
              />
            </>
          )}
        </Card>
      </div>
    </section>
  )
}
