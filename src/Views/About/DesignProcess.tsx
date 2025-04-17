import ProcessCard from "@/components/Card/ProcessCard"
import HeadingSection from "./HeadingSection"
import { DesignData } from "@/data/design.data"

const DesignProcess = () => {
  return (
    <section className="py-10 pt-20">
      <HeadingSection
        heading="Our Process"
        description="Pendekatan sistematis untuk menciptakan pengalaman digital yang luar biasa."
      />
      <div className="grid gap-8 py-10 lg:grid-cols-3 lg:gap-5">
        {DesignData.map((data, index) => (
          <ProcessCard key={data.id} index={index + 1} title={data.title} desc={data.desc} />
        ))}
      </div>
    </section>
  )
}

export default DesignProcess
