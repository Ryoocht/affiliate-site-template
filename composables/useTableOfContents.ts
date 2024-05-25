import type { Toc } from '@nuxt/content/types'

export default function useTableOfContents(toc?: Toc): {
  selectedId: Ref<string>
  scrollToHeading: (id: string) => void
} {
  const selectedId = ref('')
  const headings = ref<HTMLElement[]>([])
  const { y } = useScroll(window)

  function scrollToHeading(id: string) {
    const heading = document.getElementById(id)
    if (heading) {
      heading.scrollIntoView({ behavior: 'smooth' })
      selectedId.value = id
    }
  }

  function updateActiveHeading() {
    if (!headings.value.length) return

    let closestDistance = Infinity
    let closestHeadingId = ''

    headings.value.forEach(heading => {
      const rect = heading.getBoundingClientRect()
      const distance = Math.abs(rect.top)

      if (distance < closestDistance) {
        closestDistance = distance
        closestHeadingId = heading.id
      }
    })

    if (closestHeadingId) selectedId.value = closestHeadingId
  }

  onMounted(() => {
    if (toc?.links) {
      headings.value = toc.links
        .map(link => document.getElementById(link.id))
        .filter((el): el is HTMLElement => el !== null)
    }

    updateActiveHeading()
  })

  watch(y, updateActiveHeading)

  return {
    selectedId,
    scrollToHeading,
  }
}
