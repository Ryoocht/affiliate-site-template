<script setup lang="ts"></script>

<template>
  <main
    class="relative mx-auto w-full md:max-w-main-content lg:max-w-main-content-lg xl:max-w-main-content-xl"
  >
    <div class="">
      <slot name="hero"></slot>
    </div>
    <div class="">
      <slot name="banner"></slot>
    </div>
    <div class="">
      <slot name="columnBlock"></slot>
    </div>
  </main>
</template>
