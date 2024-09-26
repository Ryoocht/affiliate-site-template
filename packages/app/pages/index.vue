<script setup lang="ts">
  /* reference to this website
  https://betfury-affiliate.com/
*/

  /* 
1. create home page designe
2. style template layout
3. create home page slices
4. put all components together
*/
</script>

<template>
  <HomeLayout>
    <template #hero>
      <HomeHero
        title="Unlock Crypto Casino Riches"
        subtitle="Your gateway to crypto casino mastery—find the best games, biggest bonuses, and winning strategies all in one place!"
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
