import { Skeleton } from "../ui/skeleton"

export const RecipeDetailtSkeleton = () => {
  return (
    <div className="mx-auto mt-28 flex flex-col flex-wrap md:w-[80%]">
      <Skeleton className="mb-2 h-[50px] w-full rounded-xl" />
      <Skeleton className="mb-5 h-[20px] w-full rounded-xl" />
      <Skeleton className="mb-2 h-[600px] w-full rounded-xl" />
      <Skeleton className="mb-2 h-[20px] w-full rounded-xl" />
      <Skeleton className="mb-2 h-[20px] w-full rounded-xl" />
      <Skeleton className="mb-2 h-[20px] w-full rounded-xl" />
      <Skeleton className="mb-2 h-[20px] w-full rounded-xl" />
    </div>
  )
}
