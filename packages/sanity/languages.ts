const languages = [
  { id: 'en', title: 'English', icon: 'es', isDefault: true },
  { id: 'es', title: 'Spanish', icon: 'es' },
]

const i18n = {
  languages,
  base: languages.find(item => item.isDefault)?.id || 'en',
}

export { i18n }
