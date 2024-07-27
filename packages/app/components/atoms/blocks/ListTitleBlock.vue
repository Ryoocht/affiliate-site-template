<script setup lang="ts">
  withDefaults(
    defineProps<{
      title?: string
      linkText?: string
      link?: string
      icon?: string
      titleColor?: string
    }>(),
    {
      title: 'Title',
      linkText: 'See All',
      link: '/',
      icon: 'i-material-symbols-arrow-right-alt',
      titleColor: 'text-primary-accent',
    },
  )
</script>

<template>
  <div
    class="flex items-center justify-between border-b-2 border-disabled py-4"
  >
    <h3 class="text-3xl font-bold capitalize" :class="titleColor">
      {{ title }}
    </h3>
    <NuxtLink :to="link" class="group flex items-center gap-x-2">
      <p
        class="hidden text-sm font-semibold uppercase text-info-content transition-all duration-200 md:block"
      >
        {{ linkText }}
      </p>
      <UIcon
        :name="icon"
        class="size-6 text-info-content transition-all duration-200"
      />
    </NuxtLink>
  </div>
</template>
