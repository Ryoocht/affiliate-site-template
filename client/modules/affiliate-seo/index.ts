import { createResolver, defineNuxtModule } from 'nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import type { ModuleOptions } from './types'

export default defineNuxtModule({
  meta: {
    name: 'affiliate-seo',
    configKey: 'affiliateSeo',
    compatibility: {
      nuxt: '^3.11.x',
    },
  },
  defaults: {
    something: false,
  },
  async setup(initialOptions: ModuleOptions, nuxt: Nuxt) {
    const resolver = createResolver(import.meta.url)
    console.log({ initialOptions })
    console.log({ nuxt })
    console.log({ resolver })
  },
})
