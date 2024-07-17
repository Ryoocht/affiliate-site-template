import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.ts', '**/*.js', '**/*.vue', '**/*.mjs'],
  rules: {
    '@typescript-eslint/unified-signatures': [
      'error',
      { ignoreDifferentlyNamedParameters: true },
    ],
    'vue/html-self-closing': [
      'warn',
      { html: { void: 'always', normal: 'never', component: 'always' } },
    ],
    '@typescript-eslint/triple-slash-reference': 'error',
    'vue/no-deprecated-slot-attribute': 'off',
  },
})
