<script setup lang="ts">
  defineSlots<{
    asideLeft(props: unknown): void
    main(props: unknown): void
    asideRight(props: unknown): void
  }>()
</script>

<template>
  <div
    class="relative grid w-full grid-cols-1 justify-center lg:grid-cols-blog xl:grid-cols-blog-lg"
  >
    <aside
      v-if="$slots.asideLeft"
      class="hidden h-full xl:col-span-1 xl:grid xl:justify-items-end"
    >
      <slot name="asideLeft" ></slot>
    </aside>
    <main
      v-if="$slots.main"
      class="mx-auto w-full max-w-main-content px-5 md:px-2 lg:mx-0 lg:px-0"
    >
      <slot name="main" ></slot>
    </main>
    <aside
      v-if="$slots.asideRight"
      class="hidden h-full xl:col-span-1 xl:grid xl:justify-items-start"
    >
      <slot name="asideRight" ></slot>
    </aside>
  </div>
</template>
