<script setup lang="ts">
  import { menuList } from '~/assets/fake/menu'

  defineSlots<{
    pageProgressBar(props: unknown): void
  }>()
</script>

<template>
  <div class="h-20 w-screen" />
  <div
    class="fixed inset-0 z-20 flex h-20 w-screen flex-col justify-between bg-navbar-light dark:bg-navbar-dark"
    :class="{
      'border-b-2 border-light-theme-100 dark:border-dark-theme-900':
        !$slots.pageProgressBar,
    }"
  >
    <div
      class="container mx-auto flex h-full items-center justify-between px-3 sm:px-0"
    >
      <div class="flex items-center gap-x-3">
        <LogoBlock />
        <FlatMenu :menu-list="menuList" />
      </div>
      <div class="flex items-center justify-center gap-0.5 sm:gap-x-1.5">
        <SearchInputField />
        <ModeSwitch />
        <DropdownMenu />
      </div>
    </div>
    <slot v-if="$slots.pageProgressBar" name="pageProgressBar" />
  </div>
</template>
