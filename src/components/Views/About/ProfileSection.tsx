type ProfileProps = {
  name: string
  role: string
  src: string
}

const ProfileSection = ({ name, role, src }: ProfileProps) => {
  return (
    <section className="flex w-full flex-col items-center justify-center py-20">
      <div className="dark:bg-darkBackground absolute z-10 mt-3 h-1/2 w-full bg-slate-50 lg:mt-2 lg:h-3/5"></div>
      <div className="z-20 text-center dark:text-white">
        <h1 className="text-xl font-semibold lg:text-3xl">Meet Our Team</h1>
        <p className="subheading py-3 text-gray-500">
          Individu-individu berbakat di balik proyek-proyek kami yang sukses
        </p>
      </div>
      <figure className="z-20">
        <img src={src} alt={name} className="mx-auto w-[150px] rounded-full py-4 lg:w-[250px] lg:py-12" />
        <figcaption className="subheading text-center dark:text-white">
          <h2 className="font-semibold">{name}</h2>
          <p className="text-gray-500 ">{role}</p>
        </figcaption>
      </figure>
    </section>
  )
}

export default ProfileSection
