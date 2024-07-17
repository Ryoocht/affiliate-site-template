import { kebabCase } from 'scule'
import type { SwiperOptions } from 'swiper/types'

type Options = Omit<SwiperOptions, 'onAny'>

function normalizeKeys(
  options: Record<string, unknown>,
  parentKey: string = '',
): Record<string, unknown> {
  return Object.entries(options).reduce(
    (acc, [key, value]) => {
      const kebabKey = kebabCase(key)

      const newKey = parentKey ? `${parentKey}-${kebabKey}` : kebabKey
      if (newKey) {
        if (isObject(value)) Object.assign(acc, normalizeKeys(value, newKey))
        else acc[newKey] = value
      }
      return acc
    },
    {} as Record<string, unknown>,
  )
}

export default function normalizeSwiperOptionsKeys(
  options: Options,
): Record<string, unknown> {
  return normalizeKeys(options || {})
}
