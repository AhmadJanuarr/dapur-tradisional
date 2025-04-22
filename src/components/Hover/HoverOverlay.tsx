/* eslint-disable @typescript-eslint/no-unused-vars */

import { Upload } from "lucide-react"

export const HoverOverlay = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      onClick={onClick}
    >
      <span className="flex gap-2 text-white">
        <Upload />
        upload
      </span>
    </div>
  )
}
