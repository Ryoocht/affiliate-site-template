export interface ImageAsset {
  altText?: string | null
  assetId?: string | null
  assetUrl?: string | null
  caption?: string | null
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
