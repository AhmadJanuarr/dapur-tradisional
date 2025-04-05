type HeadingSectionProps = {
  heading: string
  subheading?: string
  description: string
}

const HeadingSection = ({ heading, subheading, description }: HeadingSectionProps) => {
  return (
    <div className="z-20 flex flex-col gap-5 py-8 dark:text-white lg:gap-8">
      <h1 className="text-xl tracking-widest lg:text-3xl">{heading.toUpperCase()}</h1>
      {subheading && (
        <h2 className="font-prata text-[1.2rem] text-gray-700 dark:text-gray-300 lg:w-1/2 lg:text-[2.5rem]">
          {subheading}
        </h2>
      )}
      <p className="subheading text-[#434343] lg:w-1/2 lg:py-3">{description}</p>
    </div>
  )
}

export default HeadingSection
