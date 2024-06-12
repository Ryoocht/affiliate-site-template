<script setup lang="ts">
  import type { CategoryBlog } from '~/types/temp-types'

  defineProps<{
    blog?: CategoryBlog
  }>()
</script>

<template>
  <NuxtLink
    :to="`/blog/${blog?.slug}`"
    class="flex cursor-pointer flex-col gap-y-2 md:gap-y-3"
  >
    <div class="group aspect-video w-full overflow-hidden rounded-md">
      <NuxtImg
        :src="blog?.src"
        width="400"
        height="225"
        :placeholder="[400, 225]"
        class="w-full rounded-md transition-all duration-300 group-hover:scale-105"
      />
    </div>
    <div
      class="flex items-center gap-x-2 font-mont text-xs font-semibold uppercase sm:text-sm"
    >
      <p class="text-light-theme-400 dark:text-dark-theme-400">
        {{ blog?.categories[0].name }}
      </p>
      &#x2022;
      <time class="text-light-theme-900 dark:text-dark-theme-100">
        {{ blog?.readTime }}MIN READ
      </time>
    </div>
    <h2
      class="text-lg font-bold text-light-theme-950 dark:text-dark-theme-50 sm:text-xl"
    >
      {{ blog?.title }}
    </h2>
    <p class="text-sm text-light-theme-950 dark:text-dark-theme-200/90">
      {{ blog?.excerpt }}
    </p>
  </NuxtLink>
</template>
