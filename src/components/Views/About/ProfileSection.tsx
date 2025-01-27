import HeadingSection from "./HeadingSection"

type ProfileProps = {
  name: string
  role: string
}

const ProfileSection = ({ name, role }: ProfileProps) => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-20">
      <div className="absolute w-full mt-18 -z-10 h-3/5 bg-slate-50"></div>
      <HeadingSection
        heading="Meet Our Team"
        subHeading="Individu-individu berbakat di balik proyek-proyek kami yang sukses"
      />
      <figure>
        <img src="/img/user.png" alt="user" className="w-[250px]  rounded-full py-12" />
        <figcaption className="text-center subheading">
          <h2 className="font-semibold">{name}</h2>
          <p className="text-gray-500">{role}</p>
        </figcaption>
      </figure>
    </section>
  )
}

export default ProfileSection
