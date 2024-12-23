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
    class="h-full w-28 overflow-hidden rounded-md md:w-36 lg:w-48"
  >
    <NuxtLink :to="slide.link" target="_blank" class="size-full">
      <div class="size-full bg-blue-100">hey</div>
      <ResponsiveIcon
        :name="isDark ? `dark-${slide.imageName}` : `light-${slide.imageName}`"
        class=""
      />
    </NuxtLink>
  </BaseCarouselSlide>
</template>
