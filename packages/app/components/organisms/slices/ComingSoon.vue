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
  <div>
    <!-- Icon -->
    <NuxtImg
      src="/placeholder/coming-soon.jpg"
      width="1920"
      height="1080"
      :placeholder="[1920, 1080]"
    />
    <!-- message -->
    <!-- link button to visit blog page -->
  </div>
</template>

<style scoped></style>
