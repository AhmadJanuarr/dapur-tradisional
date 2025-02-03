type TestimonialCardProps = {
  img: string
  name: string
  role: string
  desc: string
}
const TestimonialCard = ({ img, name, role, desc }: TestimonialCardProps) => {
  return (
    <div className="subheading mr-5 flex w-[350px] flex-col gap-4 rounded-lg bg-slate-50 p-5 lg:h-[180px] lg:w-[500px]">
      <div className="flex items-center gap-4">
        <img src={img} alt={name} className="h-10 w-10 rounded-full bg-black" />
        <div className="flex flex-col">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-500">{desc}</p>
    </div>
  )
}

export default TestimonialCard
