<script setup lang="ts">
  interface ColumnItem {
    title: string
    description: string
    image?: string
    color?: string
  }

  const dummyData: ColumnItem[] = [
    {
      title: 'International brand',
      description:
        'BetFury is a Leading Crypto Casino with 3 years of experience, a large international community, and the internal BFG token',
      image: 'home/trusted-brand.png',
      color: '#31169f',
    },
    {
      title: 'Favorable Payouts',
      description:
        'We’ve paid out more than 3 million to our Affiliates. Get your payout on the 1st day of each month. We don’t carry over the minus to the next month',
      image: 'home/fast-payouts.png',
      color: '#31169f',
    },
    {
      title: 'Traffic performance',
      description:
        'A large number of different Bonuses and Features for users make it possible to keep your traffic on BetFury as efficiently as possible',
      image: 'home/traffic-performance.png',
      color: '#31169f',
    },
    {
      title: 'Professional support',
      description:
        'Get fast and high-quality support on BetFury. Experienced affiliate managers provide you with the necessary information and promotional materials',
      image: 'home/professional-support.png',
      color: '#31169f',
    },
  ]
</script>

<template>
  <ul
    class="grid grid-cols-1 gap-2 px-5 md:grid-cols-2 lg:h-[340px] lg:grid-cols-4"
  >
    <li
      v-for="(item, index) in dummyData"
      :key="index"
      class="relative flex flex-col items-center justify-start rounded-lg"
      :style="{
        backgroundColor: item.color,
      }"
    >
      <!-- Icon here -->
      <div class="h-1/4 w-full"></div>
      <div class="flex flex-col items-center justify-center gap-y-3 px-8">
        <p class="text-xl font-bold">{{ item.title }}</p>
        <p class="text-light-theme-800/80 dark:text-dark-theme-100/80 text-sm">
          {{ item.description }}
        </p>
      </div>
    </li>
  </ul>
</template>

<!-- Add background gradient colors -->
<style scoped></style>
