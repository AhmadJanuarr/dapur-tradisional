import TetimonialsData from "@/data/testimonials.data"
import HeadingSection from "./HeadingSection"
import TestimonialCard from "@/components/Card/TestimonialCard"
import Marquee from "react-fast-marquee"

const TestimonialSection = () => {
  return (
    <section className="py-10">
      <HeadingSection heading="Testimonial" subHeading="Apa kata mereka tentang kami." />
      <div className="relative overflow-x-auto py-2 md:py-10">
        <Marquee className="absolute flex gap-4" pauseOnHover>
          {TetimonialsData.map((item) => (
            <TestimonialCard key={item.id} name={item.name} desc={item.desc} role={item.role} img={item.img} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default TestimonialSection
