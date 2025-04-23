import { useState } from "react"

interface PasswordFieldsProps {
  password: {
    currentPassword: string
    newPassword: string
  }
  setPassword: React.Dispatch<
    React.SetStateAction<{
      currentPassword: string
      newPassword: string
    }>
  >
}

export const PasswordFields = ({ password, setPassword }: PasswordFieldsProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="subheading flex flex-col justify-between gap-2 lg:flex-row">
      <div className="flex gap-2">
        <div className="flex flex-col gap-5">
          <label htmlFor="password" className="text-gray-800 dark:text-slate-200">
            Password sekarang
          </label>
          <input
            onChange={(e) => setPassword({ ...password, currentPassword: e.target.value })}
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="*********"
            className="h-10 w-full rounded-lg border-2 border-gray-300 px-4 outline-none focus:border-blue-500 dark:text-black dark:placeholder:text-black lg:h-12"
          />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="new-password" className="text-gray-800 dark:text-slate-200">
            Password baru
          </label>
          <input
            onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
            required
            type={showPassword ? "text" : "password"}
            id="new-password"
            placeholder="*********"
            className="h-10 w-full rounded-lg border-2 border-gray-300 px-4 outline-none focus:border-blue-500 dark:text-black dark:placeholder:text-black lg:h-12"
          />
        </div>
      </div>
      <button
        className="cursor-pointer pb-5 text-left font-semibold underline"
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
      </button>
    </div>
  )
}
