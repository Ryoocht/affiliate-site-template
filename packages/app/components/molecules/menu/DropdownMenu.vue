<script setup lang="ts">
  function openDropdown() {
    console.log('openDropdown is clicked')
  }
</script>

<template>
  <div class="flex h-8 items-center">
    <BaseIconButton label="menu" @click="openDropdown">
      <UIcon
        name="i-material-symbols-menu-rounded"
        class="size-6 text-enabled"
      />
    </BaseIconButton>
  </div>
</template>
