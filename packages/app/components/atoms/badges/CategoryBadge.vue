<script setup lang="ts">
  import type { BadgeColor, BadgeVariant, BadgeSize } from '#ui/types'

  withDefaults(
    defineProps<{
      name: string | null
      color?: BadgeColor
      variant?: BadgeVariant
      size?: BadgeSize
    }>(),
    {
      name: '',
      color: 'primary',
      variant: 'soft',
      size: 'md',
    },
  )
</script>

<template>
  <UBadge :color :variant :size class="font-mont font-semibold capitalize">
    {{ name }}
  </UBadge>
</template>
