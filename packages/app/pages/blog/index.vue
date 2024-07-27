<script setup lang="ts">
  definePageMeta({
    affiliateSeoOptions: {
      slug: 'blog-page',
      locale: 'en',
    },
  })

  const { data, status } = await useFetch<GetBlogsResult>('/api/blogs')

  const featuredBlog = computed(() => data.value?.featuredBlog)
  const categoryList = computed(() => data.value?.categoryList)

  const getOrder = (index: number) => (((index % 4) + 4) % 4) as 0 | 1 | 2 | 3
</script>

<template>
  <BlogListLayout>
    <template #hero>
      <BlogHero
        :blog-post="featuredBlog"
        :is-loading="status === 'idle'"
        variation="right"
      />
    </template>
    <template #list>
      <section
        v-for="(category, index) in categoryList"
        :key="category.slug || index"
      >
        <CategorizedBlogList
          :title="category.title"
          :slug="category.slug"
          :posts="category.posts"
          :is-loading="status === 'idle'"
          :order="getOrder(index)"
        />
      </section>
    </template>
  </BlogListLayout>
</template>
