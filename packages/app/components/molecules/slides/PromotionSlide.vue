<script setup lang="ts"></script>

<template>
  <BaseCarouselSlide>
    <div class="relative z-0 size-full">
      <NuxtImg
        src="/promotions/betfury-affiliate.png"
        :width="750"
        :height="112"
        :placeholder="[750, 112]"
        class="absolute inset-0 -z-10"
      />
      <div class="z-10 flex size-full items-center justify-between">
        <NuxtImg
          src="/promotions/betfury-affiliate-present.png"
          :width="165"
          :height="112"
          :placeholder="[165, 112]"
        />
        <AdUnitButton label="Become a partner" link="https://google.com" />
      </div>
    </div>
  </BaseCarouselSlide>
</template>
