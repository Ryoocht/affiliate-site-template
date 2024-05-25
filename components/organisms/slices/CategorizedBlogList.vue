<script setup lang="ts">
  import type { CategoryBlog } from '~/types/temp-types'

  defineProps<{
    title: string
    list: CategoryBlog[]
    isLoading: boolean
  }>()
</script>

<template>
  <div v-if="!isLoading" class="px-5 py-3 sm:px-10 md:p-3">
    <ListTitleBlock
      :title="title"
      :link-text="`see all ${title} articles`"
      :link="`/blog`"
    />
    <ul
      class="my-6 grid w-full grid-cols-1 gap-y-10 sm:gap-y-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
    >
      <li v-for="(blog, index) in list.slice(0, 3)" :key="index">
        <BlogCard :blog />
      </li>
    </ul>
  </div>
  <CategorizedBlogListSkeleton v-else />
</template>
