<script setup lang="ts">
  import type { SwiperContainer } from 'swiper/element'
  import type { SwiperOptions } from 'swiper/types'

  const props = withDefaults(
    defineProps<{
      options?: Omit<SwiperOptions, 'onAny'>
      enableVisibleSlides?: boolean
      ui?: {
        container?: string | string[]
        startWrapper?: string | string[]
        endWrapper?: string | string[]
      }
    }>(),
    {
      options: () => ({}),
      ui: () => ({}),
    },
  )

  defineSlots<{
    slider(props: unknown): void
    'container-start'(props: unknown): void
    'container-end'(props: unknown): void
  }>()

  const swiperContainerRef = ref<SwiperContainer | null>(null)

  const swiperOptions = computed(() => {
    const normalizedOptions = normalizeSwiperOptionsKeys(props.options)

    if (props.enableVisibleSlides) {
      const visibleSlides = calculateVisibleSlides(swiperContainerRef)
      if (visibleSlides !== undefined)
        normalizedOptions['slides-per-group'] = visibleSlides
    }
    return normalizedOptions
  })

  const container = useTailwindMerged('w-full', () => props.ui.container ?? '')
  const startWrapper = useTailwindMerged(
    'z-10',
    () => props.ui.startWrapper ?? '',
  )
  const endWrapper = useTailwindMerged('z-10', () => props.ui.endWrapper ?? '')

  defineExpose({
    swiperContainerRef,
  })
</script>

<template>
  <ClientOnly>
    <swiper-container
      ref="swiperContainerRef"
      v-bind="swiperOptions"
      :class="container"
    >
      <div
        v-if="$slots['container-start']"
        slot="container-start"
        :class="startWrapper"
      >
        <slot name="container-start"></slot>
      </div>

      <slot name="slider"></slot>

      <div v-if="$slots['container']" slot="container-end" :class="endWrapper">
        <slot name="container-end"></slot>
      </div>
    </swiper-container>
    <template #fallback>
      <BaseCarouselSkeleton />
    </template>
  </ClientOnly>
</template>
