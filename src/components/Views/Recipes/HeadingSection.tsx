export default function HeadingSection({ heading, description }: { heading: string; description: string }) {
  return (
    <section className="w-full pb-10 pt-24">
      <div className="w-full">
        <h1 className="text-5xl font-bold">{heading}</h1>
        <p className="mt-2">{description}</p>
        {/* {filter && (
            <div className="flex w-full items-center justify-center">

            </div>
        )} */}
      </div>
    </section>
  )
}
