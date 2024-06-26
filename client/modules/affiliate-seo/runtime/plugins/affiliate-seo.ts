export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'SEO',
    (to, from) => {
      console.log('global middleware that runs on every route change')
      console.log({ to })
      console.log({ from })
    },
    { global: true },
  )
})
