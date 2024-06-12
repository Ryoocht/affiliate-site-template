<template>
  <div class="grid h-fit grid-cols-1 justify-center md:grid-cols-2">
    <div class="flex h-56 flex-col justify-between p-5">
      <USkeleton class="h-5 w-1/2" />
      <div class="flex flex-col gap-y-1">
        <USkeleton class="h-24 w-full" />
        <USkeleton class="h-14 w-full" />
      </div>
    </div>
    <div class="p-5">
      <USkeleton class="mx-auto h-40 w-10/12 md:size-full" />
    </div>
  </div>
</template>
