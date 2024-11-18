<script setup lang="ts">
  defineSlots<{
    comingSoon(props: unknown): void
    hero(props: unknown): void
    list(props: unknown): void
  }>()
</script>

<template>
  <div v-if="$slots.comingSoon" name="comingSoon"></div>
  <main v-else class="relative">
    <div>
      <slot name="hero"></slot>
    </div>
    <div>
      <slot name="list"></slot>
    </div>
  </main>
</template>
