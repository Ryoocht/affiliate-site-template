<template>
  <div class="relative h-full min-h-dvh w-screen bg-background-secondary">
    <DefaultNavbar />
    <div class="flex-grow">
      <slot></slot>
    </div>
    <DefaultFooter />
  </div>
</template>
