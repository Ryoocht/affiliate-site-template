export default function useRouteInfo() {
  const route = useRoute()

  const slug = computed(() =>
    route.name !== 'index' ? (route.name as string) : 'home',
  )

  const path = computed(() => route.path)

  return { slug, path }
}
