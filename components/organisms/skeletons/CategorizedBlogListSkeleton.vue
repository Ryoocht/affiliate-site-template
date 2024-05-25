<template>
  <div class="px-5 py-3 sm:px-10 md:p-3">
    <USkeleton class="h-16" />
    <div
      class="my-6 grid w-full grid-cols-1 gap-y-10 sm:gap-y-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
    >
      <div
        v-for="index in Array.from({ length: 3 }, (_, i) => i)"
        :key="index"
        class="flex cursor-pointer flex-col gap-y-2 md:gap-y-3"
      >
        <USkeleton class="aspect-video size-full h-40" />
        <USkeleton class="h-6 w-2/3" />
        <USkeleton class="h-20 w-full" />
      </div>
    </div>
  </div>
</template>
