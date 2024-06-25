import type { ModuleOptions } from './runtime/types'
import {
  addImportsDir,
  addPlugin,
  addServerHandler,
  createResolver,
  defineNuxtModule,
} from 'nuxt/kit'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxt/affiliate-seo',
    configKey: 'affiliateSeo',
    compatibility: {
      nuxt: '^3.11.x',
    },
  },
  defaults: {
    locale: 'en',
    dataset: 'production',
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addImportsDir(resolve('./runtime/composables'))
    addImportsDir(resolve('./runtime/utils'))
    addServerHandler({
      route: '/api/sanity-seo',
      handler: resolve('./runtime/server/api/sanity-seo.get.ts'),
    })

    addPlugin({
      src: resolve('./runtime/plugins/affiliate-seo.ts'),
      mode: 'all',
    })

    nuxt.options.runtimeConfig.affiliateSeo = { ...options }
  },
})

declare module '@nuxt/schema' {
  interface RuntimeConfig {
    affiliateSeo: ModuleOptions
  }
}
