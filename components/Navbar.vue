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
        a.navbar-item
          p test1
        a.navbar-item
          p test2
</template>

<style lang="scss">

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
