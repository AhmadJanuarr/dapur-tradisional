import { User } from "@/types/auth.types"

export const saveUserToLocalStorage = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user))
}

export const getUserFromLocalStorage = () => {
  const data = localStorage.getItem("user")
  return data ? JSON.parse(data) : null
}
export const clearAuthStorage = () => {
  localStorage.removeItem("accessToken")
  localStorage.removeItem("refreshToken")
  localStorage.removeItem("user")
}
