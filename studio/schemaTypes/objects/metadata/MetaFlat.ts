import { defineField, defineType } from 'sanity'

export const metaFlat = defineType({
  name: 'metaFlat',
  title: 'Meta Flat',
  description: 'Combined metadata for SEO purposes.',
  type: 'object',
  fields: [
    defineField({
      name: 'charset',
      title: 'Character Set',
      description:
        "This attribute declares the document's character encoding.\
      If the attribute is present, its value must be an ASCII case-insensitive match for the string 'utf-8',\
      because UTF-8 is the only valid encoding for HTML5 documents.\
      `<meta>` elements which declare a character encoding must be located entirely within the first 1024 bytes\
      of the document.\
      @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset",
      type: 'string',
      options: {
        list: [{ title: 'UTF-8', value: 'utf-8' }],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description:
        'Use this tag to provide a short description of the page.\
      In some situations, this description is used in the snippet shown in search results.\
      @see https://developers.google.com/search/docs/advanced/appearance/snippet#meta-descriptions',
      type: 'string',
    }),
    defineField({
      name: 'colorScheme',
      title: 'Color Scheme',
      description:
        "Specifies one or more color schemes with which the document is compatible.\
     The browser will use this information in tandem with the user's browser or device settings to determine what colors\
     to use for everything from background and foregrounds to form controls and scrollbars.\
     The primary use for `<meta name='color-scheme'>` is to indicate compatibility with—and order of preference\
     for—light and dark color modes.\
     @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#normal",
      type: 'string',
      options: {
        list: [
          { title: 'Normal', value: 'normal' },
          { title: 'Light Dark', value: 'light dark' },
          { title: 'Dark Light', value: 'dark light' },
          { title: 'Only Light', value: 'only light' },
        ],
      },
    }),
    defineField({
      name: 'applicationName',
      title: 'Application Name',
      description:
        'The name of the application running in the web page.\
     Uses:\
        - When adding the page to the home screen.\
     @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      description:
        "The name of the document's author.\
      @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name",
      type: 'string',
    }),
    defineField({
      name: 'creator',
      title: 'Creator',
      description:
        'The name of the creator of the document, such as an organization or institution.\
          @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#other_metadata_names',
      type: 'string',
    }),
    defineField({
      name: 'publisher',
      title: 'Publisher',
      description:
        "The name of the document's publisher.\
          @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#other_metadata_names",
      type: 'string',
    }),
    defineField({
      name: 'generator',
      title: 'Generator',
      description:
        'The identifier of the software that generated the page.\
          @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification',
      type: 'string',
    }),
    defineField({
      name: 'referrer',
      title: 'Referrer',
      description:
        'Controls the HTTP Referer header of requests sent from the document.\
          @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification',
      type: 'string',
      options: {
        list: [
          { title: 'No Referrer', value: 'no-referrer' },
          {
            title: 'No Referrer When Downgrade',
            value: 'no-referrer-when-downgrade',
          },
          { title: 'Same Origin', value: 'same-origin' },
          { title: 'Origin', value: 'origin' },
          { title: 'Strict Origin', value: 'strict-origin' },
          {
            title: 'Origin When Cross Origin',
            value: 'origin-when-cross-origin',
          },
          {
            title: 'Strict Origin When Cross Origin',
            value: 'strict-origin-when-cross-origin',
          },
          { title: 'Unsafe URL', value: 'unsafe-url' },
        ],
      },
    }),
    defineField({
      name: 'viewport',
      title: 'Viewport',
      description:
        'Controls how the page is rendered on a mobile device.\
          @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_other_specifications',
      type: 'viewport',
    }),
    defineField({
      name: 'robots',
      title: 'Robots Meta',
      type: 'robots',
    }),
    defineField({
      name: 'google',
      title: 'Google Special Tags',
      type: 'string',
      description:
        "Special meta tag for controlling Google's indexing behavior.\
          @see https://developers.google.com/search/docs/crawling-indexing/special-tags",
      options: {
        list: [
          { title: 'No Sitelinks Search Box', value: 'nositelinkssearchbox' },
          { title: 'No Page Read Aloud', value: 'nopagereadaloud' },
        ],
      },
    }),
    defineField({
      name: 'googlebot',
      title: 'Googlebot Settings',
      type: 'string',
      description:
        'Control how Google indexing works specifically for the googlebot crawler.\
          @see https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag',
      options: {
        list: [
          { title: 'Do Not Translate', value: 'notranslate' },
          { title: 'Do Not Index Images', value: 'noimageindex' },
          { title: 'Do Not Archive', value: 'noarchive' },
          { title: 'Do Not Display Snippet', value: 'nosnippet' },
          { title: 'Max Snippet Length', value: 'max-snippet' },
          { title: 'Max Image Preview', value: 'max-image-preview' },
          { title: 'Max Video Preview', value: 'max-video-preview' },
        ],
      },
    }),
    defineField({
      name: 'googlebotNews',
      title: 'Googlebot News Settings',
      type: 'string',
      description:
        'Control how Google indexing works specifically for the googlebot-news crawler.\
          @see https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag',
      options: {
        list: [
          { title: 'No Index', value: 'noindex' },
          { title: 'No Snippet', value: 'nosnippet' },
          { title: 'Do Not Translate', value: 'notranslate' },
          { title: 'Do Not Index Images', value: 'noimageindex' },
        ],
      },
    }),
    defineField({
      name: 'googleSiteVerification',
      title: 'Google Site Verification',
      description:
        'You can use this tag on the top-level page of your site to verify ownership for Search Console.\
      @see https://developers.google.com/search/docs/crawling-indexing/special-tags',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'string',
      description:
        'Labels a page as containing adult content, to signal that it be filtered by SafeSearch results.\
          @see https://developers.google.com/search/docs/advanced/guidelines/safesearch',
      options: {
        list: [{ title: 'Adult', value: 'adult' }],
      },
    }),
    defineField({
      name: 'ogUrl',
      title: 'OG URL',
      type: 'string',
      description: `
          The canonical URL for your page.
          @see https://ogp.me/#metadata
        `,
    }),

    defineField({
      name: 'ogTitle',
      title: 'OG Title',
      type: 'string',
      description: `
          The title of your page without any branding such as your site name.
          @see https://ogp.me/#metadata
        `,
    }),

    defineField({
      name: 'ogDescription',
      title: 'OG Description',
      type: 'string',
      description: `
          A brief description of the content, usually between 2 and 4 sentences.
          @see https://ogp.me/#optional
        `,
    }),

    defineField({
      name: 'ogType',
      title: 'OG Type',
      type: 'string',
      description: `
          The type of media of your content. This tag impacts how your content shows up in Feed.
          @see https://ogp.me/#metadata
        `,
      options: {
        list: [
          { title: 'Website', value: 'website' },
          { title: 'Article', value: 'article' },
          { title: 'Book', value: 'book' },
          { title: 'Profile', value: 'profile' },
          { title: 'Music - Song', value: 'music.song' },
          { title: 'Music - Album', value: 'music.album' },
          { title: 'Music - Playlist', value: 'music.playlist' },
          { title: 'Music - Radio Status', value: 'music.radio_status' },
          { title: 'Video - Movie', value: 'video.movie' },
          { title: 'Video - Episode', value: 'video.episode' },
          { title: 'Video - TV Show', value: 'video.tv_show' },
          { title: 'Video - Other', value: 'video.other' },
        ],
      },
    }),

    defineField({
      name: 'ogLocale',
      title: 'OG Locale',
      type: 'string',
      description: `
          The locale of the resource. Defaults to en_US.
          @see https://ogp.me/#optional
        `,
    }),

    defineField({
      name: 'ogLocaleAlternate',
      title: 'OG Alternate Locales',
      type: 'array',
      of: [{ type: 'string' }],
      description: `
          An array of other locales this page is available in.
          @see https://ogp.me/#optional
        `,
    }),

    defineField({
      name: 'ogDeterminer',
      title: 'OG Determiner',
      type: 'string',
      description: `
          The word that appears before this object's title in a sentence.
          @see https://ogp.me/#optional
        `,
      options: {
        list: [
          { title: 'A', value: 'a' },
          { title: 'An', value: 'an' },
          { title: 'The', value: 'the' },
          { title: 'None', value: '' },
          { title: 'Auto', value: 'auto' },
        ],
      },
    }),

    defineField({
      name: 'ogSiteName',
      title: 'OG Site Name',
      type: 'string',
      description: `
          If your object is part of a larger website, the name which should be displayed for the overall site.
          @see https://ogp.me/#optional
        `,
    }),

    defineField({
      name: 'ogVideo',
      title: 'OG Video',
      type: 'string',
      description: `
          The URL for the video. If you want the video to play in-line in Feed, use the https:// URL if possible.
          @see https://ogp.me/#type_video
        `,
    }),

    defineField({
      name: 'ogVideoUrl',
      title: 'OG Video URL',
      type: 'string',
      description: `
          Equivalent to og:video
          @see https://ogp.me/#type_video
        `,
    }),

    defineField({
      name: 'ogVideoSecureUrl',
      title: 'OG Video Secure URL',
      type: 'string',
      description: `
          Secure URL for the video. Include this even if you set the secure URL in og:video.
          @see https://ogp.me/#type_video
        `,
    }),

    defineField({
      name: 'ogVideoType',
      title: 'OG Video Type',
      type: 'string',
      description: `
          MIME type of the video.
          @see https://ogp.me/#type_video
        `,
      options: {
        list: [
          { title: 'Flash', value: 'application/x-shockwave-flash' },
          { title: 'MP4', value: 'video/mp4' },
        ],
      },
    }),

    defineField({
      name: 'ogVideoWidth',
      title: 'OG Video Width',
      type: 'number',
      description: `
          Width of video in pixels. This property is required for videos.
          @see https://ogp.me/#type_video
        `,
    }),

    defineField({
      name: 'ogVideoHeight',
      title: 'OG Video Height',
      type: 'number',
      description: `
          Height of video in pixels. This property is required for videos.
          @see https://ogp.me/#type_video
        `,
    }),

    defineField({
      name: 'ogVideoAlt',
      title: 'OG Video Alt',
      type: 'string',
      description: `
          A text description of the video.
          @see https://ogp.me/#type_video
        `,
    }),

    defineField({
      name: 'ogImage',
      title: 'OG Image',
      type: 'string',
      description: `
          The URL of the image that appears when someone shares the content.
          @see https://developers.facebook.com/docs/sharing/webmasters#images
        `,
    }),

    defineField({
      name: 'ogImageUrl',
      title: 'OG Image URL',
      type: 'string',
      description: `
          Equivalent to og:image
          @see https://developers.facebook.com/docs/sharing/webmasters#images
        `,
    }),

    defineField({
      name: 'ogImageSecureUrl',
      title: 'OG Image Secure URL',
      type: 'string',
      description: `
          https:// URL for the image
          @see https://developers.facebook.com/docs/sharing/webmasters#images
        `,
    }),

    defineField({
      name: 'ogImageType',
      title: 'OG Image Type',
      type: 'string',
      description: `
          MIME type of the image.
          @see https://developers.facebook.com/docs/sharing/webmasters#images
        `,
      options: {
        list: [
          { title: 'JPEG', value: 'image/jpeg' },
          { title: 'GIF', value: 'image/gif' },
          { title: 'PNG', value: 'image/png' },
        ],
      },
    }),

    defineField({
      name: 'ogImageWidth',
      title: 'OG Image Width',
      type: 'number',
      description: `
          Width of image in pixels. Specify height and width for your image to ensure that the image loads properly the first time it's shared.
          @see https://developers.facebook.com/docs/sharing/webmasters#images
        `,
    }),

    defineField({
      name: 'ogImageHeight',
      title: 'OG Image Height',
      type: 'number',
      description: `
          Height of image in pixels. Specify height and width for your image to ensure that the image loads properly the first time it's shared.
          @see https://developers.facebook.com/docs/sharing/webmasters#images
        `,
    }),

    defineField({
      name: 'ogImageAlt',
      title: 'OG Image Alt',
      type: 'string',
      description: `
          A description of what is in the image (not a caption). If the page specifies an og:image, it should specify og:image:alt.
          @see https://developers.facebook.com/docs/sharing/webmasters#images
        `,
    }),

    defineField({
      name: 'ogAudio',
      title: 'OG Audio',
      type: 'string',
      description: `
          The URL for an audio file to accompany this object.
          @see https://ogp.me/#optional
        `,
    }),

    defineField({
      name: 'ogAudioUrl',
      title: 'OG Audio URL',
      type: 'string',
      description: `
          Equivalent to og:audio
          @see https://ogp.me/#optional
        `,
    }),

    defineField({
      name: 'ogAudioSecureUrl',
      title: 'OG Audio Secure URL',
      type: 'string',
      description: `
          Secure URL for the audio. Include this even if you set the secure URL in og:audio.
          @see https://ogp.me/#optional
        `,
    }),

    defineField({
      name: 'ogAudioType',
      title: 'OG Audio Type',
      type: 'string',
      description: `
          MIME type of the audio.
          @see https://ogp.me/#optional
        `,
      options: {
        list: [
          { title: 'MP3', value: 'audio/mpeg' },
          { title: 'OGG', value: 'audio/ogg' },
          { title: 'WAV', value: 'audio/wav' },
        ],
      },
    }),
    defineField({
      name: 'fbAppId',
      title: 'Facebook App ID',
      type: 'string',
      description: `
          Your Facebook app ID.
          @see https://developers.facebook.com/docs/sharing/webmasters#basic
        `,
    }),
    defineField({
      name: 'twitterCard',
      title: 'Twitter Card',
      type: 'string',
      options: {
        list: [
          { title: 'Summary', value: 'summary' },
          { title: 'Summary Large Image', value: 'summary_large_image' },
          { title: 'App', value: 'app' },
          { title: 'Player', value: 'player' },
        ],
      },
    }),

    defineField({
      name: 'twitterTitle',
      title: 'Twitter Title',
      type: 'string',
      description: `
          Title of content (max 70 characters)
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
        `,
      validation: Rule =>
        Rule.max(70).warning('Should be maximum 70 characters.'),
    }),

    defineField({
      name: 'twitterDescription',
      title: 'Twitter Description',
      type: 'string',
      description: `
          Description of content (maximum 200 characters)
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
        `,
      validation: Rule =>
        Rule.max(200).warning('Should be maximum 200 characters.'),
    }),

    defineField({
      name: 'twitterImage',
      title: 'Twitter Image',
      type: 'string',
      description: `
          URL of image to use in the card.
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
        `,
    }),

    defineField({
      name: 'twitterImageAlt',
      title: 'Twitter Image Alt',
      type: 'string',
      description: `
          A text description of the image conveying the essential nature of an image to users who are visually impaired.
          @maxLength 420
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
        `,
      validation: Rule =>
        Rule.max(420).warning('Should be maximum 420 characters.'),
    }),

    defineField({
      name: 'twitterSite',
      title: 'Twitter Site',
      type: 'string',
      description: `
          The @username of website. Either twitter:site or twitter:site:id is required.
          @example @harlan_zw
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterSiteId',
      title: 'Twitter Site ID',
      type: 'string',
      description: `
          Same as twitter:site, but the user’s Twitter ID. Either twitter:site or twitter:site:id is required.
          @example 1296047337022742529
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterCreator',
      title: 'Twitter Creator',
      type: 'string',
      description: `
          The @username who created the pages content.
          @example harlan_zw
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterCreatorId',
      title: 'Twitter Creator ID',
      type: 'string',
      description: `
          Twitter user ID of content creator.
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterPlayer',
      title: 'Twitter Player',
      type: 'string',
      description: `
          HTTPS URL of player iframe.
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterPlayerWidth',
      title: 'Twitter Player Width',
      type: 'number',
      description: `
          Width of iframe in pixels.
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterPlayerHeight',
      title: 'Twitter Player Height',
      type: 'number',
      description: `
          Height of iframe in pixels.
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterPlayerStream',
      title: 'Twitter Player Stream',
      type: 'string',
      description: `
          URL to raw video or audio stream.
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterAppNameIphone',
      title: 'Twitter App Name iPhone',
      type: 'string',
      description: `
          Name of your iPhone app.
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterAppIdIphone',
      title: 'Twitter App ID iPhone',
      type: 'string',
      description: `
          Your app ID in the iTunes App Store.
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterAppUrlIphone',
      title: 'Twitter App URL iPhone',
      type: 'string',
      description: `
          Your app’s custom URL scheme (you must include ”://” after your scheme name).
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterAppNameIpad',
      title: 'Twitter App Name iPad',
      type: 'string',
      description: `
          Name of your iPad optimized app.
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterAppIdIpad',
      title: 'Twitter App ID iPad',
      type: 'string',
      description: `
          Your app ID in the iTunes App Store.
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterAppUrlIpad',
      title: 'Twitter App URL iPad',
      type: 'string',
      description: `
          Your app’s custom URL scheme.
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterAppNameGoogleplay',
      title: 'Twitter App Name Google Play',
      type: 'string',
      description: `
          Name of your Android app.
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterAppIdGoogleplay',
      title: 'Twitter App ID Google Play',
      type: 'string',
      description: `
          Your app ID in the Google Play Store.
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterAppUrlGoogleplay',
      title: 'Twitter App URL Google Play',
      type: 'string',
      description: `
          Your app’s custom URL scheme.
          @see https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
        `,
    }),

    defineField({
      name: 'twitterData1',
      title: 'Twitter Data 1',
      type: 'string',
      description: `
          Top customizable data field, can be a relatively short string (ie “$3.99”).
          @see https://api.slack.com/reference/messaging/link-unfurling#classic_unfurl
        `,
    }),

    defineField({
      name: 'twitterLabel1',
      title: 'Twitter Label 1',
      type: 'string',
      description: `
          Customizable label or units for the information in twitter:data1 (best practice: use all caps).
          @see https://api.slack.com/reference/messaging/link-unfurling#classic_unfurl
        `,
    }),

    defineField({
      name: 'twitterData2',
      title: 'Twitter Data 2',
      type: 'string',
      description: `
          Bottom customizable data field, can be a relatively short string (ie “Seattle, WA”).
          @see https://api.slack.com/reference/messaging/link-unfurling#classic_unfurl
        `,
    }),

    defineField({
      name: 'twitterLabel2',
      title: 'Twitter Label 2',
      type: 'string',
      description: `
          Customizable label or units for the information in twitter:data2 (best practice: use all caps).
          @see https://api.slack.com/reference/messaging/link-unfurling#classic_unfurl
        `,
    }),
    defineField({
      name: 'themeColor',
      title: 'Theme Color',
      type: 'string',
      description: `
          Indicates a suggested color that user agents should use to customize the display of the page or
          of the surrounding user interface.
          @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name
          @example \`#4285f4\` or \`{ color: '#4285f4', media: '(prefers-color-scheme: dark)'}\`
        `,
    }),

    defineField({
      name: 'mobileWebAppCapable',
      title: 'Mobile Web App Capable',
      type: 'string',
      description: `
          Sets whether a web application runs in full-screen mode.
        `,
    }),

    defineField({
      name: 'appleMobileWebAppCapable',
      title: 'Apple Mobile Web App Capable',
      type: 'string',
      description: `
          Sets whether a web application runs in full-screen mode.
          @see https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
        `,
    }),

    defineField({
      name: 'appleMobileWebAppStatusBarStyle',
      title: 'Apple Mobile Web App Status Bar Style',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Black', value: 'black' },
          { title: 'Black Translucent', value: 'black-translucent' },
        ],
      },
      description: `
          Sets the style of the status bar for a web application.
          @see https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
        `,
    }),

    defineField({
      name: 'appleMobileWebAppTitle',
      title: 'Apple Mobile Web App Title',
      type: 'string',
      description: `
          Make the app title different from the page title.
        `,
    }),

    defineField({
      name: 'appleItunesApp',
      title: 'Apple iTunes App',
      type: 'string',
      description: `
          Promoting Apps with Smart App Banners
          @see https://developer.apple.com/documentation/webkit/promoting_apps_with_smart_app_banners
        `,
    }),

    defineField({
      name: 'formatDetection',
      title: 'Format Detection',
      type: 'string',
      description: `
          Enables or disables automatic detection of possible phone numbers in a webpage in Safari on iOS.
          @see https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
        `,
    }),

    defineField({
      name: 'msapplicationTileImage',
      title: 'MS Application Tile Image',
      type: 'string',
      description: `
          Tile image for windows.
          @see https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)
        `,
    }),

    defineField({
      name: 'msapplicationTileColor',
      title: 'MS Application Tile Color',
      type: 'string',
      description: `
          Tile colour for windows
          @see https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)
        `,
    }),

    defineField({
      name: 'msapplicationConfig',
      title: 'MS Application Config',
      type: 'string',
      description: `
          URL of a config for windows tile.
          @see https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)
        `,
    }),

    defineField({
      name: 'contentSecurityPolicy',
      title: 'Content Security Policy',
      type: 'string',
      description: `
          Content Security Policy settings.
        `,
    }),

    defineField({
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      description: `
          Content type declaration.
        `,
    }),

    defineField({
      name: 'defaultStyle',
      title: 'Default Style',
      type: 'string',
      description: `
          Default style settings.
        `,
    }),

    defineField({
      name: 'xUaCompatible',
      title: 'X-UA-Compatible',
      type: 'string',
      description: `
          X-UA-Compatible settings.
        `,
    }),

    defineField({
      name: 'refresh',
      title: 'Refresh',
      type: 'string',
      description: `
          Refresh settings.
        `,
    }),

    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
      description: `
          A comma-separated list of keywords - relevant to the page (Legacy tag used to tell search engines what the page is about).
          @deprecated the "keywords" metatag is no longer used.
          @see https://web.dev/learn/html/metadata/#keywords
        `,
    }),
    /* These 3 fields below need to be flattened */
    defineField({
      name: 'articleMetadata',
      title: 'Article Metadata',
      description: 'Metadata specific to articles.',
      type: 'metaFlatArticle',
    }),
    defineField({
      name: 'bookMetadata',
      title: 'Book Metadata',
      description: 'Metadata specific to books.',
      type: 'metaFlatBook',
    }),
    defineField({
      name: 'profileMetadata',
      title: 'Profile Metadata',
      description: 'Metadata specific to profiles.',
      type: 'metaFlatProfile',
    }),
  ],
})
