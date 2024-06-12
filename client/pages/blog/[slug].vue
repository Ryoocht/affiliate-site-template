<script setup lang="ts">
  import { categoryBlog } from '~/assets/fake/blog'

  definePageMeta({
    layout: 'with-page-progress',
    /* validate should be setup for 404 */
  })

  const { data: blogContent } = await useAsyncData('page-data', () =>
    queryContent('/main').findOne(),
  )

  const toc = computed(() => blogContent.value?.body?.toc)
</script>

<template>
  <div>
    <BreadcrumbLink class="m-3" />
    <BlogLayout>
      <template #asideLeft>
        <TableOfContents :toc="toc" />
      </template>
      <template #main>
        <!-- TODO: content and data should be one in the future -->
        <BlogPost :content="categoryBlog" :data="blogContent" />
      </template>
      <template #asideRight>
        <!-- TODO: AsideverticalCarousel takes list of ads data -->
        <AsideVerticalCarousel />
      </template>
    </BlogLayout>
  </div>
</template>
