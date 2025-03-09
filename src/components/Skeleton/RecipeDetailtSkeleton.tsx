import { Skeleton } from "../ui/skeleton"

export default function RecipeDetailtSkeleton() {
  return (
    <div className="mx-auto mt-28 flex w-[80%] flex-col flex-wrap">
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
