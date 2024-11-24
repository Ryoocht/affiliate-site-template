<script setup lang="ts">
  defineProps<{
    title: string
    subtitle: string
  }>()
</script>

<template>
  <section class="relative w-full">
    <NuxtImg
      src="/home/home-placeholder.png"
      width="2431"
      height="1166"
      class="hidden md:block"
    />
    <div
      class="absolute bottom-7 flex w-full flex-col items-center justify-center gap-y-4"
    >
      <h1 class="text-4xl font-bold uppercase sm:text-6xl">{{ title }}</h1>
      <h2
        class="max-w-full text-center text-base sm:text-lg md:max-w-screen-md md:text-xl"
      >
        {{ subtitle }}
      </h2>
    </div>
  </section>
</template>
