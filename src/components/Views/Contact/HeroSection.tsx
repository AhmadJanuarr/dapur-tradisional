import FormFieldContact from "@/components/FormField/FormFieldContact"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const SupportData = [
  {
    title: "Dukungan Pelanggan",
    description:
      "Tim kami siap membantu Anda dengan pertanyaan atau kendala yang Anda hadapi seputar resep tradisional.",
  },
  {
    title: "Saran & Masukan",
    description:
      "Kami menghargai setiap masukan Anda untuk meningkatkan koleksi resep tradisional kami. Jangan ragu untuk berbagi ide dan pengalaman Anda!",
  },
  {
    title: "Kerja Sama & Media",
    description: "Untuk pertanyaan terkait kerja sama atau media, silakan hubungi kami di ahmadjanuar@gmail.com.",
  },
]

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="heading font-semibold">Hubungi Kami</h1>
      <div className="subheading flex flex-col gap-2 text-gray-600">
        <p>
          Kami siap membantu Anda dengan segala pertanyaan mengenai resep makanan tradisional. Jangan ragu untuk
          menghubungi kami!
        </p>
        <h3 className="font-semibold">Informasi Kontak</h3>
        <p>
          <a href="mailto:ahmadjanuaramri2015@gmail.com" className="underline">
            ahmadjanuaramri2015@gmail.com
          </a>
        </p>
        <p>
          <a href="tel:+6289630507889" className="underline">
            +62 896-3050-7889
          </a>
        </p>
        <p className="cursor-pointer underline">Dukungan Pelanggan</p>
      </div>
    </div>
  )
}

const SupportItem = ({ title, description }: { title: string; description: string }) => (
  <div className="subheading grid gap-4">
    <h3 className="font-semibold">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
)
const SupportSection = () => (
  <section className="mt-10 hidden gap-5 lg:flex">
    {SupportData.map((item, index) => (
      <SupportItem key={index} title={item.title} description={item.description} />
    ))}
  </section>
)

const LeftSideInformation = () => {
  return (
    <div className="flex flex-col justify-center pr-10 lg:w-[60%]">
      <ContactInfo />
      <SupportSection />
    </div>
  )
}

const RightContactCard = () => {
  return (
    <Card className="mt-10 rounded-3xl border-none shadow-none lg:mt-0 lg:w-[40%]">
      <CardHeader className="pb-8">
        <CardTitle className="pb-2 lg:text-[3rem]">Kirim Pesan</CardTitle>
        <CardDescription>Kami siap membantu Anda dengan.</CardDescription>
      </CardHeader>
      <CardContent>
        <FormFieldContact />
      </CardContent>
      <CardFooter>
        <div className="subheading w-full text-center text-gray-500 lg:text-[0.9rem]">
          Pesan Anda akan segera diproses setelah Anda setuju dengan <strong className="text-black">syarat</strong> dan{" "}
          <strong className="text-black">kebijakan kami</strong>.
        </div>
      </CardFooter>
    </Card>
  )
}

const HeroSectionContact = () => {
  return (
    <section className="flex w-full py-20 md:py-0" style={{ backgroundColor: "#D0E7D2" }}>
      <div className="mx-auto my-4 flex w-full flex-col px-5 md:flex-row lg:my-36 lg:w-4/5">
        <LeftSideInformation />
        <RightContactCard />
      </div>
    </section>
  )
}

export default HeroSectionContact
