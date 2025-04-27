export const LoadingManageRecipes = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 bg-gray-100 dark:bg-[#0C0A09]">
      <div
        className="text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      ></div>
      <span className="animate-pulse text-xl">Tunggu sebentar sedang di proses</span>
    </div>
  )
}
