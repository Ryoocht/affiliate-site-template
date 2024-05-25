<script setup lang="ts">
  export interface ImgAdUnit {
    src: string
    link: string
  }

  defineProps<ImgAdUnit>()
</script>

<template>
  <div class="mx-auto aspect-ad-unit-img w-aside-ad overflow-hidden rounded-md">
    <NuxtLink :to="link" target="_blank">
      <NuxtImg
        :src
        width="230"
        height="310"
        :placeholder="[230, 310]"
        class="w-full"
      />
    </NuxtLink>
  </div>
</template>
