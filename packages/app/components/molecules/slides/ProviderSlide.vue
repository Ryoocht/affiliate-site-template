<script setup lang="ts">
  defineProps<{
    slides: Provider[]
  }>()

  const { isDark } = useTheme()
</script>

<template>
  <BaseCarouselSlide
    v-for="(slide, index) in slides"
    :key="index"
    class="h-full w-28 overflow-hidden rounded-md bg-background-tertiary md:w-36 lg:w-48"
  >
    <NuxtLink :to="slide.link" target="_blank" class="relative size-full">
      <ResponsiveIcon
        :name="isDark ? `dark-${slide.imageName}` : `light-${slide.imageName}`"
        :alt="slide.title"
        :width="slide.width"
        height="64"
        class="flex size-full items-center justify-center"
      />
    </NuxtLink>
  </BaseCarouselSlide>
</template>
