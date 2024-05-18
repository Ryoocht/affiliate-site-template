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
