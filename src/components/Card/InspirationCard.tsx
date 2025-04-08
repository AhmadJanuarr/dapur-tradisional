import { Bookmark } from "lucide-react"

type InspirationCardProps = {
  img: string
  title: string
  category: string
  description: string
  difficulty: string
  onClick: () => void
}

const InspirationCard = ({ img, title, category, description, difficulty, onClick }: InspirationCardProps) => {
  return (
    <div className="w-full">
      <div className="w-full cursor-pointer overflow-hidden rounded-t-lg lg:h-64" onClick={onClick}>
        <img
          src={img}
          alt={title}
          className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        />
      </div>
      <div className="rounded-b-lg border-x-2 border-b-2 border-slate-100 px-3 py-3 dark:bg-darkBackground">
        <p className="text-right text-[#f97316]">{category.replace("_", " ")}</p>
        <h3 className="font-semibold">{title}</h3>
        <p className="py-2 text-[#656565] dark:text-slate-200">{description.slice(0, 100).concat("...")}</p>
        <div className="flex justify-between">
          <p>
            level : <span className="text-[#f97316]">{difficulty}</span>
          </p>
          <Bookmark />
        </div>
      </div>
    </div>
  )
}

export default InspirationCard
