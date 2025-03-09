export type MenuItemSidebar = {
  title: string
  icon: React.ReactNode
  onClick?: () => void
}

export type NavListProps = {
  to: string
  label: string
  icon: React.ReactNode
  isActive: boolean
  onClick: () => void
}
