export const LoadingManageRecipes = ({ title }: { title: string }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 bg-transparent">
      <div
        className="text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      ></div>
      <span className="animate-pulse text-center text-xl">{title}</span>
    </div>
  )
}
