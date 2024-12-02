<script setup lang="ts">
  import type { SwiperOptions } from 'swiper/types'
  import { affiliates } from '~/assets/fake/affiliates'

  const baseCarouselRef = ref<BaseCarouselInstance>()
  const swiperContainerRef = computed(
    () => baseCarouselRef.value?.swiperContainerRef || null,
  )
  // const swiperInstanceRef = computed(
  //   () => swiperContainerRef.value?.swiper || null,
  // )
  const baseSwiperOptions: SwiperOptions = {
    freeMode: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    speed: 10000,
    autoplay: {
      delay: 0,
    },
  }

  useSwiper(swiperContainerRef, baseSwiperOptions)
</script>

<template>
  <HomeLayout>
    <template #hero>
      <HomeHero
        title="Unlock Crypto Casino Riches"
        subtitle="Your gateway to crypto casino mastery—find the best games, biggest bonuses, and winning strategies all in one place!"
      />
    </template>
    <template #slider>
      <BaseCarousel
        ref="baseCarouselRef"
        :options="{
          init: false,
        }"
        :ui="{
          // blur the both sides
          container: 'h-full',
        }"
      >
        <template #slider>
          <ProviderSlide :slides="affiliates" />
        </template>
      </BaseCarousel>
    </template>
    <!-- <template #banner>
      <PromotionBanner />
    </template> -->

    <template #columnBlock>
      <ContentColumnBlock />
    </template>

    <div>
      <p>Welcome to BetFury</p>
      <span
        >BetFury has over 8 000 games that can be played with 55 different
        cryptocurrencies. Gaming experience is brightened with generous Bonuses.
        It’s easy to increase profit by mining and staking BFG tokens
      </span>
    </div>

    <!-- status section -->
    <!-- another colomuns -->
    <!-- 
          blog / review carousel components
          link: https://blog.hubspot.com/ 
        -->
    <div>
      <p>Blogs</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <p>Reviews</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </HomeLayout>
</template>
