<script setup lang="ts">
  type Posts = GetBlogsResult['categoryList'][number]['posts']

  const props = withDefaults(
    defineProps<{
      title: string | null
      slug: string | null
      posts: Posts
      isLoading: boolean
    }>(),
    {
      title: '',
      slug: '',
      posts: () => [],
      isLoading: true,
    },
  )

  const firstThreePosts = computed(() => props.posts?.slice(0, 3))
</script>

<template>
  <div v-if="!isLoading" class="px-5 py-3 sm:px-10 md:p-3">
    <ListTitleBlock
      v-if="title"
      :title="title"
      :link-text="`see all ${title} articles`"
      :link="`/blog/category/${slug}`"
    />
    <ul
      class="my-6 grid w-full grid-cols-1 gap-y-10 sm:gap-y-14 md:grid-cols-2 md:gap-x-6 md:gap-y-12 lg:grid-cols-3"
    >
      <li v-for="(blog, index) in firstThreePosts" :key="blog.slug || index">
        <BlogCard :blog :category-title="title" />
      </li>
    </ul>
  </div>
  <CategorizedBlogListSkeleton v-else />
</template>
