import { BookmarksButtonProps } from "@/types/components.type"
import { BookmarkIcon } from "@heroicons/react/24/outline"
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid"

export const BookMarksButton = ({ isFavorite, onClickFavorite }: BookmarksButtonProps) => (
  <div
    onClick={onClickFavorite}
    className="absolute right-2 top-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow"
  >
    {!isFavorite ? (
      <BookmarkIcon className="h-6 w-6 text-[#f97316]" />
    ) : (
      <BookmarkIconSolid className="h-6 w-6 text-[#f97316]" />
    )}
  </div>
)
