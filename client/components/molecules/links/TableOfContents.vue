<script setup lang="ts">
  import type { Toc } from '@nuxt/content/types'

  const props = defineProps<{
    toc?: Toc
  }>()

  const { selectedId, scrollToHeading } = useTableOfContents(props.toc)
</script>

<template>
  <div class="h-full w-full max-w-96">
    <div class="sticky top-20 px-5 py-4 font-mont">
      <h2
        class="text-base font-bold uppercase tracking-wide text-light-theme-400 dark:text-dark-theme-300 lg:mt-16"
      >
        Table of contents
      </h2>
      <nav class="mt-4">
        <ul class="flex flex-col gap-y-2">
          <li v-for="link of toc?.links" :key="link.id">
            <a
              :class="[
                link.id === selectedId
                  ? 'text-lg text-light-theme-800 dark:text-dark-theme-100'
                  : 'text-base text-light-theme-400 dark:text-dark-theme-300',
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
</template>
