/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const WIDTH = {
  mainContent: 760,
  mainContentLg: 980,
  mainContentXl: 1200,
  asideAd: 230,
}

export default <Partial<Config>>{
  content: [
    '/components/**/*.{vue,js,ts}',
    '/layouts/**/*.vue',
    '/pages/**/*.vue',
    '/composables/**/*.{js,ts}',
    '/plugins/**/*.{js,ts}',
    '/utils/**/*.{js,ts}',
    '/App.{js,ts,vue}',
    '/app.{js,ts,vue}',
    '/Error.{js,ts,vue}',
    '/error.{js,ts,vue}',
    '/app.config.{js,ts}',
    'docs/content/**/*.md',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: {
          primary: 'rgba(var(--primary-background))',
          secondary: 'rgba(var(--secondary-background))',
          tertiary: 'rgba(var(--tertiary-background))',
        },
        enabled: 'rgba(var(--enabled))',
        disabled: 'rgba(var(--disabled))',
        'icon-enabled': 'rgba(var(--icon-enabled))',
        'icon-disabled': 'rgba(var(--icon-disabled))',
        'primary-accent': 'rgba(var(--primary-accent))',
        'secondary-accent': 'rgba(var(--secondary-accent))',
        'tertiary-accent': 'rgba(var(--tertiary-accent))',
        'quaternary-accent': 'rgba(var(--quaternary-accent))',
        'positive-accent': 'rgba(var(--positive-accent))',
        'negative-accent': 'rgba(var(--negative-accent))',
        content: 'rgba(var(--content))',
        'sub-content': 'rgba(var(--sub-content))',
        'info-content': 'rgba(var(--info-content))',
        'category-content': 'rgba(var(--category-content))',
        card: 'rgba(var(--card))',
      },
      width: {
        'main-content': `${WIDTH.mainContent}px`,
        'aside-ad': `${WIDTH.asideAd}px`,
      },
      maxWidth: {
        'main-content': `${WIDTH.mainContent}px`,
        'main-content-lg': `${WIDTH.mainContentLg}px`,
        'main-content-xl': `${WIDTH.mainContentXl}px`,
      },
      backgroundImage: {
        'linear-gradient-light':
          'linear-gradient(180deg, #f2f4ff 40%, #fff 100%)',
        'linear-gradient-dark':
          'linear-gradient(180deg, #0e1726 40%, #0b1120 100%)',
      },
      gridTemplateColumns: {
        blog: `${WIDTH.mainContent}px`,
        'blog-lg': `1fr ${WIDTH.mainContent}px 1fr`,
      },
      aspectRatio: {
        'ad-unit-img': '23 / 31',
      },
    },
  },
}
