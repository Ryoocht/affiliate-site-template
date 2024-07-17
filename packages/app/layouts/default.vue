<template>
  <div
    class="relative h-full min-h-dvh w-screen bg-background-light dark:bg-background-dark"
  >
    <DefaultNavbar />
    <div
      class="absolute left-0 top-0 z-0 h-[500px] w-full bg-linear-gradient-light dark:bg-linear-gradient-dark"
    ></div>
    <slot ></slot>
    <!-- <DefaultFooter /> -->
  </div>
</template>
