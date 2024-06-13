<script setup lang="ts">
  defineSlots<{
    hero(props: unknown): void
    list(props: unknown): void
  }>()
</script>

<template>
  <main
    class="relative mx-auto w-full md:max-w-main-content lg:max-w-main-content-lg xl:max-w-main-content-xl"
  >
    <div class="mt-8 md:mt-12">
      <slot v-if="$slots.hero" name="hero" />
    </div>
    <div class="my-12">
      <slot v-if="$slots.list" name="list" />
    </div>
  </main>
</template>
