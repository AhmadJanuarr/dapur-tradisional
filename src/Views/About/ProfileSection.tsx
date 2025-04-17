type ProfileProps = {
  name: string
  role: string
  src: string
}

const ProfileSection = ({ name, role, src }: ProfileProps) => {
  return (
    <section className="relative flex w-full">
      <div className="w-full flex-col items-center justify-center rounded-[30px] bg-[#FFEDDF] py-8 lg:py-20">
        <div className="flex flex-col items-center justify-center gap-5 text-center dark:text-neutral-800">
          <h1 className="text-xl font-semibold lg:text-[40px]">Meet Our Team</h1>
          <p className="subheading py-3 text-gray-800">
            Individu-individu berbakat di balik proyek-proyek kami yang sukses
          </p>
        </div>
        <figure>
          <img src={src} alt={name} className="mx-auto w-[130px] rounded-full py-4 lg:w-[150px] lg:py-10" />
          <figcaption className="subheading flex flex-col gap-3 text-center dark:text-neutral-800 ">
            <h2 className="text-[0.9rem] lg:text-[24px]">{name}</h2>
            <p className="subheading text-gray-800">{role}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default ProfileSection
