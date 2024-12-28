import { Skeleton } from "@/components/ui/skeleton"

export default function RecipeSkeleton({ index }: { index: number }) {
  return (
    <div className="flex w-full flex-wrap">
      {Array(index)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex w-[25%] flex-col space-y-3 p-5">
            <Skeleton className="h-[300px] w-full rounded-xl" />
            <div className="flex flex-col items-center justify-center space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <div className="pt-5">
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
