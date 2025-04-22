import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "../ui/textarea"

type FieldProps = {
  label: string
  type?: string
  placeholder?: string
}

type NameFieldProps = {
  fields: FieldProps[]
}

const FieldInput = ({ label, type, placeholder }: FieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        className="px-6 py-6 text-gray-500 shadow-none dark:border-white dark:text-white dark:placeholder:text-white"
      />
    </div>
  )
}

const NameFieldInput = ({ fields }: NameFieldProps) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {fields.map((item, index) => (
        <div key={index} className="flex flex-col gap-3">
          <label>{item.label}</label>
          <Input
            placeholder={item.placeholder}
            className="px-6 py-6 text-gray-500 shadow-none dark:border-white dark:text-white dark:placeholder:text-white"
          />
        </div>
      ))}
    </div>
  )
}

export const FormFieldContact = () => {
  return (
    <form>
      <div className="subheading font-inter flex w-full flex-col gap-6">
        <NameFieldInput
          fields={[
            { label: "Nama depan", placeholder: "John" },
            { label: "Nama belakang", placeholder: "Doe" },
          ]}
        />
        <FieldInput label="Email" type="email" placeholder="you@example.com" />
        <div className="flex flex-col gap-3">
          <label className="font-inter">Pesan</label>
          <Textarea
            placeholder="Masukkan pesan Anda"
            rows={5}
            className="font-inter rounded-md px-6 py-5 text-gray-500 dark:border-white dark:text-white dark:placeholder:text-white"
          />
        </div>
        <Button type="submit" variant="default" className="rounded-md py-5 font-semibold">
          Kirim pesan
        </Button>
      </div>
    </form>
  )
}
