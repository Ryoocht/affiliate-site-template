import stylistic from '@stylistic/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    arrowParens: 'avoid',
  }),
)
