import type { CustomAdUnit } from '~/components/molecules/ads/CustomAdUnit.vue'
import type { ImgAdUnit } from '~/components/molecules/ads/ImgAdUnit.vue'

type AsideListAds = {
  imgAdUnit: ImgAdUnit[]
  customAdUnit: CustomAdUnit[]
}
export const asideListAds: AsideListAds = {
  imgAdUnit: [
    {
      src: '/ads/ads-1.png',
      link: 'https://www.google.com',
    },
  ],
  customAdUnit: [
    {
      title: 'Get Started',
      description:
        'Simply copy and paste the following command line in your terminal to create your first Strapi project.',
      src: '/ads/ads-2.jpg',
      cta: {
        label: 'Free Trial',
        link: 'https://www.google.com',
        textColor: { light: '#635cff', dark: '#11a865' },
        bgColor: { light: '#FFFFFF', dark: '#FFFFFF' },
      },
      ui: {
        textColor: { light: '#FFFFFF', dark: '#FFFFFF' },
        bgColor: { light: '#635cff', dark: '#11a865' },
      },
    },
    {
      title: 'Get Started',
      description:
        'Simply copy and paste the following command line in your terminal to create your first Strapi project.',
      cta: {
        label: 'Free Trial',
        link: 'https://www.google.com',
        textColor: { light: '#0077b6', dark: '#0077b6' },
        bgColor: { light: '#FFFFFF', dark: '#FFFFFF' },
      },
      ui: {
        textColor: { light: '#0077b6', dark: '#0077b6' },
        bgImg: '/ads/ads-3.svg',
      },
    },
  ],
}
