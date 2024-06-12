<script setup lang="ts">
  import type { CTA } from '~/types/temp-types'

  export interface AsideLeadCaptureForm {
    title: string
    description?: string
    src?: string
    bgImg?: string
    bgColor?: string
    cta: CTA
  }
</script>

<template>
  <div>Aside Lead Capture Form</div>
</template>
