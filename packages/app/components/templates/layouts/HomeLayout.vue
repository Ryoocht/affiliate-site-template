<template>
  <main
    class="relative mx-auto w-full md:max-w-main-content lg:max-w-main-content-lg xl:max-w-main-content-xl"
  >
    <div>
      <slot name="hero"></slot>
    </div>
    <div class="mb-20">
      <slot name="banner"></slot>
    </div>
    <div class="bg-20">
      <slot name="slider"></slot>
    </div>
    <div class="bg-red-100">
      <slot name="columnBlock"></slot>
    </div>
  </main>
</template>
