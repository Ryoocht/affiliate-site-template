<script setup lang="ts">
  import type { NavMenuItem } from '@/types'
  import type {
    RouteLocationAsPathGeneric,
    RouteLocationAsRelativeGeneric,
  } from 'vue-router'

  defineProps<{
    navMenuItems: NavMenuItem[]
  }>()

  const route = useRoute()

  const isActive = (
    to: string | RouteLocationAsPathGeneric | RouteLocationAsRelativeGeneric,
  ): boolean =>
    route.path === (typeof to === 'string' ? to : to.path) ||
    route.path.startsWith(`${typeof to === 'string' ? to : to.path}/`)
</script>

<template>
  <nav>
    <ul class="hidden items-center gap-x-3 sm:flex">
      <li
        v-for="item in navMenuItems"
        :key="item.label"
        class="group relative flex cursor-pointer items-center gap-x-3 rounded-md p-3"
        :class="isActive(item.to) ? '' : 'hover:bg-background-tertiary'"
      >
        <UIcon
          v-if="item.icon"
          dynamic
          class="size-5"
          :name="item.icon"
          :class="isActive(item.to) ? 'text-enabled' : 'text-disabled'"
        />
        <NuxtLink
          :to="item.to"
          class="rounded-md text-base font-bold transition-all duration-200"
          :class="isActive(item.to) ? 'text-enabled' : 'text-disabled'"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
