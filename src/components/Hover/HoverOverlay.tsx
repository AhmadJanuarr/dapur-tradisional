import { Upload, Loader2 } from "lucide-react"

export const HoverOverlay = ({ isLoading, onClick }: { isLoading: boolean; onClick: () => void }) => {
  return (
    <div
      className={`absolute inset-0 flex cursor-pointer items-center justify-center rounded-full opacity-0 transition-opacity duration-200 ${isLoading ? "opacity-100" : "group-hover:opacity-100"}`}
      onClick={!isLoading ? onClick : undefined}
    >
      {!isLoading ? (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-black bg-opacity-50">
          <span className="flex gap-2 text-white">
            <Upload />
            upload
          </span>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-black bg-opacity-50">
          <Loader2 className="w-16 animate-spin text-white" />
        </div>
      )}
    </div>
  )
}
