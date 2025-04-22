/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFetchDataRecipeFavorite } from "@/api/useFetchDataRecipeFavorite"
import { BookMarksButton } from "@/components/Button/Bookmark"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/context/AuthContext"
import { useFavorite } from "@/hooks/useFavorite"
import { useQuery } from "@tanstack/react-query"
import { ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function FavoritePage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const { handleClickFavorite } = useFavorite()
  const {
    data: recipes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["favorite"],
    queryFn: useFetchDataRecipeFavorite().fetchData,
    enabled: user?.name ? true : false,
    staleTime: 0,
    refetchOnMount: true,
  })

  console.log(recipes)
  const handleClickViewDetail = (title: string) => {
    navigate(`/resep/${title}`)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {recipes &&
        recipes.map((item: any) => (
          <Card className="relative flex w-full flex-col rounded-xl border-none bg-slate-100 shadow-none dark:bg-darkBackground">
            <div className="relative overflow-hidden">
              <div className="lg:h-52 2xl:h-72">
                <img src={item.image} className="h-full w-full rounded-t-xl object-cover shadow-xl" alt={item.title} />
              </div>
              <BookMarksButton onClickFavorite={() => handleClickFavorite} isFavorite={item.isFavorite} />
            </div>
            <div className="flex h-32 flex-col justify-between gap-2 rounded-b-xl border border-slate-200 bg-white px-2 py-2 dark:bg-neutral-800 lg:h-[170px] lg:px-6 lg:py-4">
              <div className="flex flex-col gap-2 dark:text-black">
                <CardDescription className="dark:text-white">{item.category.replace("_", " ")}</CardDescription>
                <CardTitle className="mb-2 font-raleway dark:text-white lg:text-2xl">{item.title}</CardTitle>
              </div>
              <Button
                onClick={() => handleClickViewDetail(item.title)}
                variant="outline"
                className="rounded-xl border-[#ffeddf] px-10 text-[#f97316] hover:bg-[#f97316] hover:text-white lg:w-[60%] 2xl:w-[50%]"
              >
                <p className="subheading">Lihat Resep</p> <ChevronRight />
              </Button>
            </div>
          </Card>
        ))}
    </div>
  )
}
