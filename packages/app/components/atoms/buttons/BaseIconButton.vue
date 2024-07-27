<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      label?: string
      ui?: {
        button?: string | string[]
      }
    }>(),
    {
      label: '',
      ui: () => ({}),
    },
  )

  const button = useTailwindMerged(
    'flex size-fit items-center justify-center rounded-md bg-background-tertiary p-2',
    () => props.ui.button ?? '',
  )

  const emit = defineEmits<{
    (e: 'click'): void
  }>()
</script>

<template>
  <ClientOnly>
    <button :class="button" :aria-label="label" @click="emit('click')">
      <slot></slot>
    </button>
    <template #fallback>
      <div class="h-9 w-11"></div>
    </template>
  </ClientOnly>
</template>
