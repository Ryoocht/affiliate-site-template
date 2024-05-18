/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const WIDTH = {
  mainContent: '760px',
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
    fontFamily: {
      playfair: ['Playfair Display', ...defaultTheme.fontFamily.sans],
      mont: ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        theme: {
          '50': '#f5f7fa',
          '100': '#e9eff5',
          '200': '#cfdce8',
          '300': '#a5bfd4',
          '400': '#749dbc',
          '500': '#5281a5',
          '600': '#3f678a',
          '700': '#345470',
          '800': '#2e475d',
          '900': '#2b3e4f',
          '950': '#1c2835',
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
        'main-content': WIDTH.mainContent,
      },
      maxWidth: {
        'main-content': WIDTH.mainContent,
      },
      backgroundImage: {
        'linear-gradient-light':
          'linear-gradient(180deg, #f2f4ff 40%, #fff 100%)',
        'linear-gradient-dark':
          'linear-gradient(180deg, #0e1726 40%, #0b1120 100%)',
      },
      gridTemplateColumns: {
        blog: WIDTH.mainContent,
        'blog-lg': `1fr ${WIDTH.mainContent} 1fr`,
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
