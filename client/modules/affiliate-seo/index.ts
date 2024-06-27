import {
  addImportsDir,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'affiliate-seo',
    configKey: 'affiliateSeo',
    compatibility: {
      nuxt: '^3.11.x',
    },
  },
  defaults: {
    locale: 'en',
    dataset: 'production',
  },
  async setup() {
    const { resolve } = createResolver(import.meta.url)

    addImportsDir(resolve('./runtime/composables'))
    addImportsDir(resolve('./runtime/utils'))

    addPlugin({
      src: resolve('./runtime/plugins/affiliate-seo.ts'),
      mode: 'all',
    })
  },
})
