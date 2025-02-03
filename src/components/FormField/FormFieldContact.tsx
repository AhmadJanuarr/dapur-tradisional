import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Contact, Mail } from "lucide-react"
import React from "react"
import { Textarea } from "../ui/textarea"

type FieldProps = {
  icon?: React.ReactNode
  placeholder: string
  type: string
}

type NameFieldProps = {
  placeholder: string[]
}
const FieldInput = ({ icon, placeholder, type }: FieldProps) => {
  return (
    <div className="relative gap-2">
      {icon && <span className="absolute left-7 top-1/2 -translate-y-1/2 transform text-gray-500">{icon}</span>}
      <Input
        placeholder={placeholder}
        type={type}
        className={`rounded-full px-6 py-6 text-gray-500 placeholder:text-[0.8rem] ${icon ? "pl-16" : ""} shadow-none`}
      ></Input>
    </div>
  )
}

const NameFieldInput = ({ placeholder }: NameFieldProps) => {
  return (
    <div className="flex w-full flex-col gap-3 lg:flex-row">
      {placeholder.map((item, index) => (
        <Input
          key={index}
          placeholder={item}
          className="rounded-full px-6 py-6 text-gray-500 shadow-none placeholder:text-[0.8rem]"
        />
      ))}
    </div>
  )
}

const FormFieldContact = () => {
  return (
    <form>
      <div className="subheading flex w-full flex-col gap-3 font-inter">
        <NameFieldInput placeholder={["Nama Depan", "Nama Belakang"]} />
        <FieldInput icon={<Mail size={20} />} placeholder="Email" type="email" />
        <FieldInput icon={<Contact size={20} />} placeholder="No Handphone" type="text" />
        <Textarea
          placeholder="Bagaimana kami bisa membantu?"
          rows={5}
          className="rounded-xl px-3 py-5 font-inter text-gray-500 placeholder:text-[0.8rem]"
        />
        <Button type="submit" variant="default" className="py-5">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default FormFieldContact
