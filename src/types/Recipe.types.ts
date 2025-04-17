export type Recipe = {
  id: number
  title: string
  description: string
  category: string
  image: string
  difficulty: string
  favorite?: string[]
  isFavorite: boolean
  nutrition: {
    calories: number
    protein: number
    fat: number
    carbs: number
  }
  ingredients: { id: number; name: string }[]
  steps: { id: number; description: string }[]
  tips: string
}
export type ApiResponse = {
  data: Recipe
}
