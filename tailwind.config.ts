/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  content: [
    `/components/**/*.{vue,js,ts}`,
    `/layouts/**/*.vue`,
    `/pages/**/*.vue`,
    `/composables/**/*.{js,ts}`,
    `/plugins/**/*.{js,ts}`,
    `/utils/**/*.{js,ts}`,
    `/App.{js,ts,vue}`,
    `/app.{js,ts,vue}`,
    `/Error.{js,ts,vue}`,
    `/error.{js,ts,vue}`,
    `/app.config.{js,ts}`,
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      playfair: ['Playfair Display', 'sans-serif'],
      mont: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: colors.green,
      },
    },
  },
}
