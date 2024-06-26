export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'test',
    () => {
      console.log('global middleware that runs on every route change')
    },
    { global: true },
  )
})
