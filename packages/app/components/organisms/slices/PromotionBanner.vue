<script setup lang="ts">

  const containerRef = ref<BaseCarouselInstance>()
</script>

<template>
  <section class="mx-auto min-h-36 w-2/3 rounded-md">
    <BaseCarousel ref="containerRef">
      <template #slider>
        <PromotionSlide />
      </template>
    </BaseCarousel>
  </section>
</template>
