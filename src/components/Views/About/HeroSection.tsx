type HeroSectionAboutProps = {
  heading: string
  subheading: string
  src: string
}
const HeroSectionAbout = ({ heading, subheading, src }: HeroSectionAboutProps) => {
  return (
    <div className="mt-24 lg:mt-28">
      <div className="mx-auto flex flex-col items-center justify-center lg:w-4/5 lg:text-center">
        <h1 className="heading font-semibold lg:w-2/3">{heading}</h1>
        <p className="subheading mt-5 text-gray-500 dark:text-white lg:w-4/5">{subheading}</p>
      </div>
      <div className="mt-10 lg:py-28">
        <img src={src} alt="bg-about" className="w-full rounded-xl" />
      </div>
    </div>
  )
}

export default HeroSectionAbout
