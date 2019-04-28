<template lang="pug">
  div
    Navbar
    .content
      p Hello World!
      h1 It's still under construction!
      h1 아직 공사중입니다!
    Footer
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
  .content {
    min-height: 15em;
  }
</style>
