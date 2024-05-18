<script setup lang="ts">
  defineSlots<{
    hero(props: unknown): void
  }>()
</script>

<template>
  <main class="relative mx-auto w-full max-w-main-content">
    <div class="mt-8">
      <slot v-if="$slots.hero" name="hero" />
    </div>
  </main>
</template>
