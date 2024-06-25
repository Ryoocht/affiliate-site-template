<script setup lang="ts">
  definePageMeta({
    affiliateSeoOptions: {
      slug: 'blog-page',
      locale: 'en',
    },
  })

  const { data, pending } = await useFetch<GetBlogsResult>('/api/blogs')

  const featuredBlog = computed(() => data.value?.featuredBlog)
  const categoryList = computed(() => data.value?.categoryList)

  const imageAsset = computed<ImageAsset>(() => {
    const mainImage = featuredBlog.value?.mainImage
    return {
      altText: mainImage?.altText,
      assetId: mainImage?.assetId,
      assetUrl: mainImage?.assetUrl,
      caption: mainImage?.caption,
    }
  })
</script>

<template>
  <BlogListLayout>
    <template #hero>
      <Hero
        :slug="featuredBlog?.slug"
        :title="featuredBlog?.title"
        :excerpt="featuredBlog?.excerpt"
        :time-to-read="featuredBlog?.timeToRead"
        :image-asset="imageAsset"
        :is-loading="pending"
        variation="right"
      />
    </template>
    <template #list>
      <section
        v-for="(category, index) in categoryList"
        :key="category.slug || index"
      >
        <CategorizedBlogList
          :title="category.title"
          :slug="category.slug"
          :posts="category.posts"
          :is-loading="pending"
        />
      </section>
    </template>
  </BlogListLayout>
</template>
