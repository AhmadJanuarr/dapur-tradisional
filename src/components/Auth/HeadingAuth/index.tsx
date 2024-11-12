export function HeadingAuth({ heading, description }: { heading: string; description: string }) {
  return (
    <div className="my-5 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold">{heading}</h2>
      <p className="mt-2 text-center text-[0.8rem] md:w-2/3 md:text-[1rem]">{description}</p>
    </div>
  )
}
