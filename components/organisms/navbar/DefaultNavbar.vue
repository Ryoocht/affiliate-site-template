<script setup lang="ts">
  export interface MenuItem {
    name: string
    route: string
  }

  const dummyMenuList: MenuItem[] = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'Blogs',
      route: '/blogs',
    },
    {
      name: 'Reviews',
      route: '/reviews',
    },
    {
      name: 'About',
      route: '/about',
    },
  ]
</script>

<template>
  <div class="h-20 w-screen" />
  <div
    class="fixed inset-0 z-10 flex h-20 w-screen flex-col justify-between bg-navbar-light dark:bg-navbar-dark"
  >
    <div
      class="container mx-auto flex h-full items-center justify-between text-theme-800"
    >
      <div class="flex items-center">
        logo
        <FlatMenu :menu-list="dummyMenuList" />
      </div>
      <div class="flex items-center justify-center gap-x-2">
        <SearchInputField />
        <ModeSwitch />
        <DropdownMenu />
      </div>
    </div>
    <PageProgressBar />
  </div>
</template>
