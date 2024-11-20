export function Divider({ text }: { text?: string }) {
  return (
    <div className="my-4 flex items-center">
      <div className="flex-grow border-t border-gray-400" />
      {text && <span className="mx-4 text-[0.8rem] text-gray-400">{text}</span>}
      <div className="flex-grow border-t border-gray-400" />
    </div>
  )
}
