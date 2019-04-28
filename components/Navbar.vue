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
        a.navbar-item(href="#first")
          p test1
        a.navbar-item(href="#server")
          p server
        a.navbar-item(href="#donation")
          p donation
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
  }
}
</script>
