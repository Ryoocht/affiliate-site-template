<script setup lang="ts">
  import HeroDots from '~/assets/svgs/hero-dots.svg'

  type LayoutVariation = 'center' | 'right' | 'left'

  withDefaults(
    defineProps<{
      slug: string | null
      title?: string | null
      excerpt?: string | null
      timeToRead?: number | null
      imageAsset: ImageAsset
      isLoading: boolean
      variation?: LayoutVariation
    }>(),
    {
      slug: '',
      title: '',
      excerpt: '',
      timeToRead: 0,
      isLoading: true,
      variation: 'center',
    },
  )
</script>

<template>
  <NuxtLink v-if="!isLoading" :to="`/blog/${slug}`">
    <section
      class="grid h-fit cursor-pointer grid-cols-1 justify-center gap-x-5 px-5 py-3 sm:px-10 md:grid-cols-2 md:p-3 lg:gap-x-0"
    >
      <article class="flex max-h-72 flex-col p-3">
        <p
          class="font-mont text-xs font-semibold uppercase text-light-theme-400 dark:text-dark-theme-400"
        >
          {{ timeToRead }} MIN READ
        </p>
        <header>
          <h1
            class="my-3 line-clamp-4 font-playfair text-3xl font-bold uppercase leading-9 text-light-theme-950 dark:text-dark-theme-50"
          >
            {{ title }}
          </h1>
          <h2
            class="line-clamp-4 text-sm text-light-theme-950 dark:text-dark-theme-200/90"
          >
            {{ excerpt }}
          </h2>
        </header>
      </article>
      <div class="relative mt-6 flex items-center justify-center md:mt-0">
        <ImageRenderer
          :alt-text="imageAsset.altText"
          :asset-url="imageAsset.assetUrl"
          :caption="imageAsset.caption"
          :width="400"
          :height="225"
          :ui="{
            container: 'md:w-[400px]',
            img: 'transition-all duration-300 group-hover:scale-105',
          }"
        />
        <HeroDots
          class="absolute bottom-3 right-0 z-0 hidden size-20 lg:-bottom-8 lg:right-3 lg:block xl:right-16"
        />
      </div>
    </section>
  </NuxtLink>
  <HeroSkeleton v-else />
</template>
