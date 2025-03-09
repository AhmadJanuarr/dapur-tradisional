import FormFieldContact from "@/components/FormField/FormFieldContact"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="heading font-semibold ">Hubungi Kami</h1>
      <div className="subheading flex flex-col gap-3 text-gray-600 dark:text-white">
        <p>
          Kami siap membantu Anda dengan segala pertanyaan mengenai resep makanan tradisional. Jangan ragu untuk
          menghubungi kami!
        </p>
        <h3 className="font-semibold text-black dark:text-white">Informasi Kontak</h3>
        {[
          { href: "mailto:ahmadjanuaramri2015@gmail.com", label: "ahmadjanuaramri2015@gmail.com" },
          { href: "tel:+6289630507889", label: "+62 896-3050-7889" },
        ].map(({ href, label }) => (
          <p key={label}>
            <a href={href} className="underline">
              {label}
            </a>
          </p>
        ))}

        <p className="cursor-pointer underline">Dukungan Pelanggan</p>
      </div>
    </div>
  )
}

const LeftSideInformation = () => {
  return (
    <div className="flex flex-col justify-center pr-10 lg:w-[60%]">
      <ContactInfo />
    </div>
  )
}

const RightContactCard = () => {
  return (
    <Card className="dark:bg-darkBackground mt-10 border bg-white shadow-none lg:mt-0 lg:w-[40%]">
      <CardHeader className="pb-8">
        <CardTitle className="pb-2 lg:text-[3rem]">Kirim Pesan</CardTitle>
        <CardDescription className="text-[0.8rem] dark:text-white lg:text-[1rem]">
          Kami siap membantu Anda dengan.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormFieldContact />
      </CardContent>
      <CardFooter>
        <div className="w-full text-center text-[0.8rem] text-gray-500 dark:text-white lg:text-[1rem]">
          Pesan Anda akan segera diproses setelah Anda setuju dengan{" "}
          <strong className="text-black dark:text-white">syarat</strong> dan{" "}
          <strong className="text-black dark:text-white">kebijakan kami</strong>.
        </div>
      </CardFooter>
    </Card>
  )
}

const HeroSectionContact = () => {
  return (
    <section className="flex w-full py-20 md:py-0">
      <div className="mx-auto my-4 flex w-full flex-col px-5 md:flex-row lg:my-36 lg:w-4/5">
        <LeftSideInformation />
        <RightContactCard />
      </div>
    </section>
  )
}

export default HeroSectionContact
