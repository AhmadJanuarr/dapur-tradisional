export type Recipe = {
  id: number
  title: string
  description: string
  category: string
  image: string
  difficulty: string
  nutrition: {
    calories: number
    protein: number
    fat: number
    carbohydrate: number
  }
  ingredients: { id: number; name: string }[]
  steps: { id: number; description: string }[]
  tips: string
}
export type ApiResponse = {
  data: Recipe
}
