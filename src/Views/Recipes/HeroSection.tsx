import { Button } from "@/components/ui/button"
import { useFeature } from "@/context/features/useFeature"
import { useEffect, useRef, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

type HeroSectionProps = {
  heading: string
  subheading: string
  image: string
  placeholderImage: string
}

export const HeroSectionRecipe = ({ heading, subheading, image, placeholderImage }: HeroSectionProps) => {
  const [isBoxOpen, setIsBoxOpen] = useState<boolean>(false)
  const { keywordRef } = useFeature()
  const boxRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const handleRecipeSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const KeywordValue = keywordRef.current?.value
    const editKeywordValue = KeywordValue?.trim().replace(" ", "-")
    console.log({ editKeywordValue })
    if (!editKeywordValue) {
      toast.warning("Masukkan kata kunci pencarian resep")
    }
    try {
      navigate(`/resep/cari-resep?pencarian=${editKeywordValue}`)
    } catch (error) {
      console.log(error)
      toast.error("Terjadi kesalahan pencarian resep")
    } finally {
      setIsBoxOpen(false)
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setIsBoxOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <section className="mt-24 flex w-full lg:mt-28">
      <div className="flex h-[500px] w-full flex-col-reverse gap-2 lg:flex-row">
        <div className="flex w-full flex-col justify-end rounded-xl bg-[#ffeddf] px-4 py-4 text-black md:py-10 lg:w-[40%] lg:gap-5 lg:px-6">
          <img src="/logo/logo-t.png" alt="logo website" className="mx-auto w-28 lg:w-40" />
          <h1 className="heading font-raleway leading-tight">{heading}</h1>
          <p className="subheading py-3 text-gray-800">{subheading}</p>
          <div className="relative" ref={boxRef}>
            <form className="subheading flex w-full items-center gap-3" onSubmit={handleRecipeSearch}>
              <input
                type="search"
                placeholder="Cari resep..."
                aria-label="Search recipes"
                className={`w-full rounded-md border-none p-2 text-black placeholder:text-[#656565] ${isBoxOpen ? "bg-white" : "bg-slate-100"}`}
                ref={keywordRef}
                onClick={() => setIsBoxOpen(true)}
              />
              <Button className="rounded-md" type="submit">
                Pencarian
              </Button>
              {isBoxOpen && (
                <div className="absolute left-0 right-0 top-0 z-20 mt-12 rounded-md border bg-white p-4 shadow-xl">
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <h1 className="font-semibold">Pencarian sebelumnya</h1>
                      <span className="cursor-pointer text-slate-500">clear</span>
                    </div>
                    <div className="py-2">
                      <Button variant="outline" className="borer-2 rounded-md bg-transparent">
                        Ayam penyet
                      </Button>
                    </div>
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
            </form>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-xl lg:h-[500px] lg:w-[60%]">
          <LazyLoadImage
            placeholderSrc={placeholderImage}
            src={image}
            alt={image}
            wrapperProps={{
              style: { transitionDelay: "1s" },
            }}
            effect="blur"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
