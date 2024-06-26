import {
  addImportsDir,
  addRouteMiddleware,
  createResolver,
  defineNuxtModule,
} from 'nuxt/kit'
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
    const { resolve } = createResolver(import.meta.url)

    addImportsDir(resolve('./runtime/composables'))
    addImportsDir(resolve('./runtime/utils'))

    addRouteMiddleware({
      name: 'affiliate-seo',
      path: resolve('./runtime/middleware/seo.ts'),
      global: true,
    })

    console.log({ initialOptions })
    console.log({ nuxt })
  },
})
