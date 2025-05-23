import { Link } from "react-router-dom"
import { Github, Mail } from "lucide-react"
import { SocialLoginButton } from "@/components/SocialLogin"
import { Divider } from "@/components/Divide/Divider"
import { AuthOptionProps } from "@/types/components.type"

export const AuthOption = ({ linkText, linkTo }: AuthOptionProps) => {
  return (
    <div className="space-y-4">
      <Divider text="Atau masuk dengan" />
      <SocialLoginButton provider="Google" icon={<Mail />} />
      <SocialLoginButton provider="Github" icon={<Github />} />
      <p className="text-center text-[0.8rem]">
        {linkText}
        <Link to={`/auth/${linkTo}`} className="text-blue-500">
          {linkTo}
        </Link>
      </p>
    </div>
  )
}
