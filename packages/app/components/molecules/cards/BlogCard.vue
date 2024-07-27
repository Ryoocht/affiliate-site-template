<script setup lang="ts">
  type Blog = GetBlogsResult['categoryList'][number]['posts'][number]

  const props = defineProps<{
    blog?: Blog
    categoryTitle: string | null
  }>()

  const imageAsset = computed<ImageAsset>(() => {
    const mainImage = props.blog?.mainImage
    return {
      altText: mainImage?.altText,
      assetId: mainImage?.assetId,
      assetUrl: mainImage?.assetUrl,
      caption: mainImage?.caption,
    }
  })
</script>

<template>
  <NuxtLink
    :to="`/blog/${blog?.slug}`"
    class="flex cursor-pointer flex-col gap-y-2 md:gap-y-3"
  >
    <ImageRenderer
      :alt-text="imageAsset.altText"
      :asset-url="imageAsset.assetUrl"
      :caption="imageAsset.caption"
      :width="400"
      :height="225"
      :ui="{
        container: 'w-full mx-auto md:mx-0 md:w-full',
        img: 'transition-all duration-300 group-hover:scale-105',
      }"
    />
    <div
      class="mt-3 flex items-center gap-x-2 text-xs font-semibold uppercase sm:text-sm md:mt-0"
    >
      <p class="text-positive-accent">
        {{ categoryTitle }}
      </p>
      &#x2022;
      <time class="text-disabled"> {{ blog?.timeToRead }}MIN READ </time>
    </div>
    <h2 class="text-lg font-bold text-content sm:text-xl">
      {{ blog?.title }}
    </h2>
    <p class="text-sm text-sub-content">
      {{ blog?.excerpt }}
    </p>
  </NuxtLink>
</template>
