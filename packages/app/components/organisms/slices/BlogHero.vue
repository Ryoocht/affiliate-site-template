<script setup lang="ts">
  import HeroDots from '~/assets/svgs/hero-dots.svg'

  type LayoutVariation = 'center' | 'right' | 'left'
  type BlogPost = GetBlogsResult['featuredBlog']

  withDefaults(
    defineProps<{
      blogPost?: BlogPost
      isLoading: boolean
      variation?: LayoutVariation
    }>(),
    {
      blogPost: null,
      isLoading: true,
      variation: 'right',
    },
  )
</script>

<template>
  <NuxtLink v-if="!isLoading" :to="`/blog/${blogPost?.slug}`">
    <section
      class="grid h-fit cursor-pointer grid-cols-1 justify-center gap-x-5 px-5 py-3 sm:px-10 md:grid-cols-2 md:p-3 lg:gap-x-0"
    >
      <article class="flex max-h-72 flex-col p-3">
        <p class="text-xs font-semibold uppercase text-positive-accent">
          {{ blogPost?.timeToRead }} MIN READ
        </p>
        <div>
          <h1
            class="my-3 line-clamp-4 text-3xl font-bold uppercase leading-9 text-content"
          >
            {{ blogPost?.title }}
          </h1>
          <h2 class="line-clamp-4 text-base font-medium text-sub-content">
            {{ blogPost?.excerpt }}
          </h2>
        </div>
      </article>
      <div class="relative mt-6 flex items-center justify-center md:mt-0">
        <ImageRenderer
          :alt-text="blogPost?.mainImage.altText"
          :asset-url="blogPost?.mainImage.assetUrl"
          :caption="blogPost?.mainImage.caption"
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
