<script setup lang="ts">
  import type { ButtonColor, ButtonVariant } from '#ui/types'

  withDefaults(
    defineProps<{
      color: ButtonColor
      variant: ButtonVariant
      label?: string
    }>(),
    {
      color: 'white',
      variant: 'ghost',
      label: '',
    },
  )

  const emit = defineEmits<{
    (e: 'click'): void
  }>()
</script>

<template>
  <ClientOnly>
    <UButton
      :color="color"
      :variant="variant"
      :aria-label="label"
      @click="emit('click')"
    >
      <slot />
    </UButton>
    <template #fallback>
      <div class="h-9 w-11" />
    </template>
  </ClientOnly>
</template>
