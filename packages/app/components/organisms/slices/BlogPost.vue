<script setup lang="ts">
  defineProps<{
    blogContent: GetBlogResult
  }>()
</script>

<template>
  <div v-if="blogContent" class="relative">
    <BlogTitleBlock
      :title="blogContent.title"
      :excerpt="blogContent.excerpt"
      :time-to-read="blogContent.timeToRead"
      :categories="blogContent.categories"
      :release-time="blogContent.releaseTime"
    />
    <UDivider class="my-8" />
    <ImageRenderer
      :alt-text="blogContent?.mainImage.altText"
      :asset-url="blogContent?.mainImage.assetUrl"
      :caption="blogContent?.mainImage.caption"
      :width="760"
      :height="427"
      :ui="{
        container: 'mx-auto mb-8 md:w-[760px]',
      }"
    />
    <RichTextRenderer
      v-if="blogContent.body"
      :portable-text="blogContent.body"
    />
  </div>
  <BlogPostSkeleton v-else />
</template>
