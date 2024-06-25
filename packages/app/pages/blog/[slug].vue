<script setup lang="ts">
  definePageMeta({
    layout: 'with-page-progress',
    /* validate should be setup for 404 */
  })

  const route = useRoute()
  const slug = computed(() => route.params.slug)

  const { data: blogContent } = await useFetch<GetBlogResult>(
    `/api/blogs/${slug.value}`,
  )

  const toc = computed(() => portableTextToToc(blogContent.value?.body))
</script>

<template>
  <div>
    <BreadcrumbLink class="mx-5 my-6 md:mx-10" />
    <BlogLayout>
      <template #asideLeft>
        <TableOfContents :toc="toc" />
      </template>
      <template #main>
        <BlogPost :blog-content="blogContent" />
      </template>
      <template #asideRight>
        <!-- TODO: AsideverticalCarousel takes list of ads data -->
        <AsideVerticalCarousel />
      </template>
    </BlogLayout>
  </div>
</template>
