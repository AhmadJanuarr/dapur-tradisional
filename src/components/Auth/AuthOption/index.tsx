import { Link } from "react-router-dom"
import { Github, Mail } from "lucide-react"
import { SosialLoginButton } from "../../SosialLogin"
import { Divider } from "../../Divide/Divider"

export function AuthOption({ linkText, linkTo }: { linkText: string; linkTo: string }) {
  return (
    <div className="space-y-4">
      <Divider text="Atau masuk dengan" />
      <SosialLoginButton provider="Google" icon={<Mail />} />
      <SosialLoginButton provider="Github" icon={<Github />} />

      <p className="text-center text-[0.8rem]">
        {linkText}{" "}
        <Link to={`/${linkTo}`} className="text-blue-500">
          {linkTo}
        </Link>
      </p>
    </div>
  )
}
