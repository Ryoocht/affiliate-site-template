export default function useTheme() {
  const colorMode = useColorMode()

  const isDark = computed({
    get() {
      return colorMode.value === 'dark'
    },
    set(value: boolean) {
      colorMode.preference = value ? 'dark' : 'light'
    },
  })

  function toggleTheme() {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme,
  }
}
