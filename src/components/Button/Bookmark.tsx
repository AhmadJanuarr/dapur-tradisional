import { BookmarksButtonProps } from "@/types/components.type"
import { BookmarkIcon } from "@heroicons/react/24/outline"
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid"

export const BookMarksButton = ({ isFavorite }: BookmarksButtonProps) => {
  return !isFavorite ? (
    <BookmarkIcon className="h-6 w-6 text-[#f97316]" />
  ) : (
    <BookmarkIconSolid className="h-6 w-6 text-[#f97316]" />
  )
}
