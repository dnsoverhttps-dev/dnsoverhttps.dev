<template lang="pug">
  div.box
    b-tabs(v-model="activeType")
      b-tab-item(label="DoH")
        p {{ domain }}
        p {{ ip }}
      b-tab-item(label="DoT")
        p {{ domain }}
      b-tab-item(label="Dnscrypt")
        p {{ protocol }}
</template>

<script>
export default {
  props: [
    'ip',
    'domain',
    'protocol'
  ],
  data () {
    return {
      activeType: 0
    }
  }
}
</script>
