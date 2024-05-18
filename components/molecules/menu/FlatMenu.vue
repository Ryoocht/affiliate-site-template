<script setup lang="ts">
  import type { MenuItem } from '../../organisms/navbar/DefaultNavbar.vue'

  defineProps<{
    menuList: MenuItem[]
  }>()
</script>

<template>
  <nav>
    <ul class="flex items-center gap-x-3 text-theme-800 dark:text-theme-50">
      <li v-for="item in menuList" :key="item.name">
        <NuxtLink :to="item.route">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
