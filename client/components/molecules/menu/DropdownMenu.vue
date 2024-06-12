<script setup lang="ts">
  const { isDark } = useTheme()

  function openDropdown() {
    console.log('openDropdown is clicked')
  }
</script>

<template>
  <div class="flex h-8 items-center">
    <BaseIconButton
      :color="isDark ? 'gray' : 'primary'"
      variant="ghost"
      label="menu"
      @click="openDropdown"
    >
      <UIcon
        name="i-material-symbols-menu-rounded"
        class="size-6 cursor-pointer text-light-theme-950 dark:text-dark-theme-50"
      />
    </BaseIconButton>
  </div>
</template>
