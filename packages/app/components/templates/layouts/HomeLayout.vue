<template>
  <main
    class="relative mx-auto w-full md:max-w-main-content lg:max-w-main-content-lg xl:max-w-main-content-xl"
  >
    <section>
      <slot name="hero"></slot>
    </section>
    <section class="my-10 h-16 px-5 sm:my-5 md:h-20 md:px-0 lg:my-0 lg:h-28">
      <slot name="slider"></slot>
    </section>
    <section class="mb-20">
      <slot name="banner"></slot>
    </section>
    <section class="bg-red-100">
      <slot name="columnBlock"></slot>
    </section>
  </main>
</template>
