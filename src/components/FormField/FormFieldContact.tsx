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
      {icon && (
        <span className="absolute left-7 top-1/2 -translate-y-1/2 transform text-gray-500 dark:text-white">{icon}</span>
      )}
      <Input
        placeholder={placeholder}
        type={type}
        className={`px-6 py-6 text-gray-500 placeholder:text-[1rem] dark:text-white dark:placeholder:text-white ${icon ? "pl-16" : ""} shadow-none`}
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
          className="px-6 py-6 text-gray-500 shadow-none placeholder:text-[1rem] dark:text-white dark:placeholder:text-white "
        />
      ))}
    </div>
  )
}

const FormFieldContact = () => {
  return (
    <form>
      <div className="subheading font-inter flex w-full flex-col gap-3">
        <NameFieldInput placeholder={["Nama Depan", "Nama Belakang"]} />
        <FieldInput icon={<Mail size={20} />} placeholder="Email" type="email" />
        <FieldInput icon={<Contact size={20} />} placeholder="No Handphone" type="text" />
        <Textarea
          placeholder="Bagaimana kami bisa membantu?"
          rows={5}
          className="font-inter rounded-md px-3 py-5 text-gray-500 placeholder:text-[1rem] dark:text-white dark:placeholder:text-white"
        />
        <Button type="submit" variant="default" className="rounded-md py-5">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default FormFieldContact
