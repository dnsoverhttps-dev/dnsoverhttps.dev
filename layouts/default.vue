<template lang="pug">
  div(style="background-color: #C1E7E3;")
    Navbar
    .container(
      style="margin-top: 2em; margin-bottom: 2em;"
    )
      .ad
        <!-- dnsoverhttps-banner -->
        adsbygoogle(ad-slot="1478756253")
        p google AD
      nuxt
      .ad
          <!-- dnsoverhttps-banner -->
          adsbygoogle(ad-slot="1478756253")
          p google AD
    Footer
</template>

<script>
import cookie from 'vue-cookie'

import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  mounted() {
    if (process.browser) {
      if (cookie.get('i18n_redirected') !== '1') {
        const lang = navigator.language.toLocaleLowerCase().substring(0, 2)
        cookie.set('i18n_redirected', '1')
        this.$router.push(this.switchLocalePath(lang))
      }
    }
  }
}
</script>


<style lang="scss">
  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";

  // Set your colors
  $primary: hsl(171, 100%, 41%);
  $primary-invert: findColorInvert($primary);
  $twitter: #4099FF;
  $twitter-invert: findColorInvert($twitter);

  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
      "white": ($white, $black),
      "black": ($black, $white),
      "light": ($light, $light-invert),
      "dark": ($dark, $dark-invert),
      "primary": ($primary, $primary-invert),
      "info": ($info, $info-invert),
      "success": ($success, $success-invert),
      "warning": ($warning, $warning-invert),
      "danger": ($danger, $danger-invert),
      "twitter": ($twitter, $twitter-invert)
  );

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>
