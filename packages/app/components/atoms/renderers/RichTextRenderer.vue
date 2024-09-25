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
            class: 'mb-2 mt-6 text-xl md:text-2xl font-extrabold text-content',
          },
          slots.default?.(),
        ),
      normal: (_, { slots }) =>
        h(
          'p',
          {
            class: 'text-sm md:text-base leading-relaxed text-content/80',
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
