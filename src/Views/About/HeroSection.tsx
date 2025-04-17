type HeroSectionAboutProps = {
  heading: string
  subheading: string
  src: string
}
const HeroSectionAbout = ({ heading, subheading, src }: HeroSectionAboutProps) => {
  return (
    <div className="mt-24 lg:mt-40">
      <div className="mx-auto flex flex-col items-center justify-center gap-8 text-center lg:w-4/5 lg:text-center">
        <h1 className="heading font-raleway lg:w-4/5">{heading}</h1>
        <p className="subheading text-gray-800 dark:text-white lg:w-4/5">{subheading}</p>
      </div>
      <div className="mt-10 lg:py-10">
        <img src={src} alt="bg-about" className=" h-[215px] w-full rounded-xl object-cover lg:h-[500px]" />
      </div>
    </div>
  )
}

export default HeroSectionAbout
