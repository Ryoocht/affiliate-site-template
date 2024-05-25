<script setup lang="ts">
  import { featureBlog, tutorialBlogList } from '~/assets/fake/blog'

  const isLoading = ref(false)
</script>

<template>
  <BlogListLayout>
    <template #hero>
      <Hero
        :slug="featureBlog.slug"
        :src="featureBlog.src"
        :title="featureBlog.title"
        :excerpt="featureBlog.excerpt"
        :read-time="featureBlog.readTime"
        variation="right"
        :is-loading="isLoading"
      />
    </template>
    <template #list>
      <CategorizedBlogList
        title="Tutorials"
        :list="tutorialBlogList"
        :is-loading="isLoading"
      />
    </template>
  </BlogListLayout>
</template>
