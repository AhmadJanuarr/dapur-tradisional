/* eslint-disable @typescript-eslint/no-explicit-any */

export type User = {
  id: number
  name: string
  email?: string
  role?: string
  avatar?: string
}

export interface AuthProviderProps {
  children: React.ReactNode
}

export interface JwtPayloadWithRole {
  exp: number
  role: string
}

export type AuthContextProps = {
  user: User | null
  state: any
  dispatch: React.Dispatch<any>
  login: (data: { email: string; password: string }) => void
  signup: (data: { name: string; email: string; password: string }) => void
  logout: () => void
  updateName: (newName: string) => void
  updateEmail: (newEmail: string) => void
  updatePassword: (newPass: string, currentPass: string) => void
  deleteUser: () => void
}
