import type { NuxtLinkProps } from '#app'
import type { BaseCarousel } from '#components'
import type { RouterLinkProps } from 'vue-router'

export type BaseCarouselInstance = InstanceType<typeof BaseCarousel>

export interface Provider {
  title: string
  imageName: string
  link: string
  width: string
}

export interface BlogTitle {
  title: string | null
  excerpt: string | null
  timeToRead: number | null
  releaseTime: string | null
  categories:
    | ({
        title: string | null
        slug: string | null
      } | null)[]
    | null
}

export type NavMenuItem = {
  label: string
  icon: string | undefined
} & Pick<RouterLinkProps, 'to'> &
  Pick<NuxtLinkProps, 'prefetch' | 'noPrefetch'>

export interface ImageAsset {
  altText?: string | null
  assetId?: string | null
  assetUrl?: string | null
  caption?: string | null
}
