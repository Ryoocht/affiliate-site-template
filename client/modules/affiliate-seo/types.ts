import type {
  UseHeadInput,
  UseSeoMetaInput,
  UseHeadOptions,
  MergeHead,
} from '@unhead/vue'
export interface ModuleOptions {
  something?: boolean
}

export type NuxtHeadInput = UseHeadInput<MergeHead>
export type NuxtSeoMetaInput = UseSeoMetaInput
export type NuxtHeadOptions = UseHeadOptions

export interface AffiliateSeoResponse {
  headInput?: NuxtHeadInput
  seoMetaInput?: NuxtSeoMetaInput
  headOptions?: NuxtHeadOptions
  seoMetaOptions?: NuxtHeadOptions
}