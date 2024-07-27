<script setup lang="ts">
  const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <BaseIconButton label="theme" @click="toggleTheme">
    <UIcon
      v-if="isDark"
      name="i-material-symbols-dark-mode-rounded"
      class="size-6 text-enabled"
    />
    <UIcon
      v-else
      name="i-material-symbols-sunny-rounded"
      class="size-6 text-enabled"
    />
  </BaseIconButton>
</template>
