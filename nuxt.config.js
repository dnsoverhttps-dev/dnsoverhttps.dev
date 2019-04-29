module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'DNSoverHTTPS.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'dnsoverhttps.dev homepage' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  // loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        }, {
          test: /\.pug$/,
          loader: 'pug-plain-loader',
          options: {
            data: {}
          }
        })
      }
    }
  },
  modules: [
    ['@nuxtjs/google-adsense'],
    ['@nuxtjs/google-analytics'],
    ['nuxt-buefy'],
    'nuxt-rfg-icon',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'ko',
          iso: 'ko-KR',
          file: 'ko.js'
        }, {
          code: 'en',
          iso: 'en-US',
          file: 'en.js'
        }],
      defaultLocale: 'ko',
      lazy: true,
      langDir: 'locales/',
      detectBrowserLanguage: {
        useCookie: true
      }
    }]
  ],
  'google-adsense': {
    id: 'ca-pub-2810659463174293',
    pageLevelAds: false,
    analyticsUacct: 'UA-137351275-1',
    analyticsDomainName: 'dnsoverhttps.dev'
  },
  'google-analytics': {
    id: 'UA-137351275-1'
  },
  sitemap: {
    path: '/sitemap.xml'
  },
  generate: {
    routes: [
      '/en',
      '/ko'
    ]
  }
}

