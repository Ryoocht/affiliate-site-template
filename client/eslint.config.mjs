import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.ts', '**/*.js', '**/*.vue', '**/*.mjs'],
  rules: {
    '@typescript-eslint/triple-slash-reference': 'error',
  },
})
