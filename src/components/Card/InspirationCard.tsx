import { InspirationCardProps } from "@/types/components.type"
import { BookMarksButton } from "../Button/Bookmark"
import { LazyLoadImage } from "react-lazy-load-image-component"
import palceholderImage from "/elements/element-placeholder.jpg"
import "react-lazy-load-image-component/src/effects/blur.css"

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
        <LazyLoadImage
          placeholderSrc={palceholderImage}
          src={img}
          alt={title}
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
          className="ease-in-out hover:scale-105 hover:shadow-lg hover:brightness-75"
          effect="blur"
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
            <BookMarksButton isFavorite={isFavorite} />
          </div>
        </div>
      </div>
    </div>
  )
}
