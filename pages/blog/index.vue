<script setup lang="ts">
  definePageMeta({
    layout: 'default',
    keepalive: true,
  })

  const isLoading = ref(false)

  const featureBlog = {
    title: 'Server-Side Rendering vs Client-Side Rendering',
    excerpt:
      'Explore the differences between server-side rendering (SSR) and client-side rendering (CSR) in web development. Learn about their benefits, use cases, and more.',
    option: 'beginner 14 min read',
    src: '/placeholder/placeholder-1.jpg',
    variation: 'right',
  }
</script>

<template>
  <BlogListLayout>
    <template #hero>
      <Hero
        :src="featureBlog.src"
        :title="featureBlog.title"
        :excerpt="featureBlog.excerpt"
        :option="featureBlog.option"
        variation="right"
        :is-loading="isLoading"
      />
    </template>
  </BlogListLayout>
</template>
