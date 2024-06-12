<script setup lang="ts">
  import type { CTA } from '~/types/temp-types'

  const props = defineProps<CTA>()

  const textColor = useColorScheme(props.textColor)
  const bgColor = useColorScheme(props.bgColor)
</script>

<template>
  <NuxtLink :to="link">
    <button
      class="btn-colors font-mont line-clamp-1 h-12 min-w-32 max-w-52 overflow-hidden rounded-md px-2 font-semibold capitalize drop-shadow-md transition-all duration-200 hover:scale-105"
    >
      {{ label }}
    </button>
  </NuxtLink>
</template>

<style scoped>
  .btn-colors {
    color: v-bind(textColor);
    background-color: v-bind(bgColor);
  }
</style>
