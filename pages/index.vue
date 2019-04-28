<template lang="pug">
  div
    Navbar
    .container(
      style="margin-top: 2em; margin-bottom: 2em;"
    )
      section.section.box#first
        .content
          h1 It's still under construction!
          h1 아직 공사중입니다!
      section.section.box#server
        .content
          h1 Server List
          b-tabs(v-model="activeTab")
            b-tab-item(label="Eastasia NS1")
              p ns1.eastasia.dnsoverhttps.dev
              p 198.13.50.6
            b-tab-item(label="Comming Soon!" disabled)
      section.section.box#donation
        .content
          h1 donation

          a.button.is-large.patreon.is-focused(
            href="https://www.patreon.com/dnsoverhttps"
            target="_blank"
          ) BECOME A PATRON
    Footer
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
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
</style>
