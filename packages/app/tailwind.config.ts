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
        'light-theme': {
          '50': '#ecf0ff',
          '100': '#dde4ff',
          '200': '#c2ccff',
          '300': '#9caaff',
          '400': '#757cff',
          '500': '#4945ff',
          '600': '#4936f5',
          '700': '#3e2ad8',
          '800': '#3325ae',
          '900': '#2d2689',
          '950': '#1c1650',
        },
        'dark-theme': {
          '50': '#f3f5fc',
          '100': '#e6ebf8',
          '200': '#c7d5f0',
          '300': '#96b2e3',
          '400': '#5e8bd2',
          '500': '#396bbe',
          '600': '#2953a0',
          '700': '#224282',
          '800': '#203a6c',
          '900': '#1f325b',
          '950': '#0b1120',
        },
        background: {
          light: '#ffffff',
          dark: '#0b1120',
        },
        navbar: {
          light: '#f2f4ff',
          dark: '#0e1726',
        },
        progress: {
          light: '#bfdbf7',
          dark: '#16425b',
        },
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
