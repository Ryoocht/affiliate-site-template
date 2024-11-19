<script setup lang="ts">
  withDefaults(
    defineProps<{
      message?: string
    }>(),
    {
      message: '',
    },
  )
</script>

<template>
  <div class="relative h-[calc(100dvh-80px)] w-full">
    <NuxtImg
      src="/placeholder/coming-soon.jpg"
      width="1920"
      height="1080"
      :placeholder="[1920, 1080]"
      class="absolute inset-0 size-full object-cover"
    />
    <h1 class="absolute inset-0 m-auto size-fit">Coming Soon</h1>
    <p>{message}</p>
    <button>Visit Blog Page</button>
  </div>
</template>

<style scoped></style>
