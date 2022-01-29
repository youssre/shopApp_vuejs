<template>
  <div class="home">
    <appnav />
    <homepage />
    <footercomp />
  </div>
</template>

<script>
// @ is an alias to /src
import appnav from "../components/nav.vue";
import homepage from "../components/homepage.vue";
import footercomp from "../components/footercomp.vue";
export default {
  name: "Home",
  components: {
    appnav,
    homepage,
    footercomp
  },
};
</script>
