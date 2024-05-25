<script setup lang="ts">
  useHead({
    title: 'Affiliate Template',
    meta: [{ name: 'description', content: 'My Affiliate template site.' }],
  })
</script>

<template>
  <!-- This loading indicator needs to be customised -->
  <!-- <NuxtLoadingIndicator /> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  .center-enter-active,
  .center-leave-active {
    transition: all 0.2s;
  }

  .center-enter-from {
    opacity: 0;
    transform: translate(0, 30px);
  }

  .center-leave-to {
    opacity: 0;
    transform: translate(0, -30px);
  }
</style>
