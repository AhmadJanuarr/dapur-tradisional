import TetimonialsData from "@/data/testimonials.data"
import HeadingSection from "./HeadingSection"
import TestimonialCard from "@/components/Card/TestimonialCard"
import { ArrowLeft, ArrowRight } from "lucide-react"

const TestimonialSection = () => {
  return (
    <section className="relative pt-14 lg:py-20">
      <HeadingSection
        heading="Testimonial"
        subheading="Kami mengutamakan kualitas, mereka merasakan manfaatnya!"
        description="Kami telah membantu banyak klien dalam berbagai proyek, mulai dari pembuatan website, landing page, e-commerce, desain grafis, hingga pengembangan source code dan joki tugas. Inilah pengalaman mereka bekerja bersama kami!"
      />
      <img
        src="/elements/element-blur.png"
        alt="element-blur"
        className="absolute -top-20 right-20 -z-10 hidden lg:right-0 lg:top-0 lg:block lg:w-[800px]"
      />
      <div className="grid grid-cols-1 gap-5 py-2 md:py-2 lg:grid-cols-2">
        {TetimonialsData.slice(0, 2).map((item) => (
          <TestimonialCard key={item.id} name={item.name} desc={item.desc} date={item.date} stars={item.stars} />
        ))}
      </div>
      <div className="flex justify-between pt-2 lg:items-center">
        <p className="pl-3 text-[11px] lg:text-[16px]">Peringkat 4.9 berdasarkan 1.234 ulasan</p>
        <div className="flex gap-3 pt-8 lg:gap-5">
          <div className="group rounded-full border p-2 hover:bg-[#f97316] dark:border-white lg:p-4">
            <ArrowLeft className="group-hover:text-white" />
          </div>
          <div className="group rounded-full border p-2 hover:bg-[#f97316] dark:border-white lg:p-4">
            <ArrowRight className="group-hover:text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
