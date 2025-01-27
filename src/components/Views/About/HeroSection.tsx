type HeroSectionAboutProps = {
  heading: string
  subheading: string
}
const HeroSectionAbout = ({ heading, subheading }: HeroSectionAboutProps) => {
  return (
    <div className="lg:mt-28">
      <div className="flex flex-col items-center justify-center w-4/5 mx-auto text-center">
        <h1 className="font-semibold heading lg:w-2/3">{heading}</h1>
        <p className="w-4/5 mt-5 font-light text-gray-500 ">{subheading}</p>
      </div>
      <div className="py-28">
        <img src="/img/bg-about.jpg" alt="bg-about" className="w-full rounded-xl " />
      </div>
    </div>
  )
}

export default HeroSectionAbout
