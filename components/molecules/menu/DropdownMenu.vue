<script setup lang="ts">
  const { isDark } = useTheme()

  function openDropdown() {
    console.log('openDropdown is clicked')
  }
</script>

<template>
  <div class="flex h-8 items-center">
    <BaseIconButton
      :color="isDark ? 'gray' : 'white'"
      variant="ghost"
      label="menu"
      @click="openDropdown"
    >
      <UIcon
        name="i-material-symbols-menu-rounded"
        class="size-5 cursor-pointer text-theme-800 dark:text-theme-50"
      />
    </BaseIconButton>
  </div>
</template>
