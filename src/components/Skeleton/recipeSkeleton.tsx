import { Skeleton } from "@/components/ui/skeleton"

const RecipeSkeleton = ({ index }: { index: number }) => {
  return (
    <div className="flex w-full flex-col flex-wrap md:flex-row ">
      {Array(index)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex w-full flex-col space-y-3 p-5 lg:w-[25%]">
            <Skeleton className="h-[300px] w-full rounded-xl" />
            <div className="flex flex-col space-y-2">
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

export default RecipeSkeleton
