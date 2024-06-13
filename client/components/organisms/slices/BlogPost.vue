<script setup lang="ts">
  const props = defineProps<{
    blogContent: GetBlogResult
  }>()

  const imageAsset = computed(() => {
    const mainImage = props.blogContent?.mainImage
    return {
      altText: mainImage?.altText,
      assetId: mainImage?.assetId,
      assetUrl: mainImage?.assetUrl,
      caption: mainImage?.caption,
    }
  })
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
      :alt-text="imageAsset.altText"
      :asset-url="imageAsset.assetUrl"
      :caption="imageAsset.caption"
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
