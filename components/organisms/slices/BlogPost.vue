<script setup lang="ts">
  import type { ParsedContent } from '@nuxt/content/types'
  import type { CategoryBlog } from '~/types/temp-types'

  defineProps<{
    content: CategoryBlog
    data: ParsedContent | null
  }>()
</script>

<template>
  <div v-if="content" class="relative">
    <BlogTitleBlock
      :title="content.title"
      :read-time="content.readTime"
      :excerpt="content.excerpt"
      :categories="content.categories"
    />
    <UDivider class="mb-5 mt-3" />
    <ResponsiveImage :src="content.src" width="760" height="427" />
    <MarkdownRenderer v-if="data" :data="data" />
  </div>
  <BlogPostSkeleton v-else />
</template>
