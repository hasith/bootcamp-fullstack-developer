const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://hasura.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: 'https://hasura.io/learn/',
    title:
      "<a href=''><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/hasith/bootcamp-fullstack-developer',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Edit on GitHub', link: 'https://github.com/hasith/bootcamp-fullstack-developer' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a target='_blank' href='https://slasscom.lk/'>SLASSCOM </a><div class='greenCircle'></div><a target='_blank' href='https://uom.lk/'>UoM</a></a><div class='greenCircle'></div><a target='_blank' href='https://www.dpuni.org/'>DP Uni</a>",
  },
  siteMetadata: {
    title: 'SLASSCOM Bootcamp - Fullstack Developer',
    description:
      'Bootcamp course created for anyone to gain necessary skills to become a fullstack developer',
    ogImage: null,
    docsLocation: 'https://github.com/hasith/bootcamp-fullstack-developer/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'SLASSCOM Bootcamp - Fullstack Developer',
      short_name: 'FsdBootcamp',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
