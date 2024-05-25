<script setup lang="ts">
  const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <BaseIconButton
    :color="isDark ? 'gray' : 'primary'"
    variant="ghost"
    label="theme"
    @click="toggleTheme"
  >
    <UIcon
      v-if="isDark"
      name="i-material-symbols-dark-mode-rounded"
      class="size-6 flex-shrink-0 text-dark-theme-50"
    />
    <UIcon
      v-else
      name="i-material-symbols-sunny-rounded"
      class="size-6 flex-shrink-0 text-light-theme-950"
    />
  </BaseIconButton>
</template>
