<script setup lang="ts">
  const isOpen = ref(false)

  const people = [
    { id: 1, label: 'Wade Cooper' },
    { id: 2, label: 'Arlene Mccoy' },
    { id: 3, label: 'Devon Webb' },
    { id: 4, label: 'Tom Cook' },
    { id: 5, label: 'Tanya Fox' },
    { id: 6, label: 'Hellen Schmidt' },
    { id: 7, label: 'Caroline Schultz' },
    { id: 8, label: 'Mason Heaney' },
    { id: 9, label: 'Claudie Smitham' },
    { id: 10, label: 'Emil Schaefer' },
  ]

  const selected = ref([])
  const { isDark } = useTheme()
</script>

<template>
  <div>
    <BaseIconButton
      :color="isDark ? 'gray' : 'primary'"
      variant="ghost"
      label="theme"
      @click="isOpen = true"
    >
      <UIcon
        name="i-material-symbols-search"
        class="size-6 flex-shrink-0 text-light-theme-950 dark:text-dark-theme-50"
      />
    </BaseIconButton>

    <UModal v-model="isOpen">
      <UCommandPalette
        v-model="selected"
        multiple
        nullable
        :groups="[{ key: 'people', commands: people }]"
      />
    </UModal>
  </div>
</template>
