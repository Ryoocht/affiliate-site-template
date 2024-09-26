<script setup lang="ts">
  defineProps<{
    title: string
    subtitle: string
  }>()
</script>

<template>
  <section class="flex items-center text-center">
    <NuxtImg
      src="/home/home-placeholder.png"
      width="500"
      height="500"
      class="hidden md:block"
    />
    <div
      class="my-10 flex w-full flex-col items-center justify-center gap-y-4 px-5 md:my-0 lg:px-0"
    >
      <h1 class="text-4xl font-bold sm:text-6xl">{{ title }}</h1>
      <h2 class="max-w-full text-base sm:text-lg md:max-w-screen-md md:text-xl">
        {{ subtitle }}
      </h2>
    </div>
  </section>
</template>
