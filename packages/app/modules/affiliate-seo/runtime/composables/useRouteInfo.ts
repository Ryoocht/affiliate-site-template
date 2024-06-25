import type { RouteLocationNormalized } from 'vue-router'

export default function useRouteInfo(route: RouteLocationNormalized) {
  const acceptableParams = ['slug']

  const slug = computed(() => {
    if (route.path === '/') return 'home'

    for (const param of acceptableParams) {
      if (route.params[param]) return route.params[param] as string
    }

    return route.name ? (route.name as string) : ''
  })

  return slug
}
