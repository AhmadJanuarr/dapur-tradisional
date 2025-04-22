import axios from "axios"

export const AxiosWithAuth = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

AxiosWithAuth.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)
