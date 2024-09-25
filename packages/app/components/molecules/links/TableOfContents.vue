<script setup lang="ts">
  import type { Toc } from '@nuxt/content'

  const props = defineProps<{
    toc?: Toc
  }>()

  const { selectedId, scrollToHeading } = useTableOfContents(props.toc)
</script>

<template>
  <div class="h-full w-full max-w-96">
    <div class="sticky top-20 px-6 py-2">
      <div
        class="flex flex-col rounded-md bg-background-tertiary px-4 py-4 lg:mt-14"
      >
        <h2 class="text-base font-bold uppercase tracking-wide text-content">
          Table of contents
        </h2>
        <nav class="mt-4">
          <ul class="flex flex-col gap-y-2">
            <li v-for="link of toc?.links" :key="link.id">
              <a
                :class="[
                  link.id === selectedId
                    ? 'text-base text-enabled'
                    : 'text-sm text-disabled',
                ]"
                role="button"
                class="cursor-pointer font-medium capitalize tracking-wide transition-all duration-100"
                @click.prevent="scrollToHeading(link.id)"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
