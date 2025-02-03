import ProcessCard from "@/components/Card/ProcessCard"
import HeadingSection from "./HeadingSection"
import { DesignData } from "@/data/design.data"

const DesignProcess = () => {
  return (
    <section className="py-10">
      <HeadingSection
        heading="Our Process"
        subHeading="Pendekatan sistematis untuk menciptakan pengalaman digital yang luar biasa."
      />
      <div className="flex flex-col gap-5 pt-10 md:flex-row">
        {DesignData.map((data, index) => (
          <ProcessCard key={data.id} index={index + 1} title={data.title} desc={data.desc} />
        ))}
      </div>
    </section>
  )
}

export default DesignProcess
