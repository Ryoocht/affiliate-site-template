import type { GetSeoMetadataResult } from '~/types/sanity'

export const dummySeoData: GetSeoMetadataResult = [
  {
    seo: {
      headInput: {
        _type: 'headInput',
        title: 'How to Choose the Best Online Casino',
        titleTemplate: '%s | Casino Guide',
        base: {
          _type: 'base',
          href: 'https://www.bestcasinoguide.com',
        },
        link: [
          {
            _type: 'link',
            _key: '1',
            rel: 'canonical',
            href: 'https://www.bestcasinoguide.com/blog/how-to-choose-the-best-online-casino',
          },
          {
            _type: 'link',
            _key: '2',
            rel: 'stylesheet',
            href: 'https://www.bestcasinoguide.com/styles/main.css',
          },
        ],
        meta: [
          {
            _type: 'meta',
            _key: '1',
            name: 'description',
            content:
              'A comprehensive guide to selecting the best online casino for your needs. Learn about the key factors to consider, from game variety to customer support, to ensure a safe and enjoyable gaming experience.',
          },
          {
            _type: 'meta',
            _key: '2',
            name: 'keywords',
            content:
              'online casino, best online casino, casino guide, game variety, customer support, safe gaming, enjoyable gaming',
          },
          {
            _type: 'meta',
            _key: '4',
            property: 'og:title',
            content: 'How to Choose the Best Online Casino',
          },
          {
            _type: 'meta',
            _key: '5',
            property: 'og:description',
            content:
              'A comprehensive guide to selecting the best online casino for your needs. Learn about the key factors to consider, from game variety to customer support, to ensure a safe and enjoyable gaming experience.',
          },
        ],
        style: [
          {
            _type: 'style',
            _key: '1',
            title: 'style',
          },
        ],
        script: [
          {
            _type: 'script',
            _key: '1',
            src: 'https://www.bestcasinoguide.com/scripts/main.js',
            async: true,
          },
        ],
        noscript: [
          {
            _type: 'noscript',
            _key: '1',
            style: 'body: {style here}',
          },
        ],
        htmlAttrs: {
          _type: 'htmlAttrs',
          class: 'htmlarrtrs',
        },
        bodyAttrs: {
          _type: 'bodyAttrs',
          class: 'blog-page',
        },
      },
      seoMetaInput: {
        _type: 'seoMetaInput',
        title: 'How to Choose the Best Online Casino',
        titleTemplate: '%s | Casino Guide',
        metaFlat: {
          _type: 'metaFlat',
          description:
            'A comprehensive guide to selecting the best online casino for your needs. Learn about the key factors to consider, from game variety to customer support, to ensure a safe and enjoyable gaming experience.',
          keywords:
            'online casino, best online casino, casino guide, game variety, customer support, safe gaming, enjoyable gaming',
          robots: {
            _type: 'robots',
            index: true,
            follow: true,
          },
          ogTitle: 'How to Choose the Best Online Casino',
          ogDescription:
            'A comprehensive guide to selecting the best online casino for your needs. Learn about the key factors to consider, from game variety to customer support, to ensure a safe and enjoyable gaming experience.',
          ogUrl:
            'https://www.bestcasinoguide.com/blog/how-to-choose-the-best-online-casino',
          ogType: 'article',
        },
      },
      headOptions: {
        _type: 'headOptions',
        mode: 'server',
        transform: 'function(input) { return input.toUpperCase(); }',
        tagPosition: 'head',
        tagPriority: 'high',
        processTemplateParams: true,
      },
      seoMetaOptions: {
        _type: 'headOptions',
        mode: 'client',
        transform: 'function(input) { return input.toLowerCase(); }',
        tagPosition: 'bodyClose',
        tagPriority: 'low',
        processTemplateParams: false,
      },
    },
  },
]
