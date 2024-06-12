<script setup lang="ts">
  import type { MenuItem } from '~/types/temp-types'

  defineProps<{
    menuList: MenuItem[]
  }>()
</script>

<template>
  <nav>
    <ul class="hidden items-center gap-x-3 sm:flex">
      <li v-for="item in menuList" :key="item.name" class="group relative">
        <NuxtLink
          :to="item.route"
          class="rounded-md px-2 py-1 font-bold transition-all duration-200"
          :class="
            $route.path === item.route
              ? 'bg-light-theme-100 text-light-theme-600 dark:bg-dark-theme-900 dark:text-white'
              : 'text-light-theme-950 hover:text-light-theme-600  group-hover:bg-light-theme-100 dark:text-dark-theme-400 dark:group-hover:bg-dark-theme-900'
          "
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
