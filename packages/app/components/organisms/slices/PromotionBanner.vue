<script setup lang="ts">
  const containerRef = ref<BaseCarouselInstance>()
</script>

<template>
  <section class="mx-auto h-28 w-4/5 max-w-[750px] overflow-hidden rounded-md">
    <BaseCarousel
      ref="containerRef"
      :ui="{
        container: 'relative size-full',
      }"
    >
      <template #slider>
        <PromotionSlide />
      </template>
    </BaseCarousel>
  </section>
</template>
