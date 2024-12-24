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
      <div class="relative size-full">
        <p>{{ slide.title }}</p>
        <ResponsiveIcon
          :name="
            isDark ? `dark-${slide.imageName}` : `light-${slide.imageName}`
          "
          width="112"
          height="64"
          class="absolute inset-0 size-fit w-28 bg-red-50"
        />
      </div>
    </NuxtLink>
  </BaseCarouselSlide>
</template>
