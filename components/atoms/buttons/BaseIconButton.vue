<script setup lang="ts">
  import type { ButtonVariant } from '#ui/types'

  withDefaults(
    defineProps<{
      color: string
      variant: ButtonVariant
      label?: string
    }>(),
    {
      color: 'white',
      variant: 'solid',
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
      <div class="h-8 w-10" />
    </template>
  </ClientOnly>
</template>
