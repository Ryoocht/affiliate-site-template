<script setup lang="ts">
  import type { PortableTextVueComponents } from '@portabletext/vue'
  import { PortableText } from '@portabletext/vue'

  type PortableText = NonNullable<GetBlogResult>['body']

  defineProps<{
    portableText: PortableText
  }>()

  const customPortableTextComponents: Partial<PortableTextVueComponents> = {
    block: {
      h3: ({ value }, { slots }) =>
        h(
          'h3',
          {
            id: value._key,
            class:
              'mb-2 mt-6 text-3xl font-extrabold text-light-theme-900 dark:text-dark-theme-100',
          },
          slots.default?.(),
        ),
      normal: (_, { slots }) =>
        h(
          'p',
          {
            class:
              'text-lg leading-relaxed text-light-theme-950/90 dark:text-dark-theme-200/90',
          },
          slots.default?.(),
        ),
    },
  }
</script>

<template>
  <div v-for="(blocks, index) in portableText" :key="index">
    <PortableText :value="blocks" :components="customPortableTextComponents" />
  </div>
</template>
