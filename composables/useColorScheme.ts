import type { ThemedColor } from '~/types/temp-types'

export function useColorScheme(colors?: ThemedColor) {
  const colorScheme = computed(() => {
    const light = colors?.light || 'white'
    const dark = colors?.dark || 'black'
    return `light-dark(${light}, ${dark})`
  })

  return colorScheme
}
