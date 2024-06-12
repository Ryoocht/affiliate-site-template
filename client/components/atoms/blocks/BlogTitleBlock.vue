<script setup lang="ts">
  import type { Category } from '~/types/temp-types'

  defineProps<{
    title: string
    readTime: number
    excerpt: string
    categories: Partial<Category>[]
  }>()

  /* temporary! this should come from blog content */
  const updatedAt = '2024-03-04 00:00'
</script>

<template>
  <div class="full flex flex-col">
    <div class="flex justify-between font-mont text-sm">
      <p class="font-semibold text-light-theme-400 dark:text-dark-theme-400">
        {{ readTime }} MIN READ
      </p>
      <time
        :datetime="updatedAt"
        class="font-medium uppercase text-slate-500 dark:text-slate-400"
      >
        tuesday, march 5, 2024
      </time>
    </div>
    <h1
      class="my-4 font-playfair text-5xl font-bold text-light-theme-950 dark:text-dark-theme-50"
    >
      {{ title }}
    </h1>
    <h2
      class="font-mont text-lg font-medium text-light-theme-950/90 dark:text-dark-theme-200/90"
    >
      {{ excerpt }}
    </h2>
    <ul class="my-3 flex flex-wrap gap-2">
      <li v-for="(category, index) in categories" :key="index">
        <CategoryBadge :name="category?.name" />
      </li>
    </ul>
  </div>
</template>
