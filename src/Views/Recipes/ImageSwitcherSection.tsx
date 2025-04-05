import { useState } from "react"

const data = [
  {
    title: "Ayam Betutu",
    description: "Ayam khas Bali yang dibumbui rempah-rempah dan dimasak dengan cara dipanggang atau dikukus.",
    image: "/elements/Ayam betutu.png",
    category: "Makanan Berat",
  },
  {
    title: "Soto Betawi",
    description: "Soto khas Jakarta dengan kuah santan dan daging sapi yang lezat.",
    image: "/elements/Soto betawi.png",
    category: "Makanan Tradisional",
  },
  {
    title: "Rendang",
    description: "Daging sapi yang dimasak dengan santan dan rempah-rempah khas Minang.",
    image: "/elements/Tahu gejrot.png",
    category: "Makanan Khas Padang",
  },
]

const ImageDisplay = ({ image }: { image: string }) => (
  <div className="absolute left-1/2 -z-20 flex -translate-x-1/2 items-center justify-center rounded-full bg-white p-3 shadow-2xl lg:p-8">
    <img src={image} alt="selected-food" className="z-10 w-[200px] transition-all duration-300 lg:w-[450px]" />
  </div>
)

const DescriptionSection = ({ title, description }: { title: string; description: string }) => (
  <div className="z-20 w-1/4 min-w-0 flex-grow pr-32 lg:px-20">
    <h1 className="w-1/2 font-prata text-[2rem] leading-none lg:text-[6rem]">{title}</h1>
    <div className="flex gap-5 py-10">
      <hr className="w-1/3 border" />
      <p className="hidden w-2/3 lg:block">{description}</p>
    </div>
  </div>
)

const NavigationButtons = ({ currentIndex, onSelect }: { currentIndex: number; onSelect: (index: number) => void }) => (
  <div className="absolute right-0 z-20 w-28 overflow-hidden px-2 lg:relative lg:w-1/3 lg:flex-grow lg:pl-96">
    <div className="space-y-2 py-8">
      {data.map((item, index) => (
        <button
          key={index}
          className={`flex w-full items-center gap-4 rounded-bl-full rounded-tl-full  px-2 py-2 shadow-lg transition-all duration-300 lg:px-6 lg:py-4 ${
            currentIndex === index ? "scale-x-105 bg-[#ea580c] text-white" : "bg-white text-black"
          }`}
          onClick={() => onSelect(index)}
        >
          <img src={item.image} alt={item.title} className="size-14 rounded-full lg:size-24" />
          <div className="hidden lg:block">
            <p className="text-sm font-light">{item.category}</p>
            <h5 className="text-[1.1rem] font-semibold">{item.title}</h5>
          </div>
        </button>
      ))}
    </div>
  </div>
)

const MobileDescription = ({ currentIndex }: { currentIndex: number }) => (
  <div className="absolute -bottom-28 w-full text-center lg:hidden">
    <p className="text-sm font-light">{data[currentIndex].description}</p>
  </div>
)

const ImageSwitcherSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="mb-52 mt-24 w-full lg:mt-40">
      <div className="relative flex w-full items-center justify-between ">
        <DescriptionSection title={data[currentIndex].title} description={data[currentIndex].description} />
        <ImageDisplay image={data[currentIndex].image} />
        <NavigationButtons currentIndex={currentIndex} onSelect={setCurrentIndex} />
        <MobileDescription currentIndex={currentIndex} />
      </div>
    </section>
  )
}

export default ImageSwitcherSection
