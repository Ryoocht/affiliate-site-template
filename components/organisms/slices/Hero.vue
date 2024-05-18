<script setup lang="ts">
  type LayoutVariation = 'center' | 'right' | 'left'

  withDefaults(
    defineProps<{
      title: string
      excerpt: string
      option?: string
      src: string
      variation: LayoutVariation
      isLoading: boolean
    }>(),
    {
      title: '',
      excerpt: '',
      option: '',
      src: '',
      variation: 'center',
      isLoading: true,
    },
  )
</script>

<template>
  <section v-if="!isLoading" class="grid h-fit grid-cols-2 justify-center">
    <article class="flex max-h-72 flex-col p-3">
      <time class="font-mont text-xs font-semibold uppercase text-theme-500">
        {{ option }}
      </time>
      <header>
        <h1
          class="my-3 line-clamp-4 font-playfair text-3xl font-bold uppercase leading-9 text-theme-950"
        >
          {{ title }}
        </h1>
        <p class="line-clamp-4 text-sm text-theme-700">{{ excerpt }}</p>
      </header>
    </article>
    <figure class="relative flex items-center justify-center">
      <NuxtImg v-if="src" :src height="160" width="300" class="rounded-md" />
    </figure>
  </section>
  <div v-else>skeleton</div>
</template>
