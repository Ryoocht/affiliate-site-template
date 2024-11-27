<script setup lang="ts">
  defineProps<{
    slides: Array<string>
  }>()
</script>

<template>
  <swiper-slide
    v-for="(_, index) in slides"
    :key="index"
    class="flex size-full"
  >
    <div class="h-full w-28 bg-green-200 md:w-36 lg:w-48">hey</div>
    <!-- Resposive Icon (long and short) -->
  </swiper-slide>
</template>
