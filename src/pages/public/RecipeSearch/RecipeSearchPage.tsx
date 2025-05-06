import { fetchDataApiRecipes } from "@/api/useFetchDataRecipe"
import { LoadingManageRecipes } from "@/components/Loading/LoadingManageRecipes"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/useIsMobile"
import { RecipeData } from "@/types/recipe.types"
import { useQuery } from "@tanstack/react-query"
import { Bookmark } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

const CardRecipe = ({
  recipe,
  isMobile,
  onClickViewDetail,
}: {
  recipe: RecipeData
  isMobile: boolean
  onClickViewDetail: () => void
}) => (
  <div className="grid w-full grid-cols-[30%,auto] rounded-md border p-2 lg:px-5 lg:py-7">
    <div className="cursor-pointer overflow-hidden rounded-md" onClick={onClickViewDetail}>
      <img src={recipe.image} alt={recipe.title} className="h-full w-full object-cover" />
    </div>
    <div className="flex flex-col justify-center px-2">
      <h1 className="py-3 text-[1.1rem] font-semibold">{recipe.title}</h1>
      <div className="flex justify-between pb-2 text-gray-500">
        <p>{recipe.category.replace("_", " ")}</p>
        <h3 className="font-semibold text-[#f97316]">{recipe.difficulty}</h3>
      </div>
      <p>{recipe.description.slice(0, isMobile ? 50 : 200).concat("...")}</p>
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-3">
          <img src="/elements/element-user.png" alt="pembuat user" className="w-5" />
          <p className="text-gray-500">Unknown</p>
        </div>
        <Bookmark />
      </div>
    </div>
  </div>
)

export default function RecipeSearchPage() {
  const [valueKeyword] = useSearchParams()
  const [isBoxOpen, setIsBoxOpen] = useState(false)
  const isMobile = useIsMobile()
  const navigate = useNavigate()
  const boxRef = useRef<HTMLDivElement>(null)
  const keyword = valueKeyword.get("pencarian") || ""

  const { data = [], isLoading } = useQuery({
    queryKey: ["recipe", keyword],
    queryFn: fetchDataApiRecipes,
    staleTime: 0,
  })

  const recipesBySearch = data.filter((recipe: RecipeData) =>
    recipe.title.toLowerCase().includes(keyword.toLowerCase()),
  )
  const handleViewDetail = (title: string) => navigate(`/resep/${title}`)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setIsBoxOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingManageRecipes title="Tunggu sebentar sedang mencari resep" />
      ) : (
        <section className="mx-auto mb-10 mt-28 flex min-h-screen flex-col gap-5">
          {isMobile && (
            <div className="relative flex" ref={boxRef}>
              <div className="flex w-full items-center gap-3">
                <input
                  type="text"
                  placeholder="Cari resep anda..."
                  className="w-full rounded-md border px-4 py-2"
                  onClick={() => setIsBoxOpen(true)}
                />
                <Button className="rounded-md">Pencarian</Button>
              </div>

              {isBoxOpen && (
                <div className="absolute left-0 right-0 top-0 z-20 mt-12 rounded-md border bg-white p-4 shadow-xl">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h1 className="font-semibold">Pencarian Sebelumnya</h1>
                      <span className="cursor-pointer text-slate-500">clear</span>
                    </div>
                    <Button variant="outline" className="rounded-md">
                      Ayam Penyet
                    </Button>

                    <div className="flex items-center justify-between">
                      <h1 className="font-semibold">Filter</h1>
                      <span className="cursor-pointer text-slate-500">clear</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {["Makanan ringan", "Makanan berat", "Kue tradisional"].map((item) => (
                        <label key={item} className="flex items-center gap-2">
                          <input type="checkbox" id={item.toLowerCase().replace(/\s+/g, "-")} />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {recipesBySearch.length === 0 ? (
            <div className="flex h-screen w-full flex-col items-center justify-center">
              <img src="/elements/element-resep-not-found.png" className="w-[300px]" />
              <div className="mt-4 flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold">Maaf, resep tidak ditemukan</h1>
                <p className="subheading">Resep yang Anda cari tidak ada atau mungkin telah dipindahkan</p>
                <div className="mt-5 grid grid-cols-2 gap-5">
                  <Button className="rounded-md">Tambahkan resep yang anda sukai</Button>
                  <Button variant="outline" className="rounded-md">
                    Cari resep lainnya
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {recipesBySearch.map((recipe: RecipeData) => (
                <CardRecipe
                  key={recipe.id}
                  recipe={recipe}
                  isMobile={isMobile}
                  onClickViewDetail={() => handleViewDetail(recipe.title.replace(" ", "-"))}
                />
              ))}
            </div>
          )}
        </section>
      )}
    </>
  )
}
