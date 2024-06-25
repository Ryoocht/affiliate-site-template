<script setup lang="ts">
  import { asideListAds } from '../../../assets/fake/ads'
</script>

<template>
  <div class="flex h-full w-full max-w-96 flex-col gap-y-8">
    <ImgAdUnit v-bind="asideListAds.imgAdUnit[0]" />
    <CustomAdUnit v-bind="asideListAds.customAdUnit[0]" />
    <CustomAdUnit v-bind="asideListAds.customAdUnit[1]" />
    <!-- <AsideLeadCaptureForm /> -->
  </div>
</template>
