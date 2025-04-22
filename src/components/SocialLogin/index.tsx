import { SocialLoginButtonProps } from "@/types/components.type"
import { Button } from "../ui/button"

export const SocialLoginButton = ({ icon, provider }: SocialLoginButtonProps) => {
  return (
    <Button className="w-full rounded-sm" variant={"outline"} disabled>
      {icon}
      {provider}
    </Button>
  )
}
