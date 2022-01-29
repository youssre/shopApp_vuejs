<template>
  <div class="cart">
    <appnav />
    <cartcomp />
    <footercomp />
  </div>
</template>

<script>
import appnav from "../components/nav.vue";
import cartcomp from "../components/cartcomp.vue";
import footercomp from "../components/footercomp.vue";
export default {
  name: "cart",
  components: {
    appnav,
    cartcomp,
    footercomp
  },
};
</script>