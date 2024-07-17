<script setup lang="ts">
  import { NuxtLink } from '#components'
  import type { Component } from 'vue'
  import type { Globals as CSSGlobals, Property } from 'csstype'

  const props = withDefaults(
    defineProps<{
      name?: string
      alt?: string
      size?: number | string
      width?: number | string
      height?: number | string
      link?: string
      ui?: {
        align?: string | `align-${Exclude<Property.VerticalAlign, CSSGlobals>}`
        filled?: boolean
        fill?: string | string[]
        strole?: string | string[]
      }
    }>(),
    {
      name: '',
      alt: props => props.name ?? '',
      size: 30,
      width: undefined,
      height: undefined,
      link: undefined,
      ui: () => ({}),
    },
  )

  const width = computed(() => props.width ?? props.size)
  const height = computed(() => props.height ?? props.size)
  const align = useTailwindMerged('align-middle', () => props.ui.align ?? '')
  const fill = useTailwindMerged(
    () => (props.ui.filled ? 'fill-current' : 'fill-none'),
    () => props.ui.fill ?? '',
  )
  const stroke = useTailwindMerged(
    'strole-current',
    () => props.ui.strole ?? '',
  )

  const SvgIconComponent = computedAsync(
    () => resolveIconComponent(props.name),
    await resolveIconComponent(props.name),
  )

  async function resolveIconComponent(name: string): Promise<Component> {
    const { default: component } = await import(
      `~/assets/svgs/${name}.svg?skipsvgo`
    )
    return component
  }
</script>

<template>
  <component
    :is="link ? NuxtLink : 'div'"
    v-bind="{ ...(link ? { to: link, target: 'blank' } : {}) }"
    class="inline-block"
    :class="[align]"
  >
    <component
      :is="SvgIconComponent"
      :class="[fill, stroke]"
      :style="{ width: `${width}px`, height: `${height}px` }"
    />
  </component>
</template>
