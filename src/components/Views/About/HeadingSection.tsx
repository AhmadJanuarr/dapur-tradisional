type HeadingSectionProps = {
  heading: string
  subHeading: string
}

const HeadingSection = ({ heading, subHeading }: HeadingSectionProps) => {
  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold lg:text-3xl">{heading}</h1>
      <p className="subheading py-3 text-gray-500">{subHeading}</p>
    </div>
  )
}

export default HeadingSection
