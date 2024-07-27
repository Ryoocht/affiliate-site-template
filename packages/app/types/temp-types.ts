type ThemeKeys = 'light' | 'dark'

export type ThemedColor = Record<ThemeKeys, string>
export interface Blog {
  slug: string
  title: string
  excerpt: string
  src: string
  readTime: number
  variation: string
}

export interface CTA {
  label: string
  link: string
  textColor?: ThemedColor
  bgColor?: ThemedColor
}

export interface PromotionBannerItem {
  src: string
  icon?: string
  cta: CTA
}
