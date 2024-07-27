<template>
  <div class="relative h-full min-h-dvh w-screen bg-background-secondary">
    <DefaultNavbar>
      <template #pageProgressBar>
        <PageProgressBar />
      </template>
    </DefaultNavbar>
    <slot></slot>
    <!-- <DefaultFooter /> -->
  </div>
</template>
