<script setup lang="ts">
  withDefaults(
    defineProps<{
      title?: string
      linkText?: string
      link?: string
      icon?: string
    }>(),
    {
      title: 'Title',
      linkText: 'See All',
      link: '/',
      icon: 'i-material-symbols-arrow-right-alt',
    },
  )
</script>

<template>
  <div
    class="flex items-center justify-between border-b-2 border-light-theme-50 py-4 dark:border-dark-theme-900"
  >
    <h3
      class="text-3xl font-bold capitalize text-light-theme-900 dark:text-dark-theme-50"
    >
      {{ title }}
    </h3>
    <NuxtLink :to="link" class="group flex items-center gap-x-2">
      <p
        class="hidden text-sm font-semibold uppercase text-light-theme-500 transition-all duration-200 group-hover:text-light-theme-800 dark:text-dark-theme-400 dark:group-hover:text-dark-theme-300 md:block"
      >
        {{ linkText }}
      </p>
      <UIcon
        :name="icon"
        class="size-6 text-light-theme-500 transition-all duration-200 group-hover:text-light-theme-800 dark:text-dark-theme-400 dark:group-hover:text-dark-theme-300"
      />
    </NuxtLink>
  </div>
</template>
