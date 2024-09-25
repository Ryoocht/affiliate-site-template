<script setup lang="ts">
  import type { BlogTitle } from '#imports'

  withDefaults(defineProps<BlogTitle>(), {
    title: '',
    excerpt: '',
    timeToRead: 0,
    categories: null,
    releaseTime: '',
  })
</script>

<template>
  <div class="full flex flex-col">
    <div class="mb-8 flex justify-between text-sm">
      <p class="font-semibold text-info-content">{{ timeToRead }} MIN READ</p>
      <time
        :datetime="releaseTime || ''"
        class="font-medium uppercase text-slate-500 dark:text-slate-400"
      >
        {{ formatDate(releaseTime || '') }}
      </time>
    </div>
    <h1 class="mb-8 text-3xl font-bold leading-snug text-content md:text-5xl">
      {{ title }}
    </h1>
    <h2
      class="font-base mb-6 text-sm leading-relaxed text-content/80 md:text-lg"
    >
      {{ excerpt }}
    </h2>
    <ul class="flex flex-wrap gap-2">
      <li v-for="(category, index) in categories" :key="index">
        <CategoryBadge :name="category?.title" />
      </li>
    </ul>
  </div>
</template>
