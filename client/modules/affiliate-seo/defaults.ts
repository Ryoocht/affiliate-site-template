import type {
  AffiliateSeoResponse,
  NuxtHeadInput,
  NuxtHeadOptions,
  NuxtSeoMetaInput,
} from './types'

export const defaultHeadInput: NuxtHeadInput = {
  title: 'Default Title',
  meta: [{ name: 'description', content: 'Default description' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
}

export const defaultSeoMetaInput: NuxtSeoMetaInput = {
  ogTitle: 'Default Open Graph Title',
  ogDescription: 'Default Open Graph Description',
  ogImage: '/default-image.png',
}

export const defaultHeadOptions: NuxtHeadOptions = {}

export const defaultSeoMetaOptions: NuxtHeadOptions = {}

export const defaults: AffiliateSeoResponse = {
  headInput: defaultHeadInput,
  headOptions: defaultHeadOptions,
  seoMetaInput: defaultSeoMetaInput,
  seoMetaOptions: defaultSeoMetaOptions,
}
