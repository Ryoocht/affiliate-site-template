<script setup lang="ts">
  import type { ParsedContent } from '@nuxt/content/types'

  defineProps<{
    data: ParsedContent
  }>()
</script>

<template>
  <ContentRenderer :value="data">
    <ContentRendererMarkdown :value="data" />
  </ContentRenderer>
</template>
