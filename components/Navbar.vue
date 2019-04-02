<template lang="pug">
  nav.navbar(role="navigation" aria-label="main navigation")
    .navbar-brand
      nuxt-link.navbar-item(to="/")
        img(src="~/static/icon.svg" alt="DNSoverHTTPS.dev" height="40" width="40")
      a.navbar-burger.burger(role="button" aria-label="menu" aria-expanded="false" data-target="navbar")
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")
    .navbar-menu#navbar
      .navbar-start
        a.navbar-item
          p test1
        a.navbar-item
          p test2
</template>

<style lang="scss">

</style>

<script>
export default {
    
}
</script>
