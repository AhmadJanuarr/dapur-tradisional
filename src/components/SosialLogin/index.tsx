import { Button } from "../ui/button"

type SosialLoginButtonProps = {
  icon: React.ReactNode
  provider: "Google" | "Github"
}

export function SosialLoginButton({ icon, provider }: SosialLoginButtonProps) {
  return (
    <Button className="w-full" variant={"outline"}>
      {icon}
      {provider}
    </Button>
  )
}
