<script setup lang="ts">
  import type { CTA, ThemedColor } from '~/types/temp-types'

  interface AdUnitUi {
    textColor?: ThemedColor
    bgColor?: ThemedColor
    bgImg?: string
  }

  export interface CustomAdUnit {
    title: string
    description?: string
    src?: string
    cta?: CTA
    ui?: AdUnitUi
  }

  const props = defineProps<CustomAdUnit>()

  const bgImg = computed(() =>
    props.ui?.bgImg ? `url(${props.ui?.bgImg})` : undefined,
  )
  const textColor = useColorScheme(props.ui?.textColor)
  const bgColor = useColorScheme(props.ui?.bgColor)
</script>

<template>
  <div
    class="unit-colors mx-auto h-fit w-4/5 overflow-hidden rounded-md"
    :class="[{ 'unit-background-image': bgImg }]"
  >
    <NuxtImg v-if="src" :src />
    <div class="flex w-full flex-col p-5">
      <p class="mb-2 text-xl font-bold">{{ title }}</p>
      <p v-if="description" class="text-base">{{ description }}</p>
      <AdUnitButton v-if="cta" v-bind="cta" class="mx-auto mt-5 w-fit" />
    </div>
  </div>
</template>

<style scoped>
  .unit-background-image {
    background-image: v-bind(bgImg);
  }

  .unit-colors {
    color: v-bind(textColor);
    background-color: v-bind(bgColor);
  }
</style>
