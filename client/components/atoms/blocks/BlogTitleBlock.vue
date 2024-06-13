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
    <div class="mb-8 flex justify-between font-mont text-sm">
      <p class="font-semibold text-light-theme-400 dark:text-dark-theme-400">
        {{ timeToRead }} MIN READ
      </p>
      <time
        :datetime="releaseTime || ''"
        class="font-medium uppercase text-slate-500 dark:text-slate-400"
      >
        {{ formatDate(releaseTime || '') }}
      </time>
    </div>
    <h1
      class="mb-8 font-playfair text-5xl font-bold leading-snug text-light-theme-950 dark:text-dark-theme-50"
    >
      {{ title }}
    </h1>
    <h2
      class="mb-6 font-mont text-lg font-medium leading-relaxed text-light-theme-950/90 dark:text-dark-theme-200/90"
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
