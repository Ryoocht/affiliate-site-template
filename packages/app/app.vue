<template>
  <NuxtLoadingIndicator :height="2" color="#757cff" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  .center-enter-active,
  .center-leave-active {
    transition: all 0.2s;
  }

  .center-enter-from {
    opacity: 0;
    transform: translate(0, 30px);
  }

  .center-leave-to {
    opacity: 0;
    transform: translate(0, -30px);
  }
</style>
