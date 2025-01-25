export function HeadingAuth({ heading, description }: { heading: string; description: string }) {
  return (
    <div className="my-5 flex flex-col items-center justify-center text-center">
      <img src="/logo/logo-t.png" alt="logo" className="w-14" />
      <h2 className="text-3xl font-bold">{heading}</h2>
      <p className="subheading-mobile mt-2 text-center md:w-2/3">{description}</p>
    </div>
  )
}
