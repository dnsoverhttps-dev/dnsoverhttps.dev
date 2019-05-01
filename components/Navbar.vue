<template lang="pug">
  nav.navbar(role="navigation" aria-label="main navigation")
    .navbar-brand
      nuxt-link.navbar-item(to="/")
        img(src="~/static/icon.svg" alt="DNSoverHTTPS.dev")
        | &nbsp;&nbsp;DNSoverHTTPS.dev
      a.navbar-burger.burger(
          role="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          @click="display = !display"
          :class="{ 'is-active': display }"
        )
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")
    .navbar-menu(
      :class="{ 'is-active': display }"
    )
      .navbar-end
        a.navbar-item(href="#whatis")
          p {{ this.$t('navbar.whatis') }}
        a.navbar-item(href="#clients")
          p {{ this.$t('navbar.clients') }}
        a.navbar-item(href="#server")
          p {{ this.$t('navbar.server') }}
        a.navbar-item(href="#donation")
          p {{ this.$t('navbar.donation') }}
        b-dropdown(position="is-bottom-left" aria-role="menu")
          a.navbar-item(slot="trigger", role="button")
            span Switch Language
            b-icon(icon="menu-down")
          b-dropdown-item(
            aria-role="menu-item"
            custom
            paddingless
            v-for="locale in availableLocales"
            :key="locale.code"
          )
            nuxt-link.navbar-item(
              :to="switchLocalePath(locale.code)"
            ) {{ locale.name }}
</template>

<style lang="scss">
  @media screen and (min-width: 1088px) {
    .navbar-end {
      margin-right: 0.4em;
    }
  }
  
</style>

<script>
export default {
  data () {
    return {
      display: false
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>
