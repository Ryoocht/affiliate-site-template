<script setup lang="ts">
  const links = useBreadcrumb()
</script>

<template>
  <UBreadcrumb :links="links">
    <template #default="{ link, isActive }">
      <UBadge
        :color="isActive ? 'primary' : 'gray'"
        :variant="isActive ? 'solid' : 'soft'"
        class="truncate capitalize"
      >
        {{ link.label }}
      </UBadge>
    </template>
  </UBreadcrumb>
</template>
