<script setup lang="ts">
  defineSlots<{
    asideLeft(props: unknown): void
    main(props: unknown): void
    asideRight(props: unknown): void
  }>()
</script>

<template>
  <div
    class="xl:grid-cols-blog-lg grid-cols-blog relative grid w-full justify-center"
  >
    <aside v-if="$slots.asideLeft" class="hidden bg-green-100 xl:block">
      <slot name="asideLeft" />
    </aside>
    <main v-if="$slots.main" class="bg-red-100">
      <slot name="main" />
    </main>
    <aside v-if="$slots.asideRight" class="hidden bg-blue-100 xl:block">
      <slot name="asideRight" />
    </aside>
  </div>
</template>
