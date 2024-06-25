<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      ui?: {
        border?: string | string[]
      }
    }>(),
    {
      ui: () => ({}),
    },
  )
  const border = useTailwindMerged(
    'rounded border border-dashed border-light-theme-800 border-dark-theme-200',
    () => props.ui.border ?? '',
  )
</script>
<template>
  <div
    class="relative flex items-center justify-center overflow-hidden px-4 opacity-75"
    :class="border"
  >
    <svg
      class="absolute inset-0 size-full stroke-light-theme-800 dark:stroke-dark-theme-400"
      fill="none"
    >
      <defs>
        <pattern
          id="pattern-9141648d-341c-456e-97e6-3040068e31f6"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
        </pattern>
      </defs>
      <rect
        stroke="none"
        fill="url(#pattern-9141648d-341c-456e-97e6-3040068e31f6"
        width="100%"
        height="100%"
      />
    </svg>
    <slot />
  </div>
</template>
