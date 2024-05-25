import type { BreadcrumbLink } from '#ui/types'

const iconOptions: { [key: string]: string } = {
  home: 'i-material-symbols-house',
  blog: 'i-material-symbols-edit-document',
  review: 'i-material-symbols-reviews',
  category: 'i-material-symbols-category',
  slug: 'i-material-symbols-article',
}

const convertSlugToText = (slug: string): string => slug.replace(/-/g, ' ')

const createBreadcrumbItem = (
  label: string,
  to: string | undefined,
  hasIcon: boolean,
  segment: string,
): BreadcrumbLink => ({
  label,
  ...(hasIcon && { icon: iconOptions[segment] || iconOptions.slug }),
  ...(to && { to }),
})

export function useBreadcrumb(
  hasIcon?: boolean,
): ComputedRef<BreadcrumbLink[]> {
  const route = useRoute()

  return computed(() => {
    const segments = route.path.split('/').filter(Boolean)
    const breadcrumb: BreadcrumbLink[] = [
      createBreadcrumbItem('home', '/', !!hasIcon, 'home'),
    ]

    let currentPath = ''

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const label = convertSlugToText(segment)
      const to = index < segments.length - 1 ? currentPath : undefined
      breadcrumb.push(createBreadcrumbItem(label, to, !!hasIcon, segment))
    })

    return breadcrumb
  })
}
