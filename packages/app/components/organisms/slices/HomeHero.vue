<script setup lang="ts">
  defineProps<{
    title: string
    subtitle: string
  }>()
</script>

<template>
  <section class="relative size-full">
    <NuxtImg
      src="/home/home-placeholder.png"
      width="2431"
      height="1166"
      class="hidden md:block"
    />
    <div
      class="absolute bottom-0 flex w-full flex-col items-center justify-center gap-y-2 text-center lg:bottom-4 lg:gap-y-4 xl:bottom-7"
    >
      <h1 class="text-3xl font-bold uppercase lg:text-4xl xl:text-5xl">
        {{ title }}
      </h1>
      <h2
        class="max-w-full px-5 text-sm sm:text-base md:max-w-screen-md lg:text-xl"
      >
        {{ subtitle }}
      </h2>
    </div>
  </section>
</template>
