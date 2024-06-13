import type { Toc, TocLink } from '@nuxt/content/types'
import type { PortableTextBlock } from '@portabletext/types'

type PortableTextTypes = NonNullable<GetBlogResult>['body']

function isStyledBlock(block: Partial<PortableTextBlock>): block is {
  style: string
  children: Array<{ text: string; _type: string }>
} {
  return (
    block && typeof block.style === 'string' && Array.isArray(block.children)
  )
}

export function portableTextToToc(portableText?: PortableTextTypes): Toc {
  const toc: Toc = {
    title: 'Table of Contents',
    depth: 1,
    searchDepth: 3,
    links: [],
  }

  portableText?.forEach(block => {
    if (isStyledBlock(block) && block.style === 'h3') {
      const link: TocLink = {
        id: block._key || '',
        text: block.children.map(child => child.text).join(' '),
        depth: 1,
        children: [],
      }
      toc.links.push(link)
    }
  })

  return toc
}
