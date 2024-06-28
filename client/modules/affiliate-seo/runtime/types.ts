import type {
  UseHeadInput,
  UseSeoMetaInput,
  UseHeadOptions,
  MergeHead,
} from '@unhead/vue'

export interface ModuleOptions {
  locale?: 'en'
  dataset?: string
}

export type NuxtHeadInput = UseHeadInput<MergeHead>
export type NuxtSeoMetaInput = UseSeoMetaInput
export type NuxtHeadOptions = UseHeadOptions

export interface AffiliateSeoResponse {
  headInput?: NuxtHeadInput | null
  seoMetaInput?: NuxtSeoMetaInput | null
  headOptions?: NuxtHeadOptions | null
  seoMetaOptions?: NuxtHeadOptions | null
}

export interface SeoArgs {
  slug: string
  options?: ModuleOptions
}
