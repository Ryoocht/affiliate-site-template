<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      src: string
      width: string
      height: string
      ui?: {
        container?: string
      }
    }>(),
    {
      src: '',
      ui: () => ({}),
    },
  )

  const container = useTailwindMerged(
    'group aspect-video w-full overflow-hidden rounded-md',
    () => props.ui.container ?? '',
  )
</script>

<template>
  <div :class="container">
    <NuxtImg
      :src
      :width="width"
      :height="height"
      :placeholder="[Number(width), Number(height)]"
      class="w-full rounded-md"
    />
  </div>
</template>
