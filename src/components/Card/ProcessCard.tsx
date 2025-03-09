type ProcessCardProps = {
  index: number
  title: string
  desc: string
}
const ProcessCard = ({ index, title, desc }: ProcessCardProps) => {
  return (
    <div className="subheading h relative flex h-[150px] w-full flex-col gap-4 rounded-xl border p-5 pt-5 dark:border-gray-50 md:h-[250px] lg:h-[220px] lg:w-1/4">
      <div className="bg-darkPrimary absolute -top-3 left-5 rounded-full px-2 text-white dark:bg-white dark:text-black">
        {index}
      </div>
      <h1 className="font-semibold">{title}</h1>
      <p className="text-gray-500 dark:text-white">{desc}</p>
    </div>
  )
}

export default ProcessCard
