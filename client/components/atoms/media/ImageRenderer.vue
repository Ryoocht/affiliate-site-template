<script setup lang="ts">
  import type { ImageAsset } from '#imports'

  const props = withDefaults(
    defineProps<
      ImageAsset & {
        width?: number
        height?: number
        ui?: {
          container?: string
          img?: string
        }
      }
    >(),
    {
      width: 0,
      height: 0,
      ui: () => ({}),
    },
  )

  const Placeholder = resolveComponent('PlaceholderBlock')
  const Skeleton = resolveComponent('USkeleton')

  const loading = ref(true)
  const fallback = ref(false)

  const container = useTailwindMerged(
    'group z-10 w-11/12 overflow-hidden rounded-md md:w-fit',
    () => props.ui.container ?? '',
  )

  const img = useTailwindMerged(
    'size-full rounded-md object-cover',
    () => props.ui.img ?? '',
  )

  const aspectRatio = computed(() => `${props.width}/${props.height} auto`)
</script>

<template>
  <figure :class="container" :style="{ aspectRatio }">
    <NuxtImg
      v-if="assetUrl"
      :src="assetUrl"
      :alt="altText || 'image'"
      :width="width || 'auto'"
      :height="height || 'auto'"
      :placeholder="[width, height]"
      :class="img"
      loading="lazy"
      @load="loading = false"
      @error="fallback = true"
    />
    <SanityImage
      v-if="assetId"
      :asset-id="assetId"
      :class="img"
      auto="format"
      @load="loading = false"
      @error="fallback = true"
    />
    <component :is="Placeholder" v-if="fallback" class="size-full rounded-md" />
    <component
      :is="Skeleton"
      v-else-if="loading"
      class="size-full rounded-md"
    />
    <figcaption v-if="caption" class="size-0">{{ caption }}</figcaption>
  </figure>
</template>
