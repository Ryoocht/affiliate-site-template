<script setup lang="ts">
  defineProps<{
    title: string
    subtitle: string
  }>()
</script>

<template>
  <section class="my-20 flex flex-col items-center text-center">
    <!-- Background Images and animation -->
    <!-- maybe something like crypto currencies are falling down or some i-gaming elements are falling -->
    <div
      class="flex w-full flex-col items-center justify-center gap-y-4 px-5 lg:px-0"
    >
      <h1 class="text-4xl font-bold sm:text-5xl">{{ title }}</h1>
      <h2 class="max-w-full text-base sm:text-lg md:max-w-screen-md md:text-xl">
        {{ subtitle }}
      </h2>
    </div>
  </section>
</template>
