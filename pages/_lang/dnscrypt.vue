<template lang="pug">
  div
    section.section.box#server
      .content
        h1 {{ this.$t('navbar.server') }}
        b-tabs(v-model="activeTab")
          b-tab-item(label="EA ns1")
            SecureDNS(
              :domain="'ns1.eastasia.dnsoverhttps.dev'"
              :ip="'198.13.50.6'"
              :protocol="'sdns://AgEAAAAAAAAACzE5OC4xMy41MC42AB1uczEuZWFzdGFzaWEuZG5zb3Zlcmh0dHBzLmRldgovZG5zLXF1ZXJ5'"
            )
          b-tab-item(label="Comming Soon!" disabled)
</template>

<script>
import SecureDNS from '~/components/SecureDNS'

import buildmeta from '~/assets/buildmeta'

export default {
  components: {
    SecureDNS
  },
  head () {
    const title = 'DNSoverHTTPS.dev'
    const { meta, link } = buildmeta({
      title,
      url: 'https://dnsoverhttps.dev/',
      siteName: this.$t('OG.siteName'),
      desc: this.$t('OG.desc'),
      image: null,
      width: null,
      height: null,
      author: 'small_sunshine',
      twitterCreator: null
    }, [
      { hid: 'theme-color', name: 'theme-color', content: '#82BF97' }
    ], null)

    return { title, meta, link }
  },
  data () {
    return {
      activeTab: 0
    }
  }
}
</script>

<style lang="scss">
  .content {
    min-height: 15em;
  }

  .patreon {
    background-color: #E7513B;
    color: #ffffff;
    border-radius: 40px;

    &:focus, &.is-focused {
      box-shadow: none !important;
      color: #ffffff !important;
      border-color: #a0a0a0 !important;
    }
  }

  .ad {
    margin-top: 0.8em;
    margin-bottom: 0.8em;
    width: 100%;
    min-height: 60px;
    position: relative;
  }
  .ad p {
      font-size: 0.8em;
      margin: 0;
      position: absolute;
      bottom: 0;
      right: 0;
      margin-right: 4em;
  }
</style>
