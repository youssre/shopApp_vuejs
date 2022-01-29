<template>
  <div>
    <appheader />
    <appnav />
    <router-view />
  </div>
</template>
<script>
import appheader from "./components/Header.vue"
import appnav from "./components/nav.vue"
export default {
  components:{
    appheader,
    appnav
  }
}
</script>
<style lang="scss">

</style>
