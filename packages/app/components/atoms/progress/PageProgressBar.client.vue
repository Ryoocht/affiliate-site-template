<script setup lang="ts">
  const progress = ref(0)

  const { y } = useScroll(document)

  function updateProgress() {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight
    const clientHeight = document.documentElement.clientHeight
    if (scrollHeight > clientHeight) {
      progress.value = (scrollTop / (scrollHeight - clientHeight)) * 100
    } else {
      progress.value = 0
    }
  }

  watch(y, updateProgress, { immediate: true })
</script>

<template>
  <UProgress size="sm" class="w-screen" :value="progress" :max="100" />
</template>
