<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    keepalive: true,
    /* validate should be setup for 404 */
  })
</script>

<template>
  <!-- breadcrumb here -->
  <BlogLayout>
    <template #asideLeft>
      <p>left</p>
    </template>
    <template #main>
      <p>main</p>
    </template>
    <template #asideRight>
      <p>asideRight</p>
    </template>
  </BlogLayout>
</template>
