<template lang="pug">
  div
    section.section.box#donation
      .content
        h1 {{ this.$t('navbar.donation') }}

        a.button.is-large.patreon.is-focused(
          href="https://www.patreon.com/dnsoverhttps"
          target="_blank"
        ) BECOME A PATRON
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
