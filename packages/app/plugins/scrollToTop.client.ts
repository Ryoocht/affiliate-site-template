export default defineNuxtPlugin(() => {
  const { $router } = useNuxtApp()
  $router.afterEach(() => {
    window.scrollTo(0, 0)
  })
})
