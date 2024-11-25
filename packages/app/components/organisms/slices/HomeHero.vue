<script setup lang="ts">
  defineProps<{
    title: string
    subtitle: string
  }>()
</script>

<template>
  <section class="relative h-60 w-full sm:h-full">
    <NuxtImg src="/home/home-placeholder.png" width="2431" height="1166" />
    <div
      class="absolute -bottom-6 flex w-full flex-col items-center justify-center text-center sm:-bottom-1 sm:gap-y-2 md:bottom-0 lg:bottom-4 lg:gap-y-4 xl:bottom-7"
    >
      <h1
        class="text-2xl font-bold uppercase text-primary-accent md:text-3xl lg:text-4xl xl:text-5xl"
      >
        {{ title }}
      </h1>
      <h2
        class="max-w-full px-5 text-sm text-disabled md:max-w-screen-md md:text-base lg:text-xl"
      >
        {{ subtitle }}
      </h2>
    </div>
  </section>
</template>
