<script setup lang="ts">
  /* reference to this website
  https://betfury-affiliate.com/
*/
</script>

<template>
  <HomeLayout>
    <template #hero>
      <HomeHero
        title="Build a website that grows"
        subtitle="Empower marketers to release on-brand pages fast while using your tech
        stack. Prismic is the headless page builder for Next.js, Nuxt, and
        SvelteKit sites."
      />
    </template>
    <template #banner>
      <PromotionBanner />
    </template>
    <template #columnBlock>
      <ContentColumnBlock />
    </template>

    <!-- Content block -->
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
