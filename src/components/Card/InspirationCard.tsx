import { InspirationCardProps } from "@/types/components.type"
import { BookmarkIcon } from "@heroicons/react/24/outline"
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid"

export const InspirationCard = ({
  img,
  title,
  category,
  description,
  difficulty,
  isFavorite,
  onClickViewDetail,
  onClickFavorite,
}: InspirationCardProps) => {
  return (
    <div className="w-full">
      <div className="w-full cursor-pointer overflow-hidden rounded-t-lg lg:h-48 2xl:h-64" onClick={onClickViewDetail}>
        <img
          src={img}
          alt={title}
          className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:brightness-75 "
        />
      </div>
      <div className="rounded-b-lg border-x-2 border-b-2 border-slate-100 px-3 py-3 dark:bg-darkBackground">
        <p className="text-right text-[#f97316]">{category.replace("_", " ")}</p>
        <h3 className="font-semibold">{title}</h3>
        <p className="py-2 text-gray-800 dark:text-slate-200">{description.slice(0, 100).concat("...")}</p>
        <div className="flex justify-between">
          <p>
            level : <span className="text-[#f97316]">{difficulty}</span>
          </p>
          <div className="cursor-pointer" onClick={onClickFavorite}>
            {!isFavorite ? (
              <BookmarkIcon className="h-6 w-6 text-[#f97316]" />
            ) : (
              <BookmarkIconSolid className="h-6 w-6 text-[#f97316]" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
