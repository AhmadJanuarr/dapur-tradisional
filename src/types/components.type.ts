export type AuthOptionProps = {
  linkText: string
  linkTo: string
}

export type HeadingAuthOptionProps = {
  heading: string
  description: string
}

export type BookmarksButtonProps = {
  isFavorite?: boolean
  onClickFavorite: () => void
}

export type InspirationCardProps = {
  img: string
  title: string
  category: string
  description: string
  difficulty: string
  isFavorite?: boolean
  onClickViewDetail: () => void
  onClickFavorite: () => void
}

export type ProcessCardProps = {
  index: number
  title: string
  desc: string
}

export type RecipeCardProps = {
  img: string
  title: string
  category: string
  isFavorite?: boolean
  onClickViewDetail: () => void
  onClickFavorite: () => void
}

export type SocialLoginButtonProps = {
  icon: React.ReactNode
  provider: "Google" | "Github"
}

export type TestimonialCardProps = {
  name: string
  desc: string
  date: string
  stars: number
}
