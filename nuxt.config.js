const parseArgs = require('minimist')

const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
})

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  "3000"
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  "localhost"

module.exports = {
  env: {
    baseUrl:
      process.env.BASE_URL || `http://${host}:${port}`
  },
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
    '@nuxtjs/google-adsense',
    '@nuxtjs/google-analytics',
    'nuxt-buefy',
    'nuxt-rfg-icon',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'ko',
          iso: 'ko-KR',
          file: 'ko.js',
          name: '한국어'
        }, {
          code: 'en',
          iso: 'en-US',
          file: 'en.js',
          name: 'English'
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

