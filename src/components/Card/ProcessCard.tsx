type ProcessCardProps = {
  index: number
  title: string
  desc: string
}
const ProcessCard = ({ index, title, desc }: ProcessCardProps) => {
  return (
    <div className="subheading relative flex h-[180px] w-full flex-col gap-5 rounded-xl border p-5 pt-6 dark:border-gray-50 md:h-[250px] lg:h-[220px]">
      <div className="absolute -top-3 left-5 rounded-full bg-darkPrimary px-2 text-white dark:bg-white dark:text-black">
        {index}
      </div>
      <h1 className="font-raleway text-[24px]">{title}</h1>
      <p className="text-gray-800 dark:text-white">{desc}</p>
    </div>
  )
}

export default ProcessCard
