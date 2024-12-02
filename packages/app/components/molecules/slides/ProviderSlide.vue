<script setup lang="ts">
  defineProps<{
    slides: Provider[]
  }>()
</script>

<template>
  <BaseCarouselSlide
    v-for="(slide, index) in slides"
    :key="index"
    class="h-full w-28 overflow-hidden rounded-md md:w-36 lg:w-48"
  >
    <NuxtLink :to="slide.link" target="_blank" class="size-full">
      <div class="size-full bg-red-200">hey</div>
      <!-- Resposive Icon (long and short) -->
    </NuxtLink>
  </BaseCarouselSlide>
</template>
