<script setup lang="ts">
  import { navMenuItems } from '@/assets/data/nav-menu'

  defineSlots<{
    pageProgressBar(props: unknown): void
  }>()
</script>

<template>
  <div class="h-20 w-screen"></div>
  <div
    class="fixed inset-0 z-20 flex h-20 w-screen flex-col justify-between bg-background-primary"
    :class="{ 'drop-shadow-sm': !$slots.pageProgressBar }"
  >
    <header
      class="container mx-auto flex h-full items-center justify-between px-3 sm:px-0"
    >
      <div class="flex items-center gap-x-3">
        <LogoBlock />
        <FlatMenu :nav-menu-items="navMenuItems" />
      </div>
      <div class="flex items-center justify-center gap-0.5 sm:gap-x-2">
        <SearchInputField />
        <ModeSwitch />
        <DropdownMenu />
      </div>
    </header>
    <slot v-if="!!$slots.pageProgressBar" name="pageProgressBar"></slot>
  </div>
</template>
