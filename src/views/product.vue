<template>
  <div class="product">
    <appnav class="mb-4"/>
    <productcomp />
    <footercomp />
  </div>
</template>

<script>
// @ is an alias to /src
import appnav from "../components/nav.vue"
import productcomp from "../components/productcomp.vue"
import footercomp from "../components/footercomp.vue"
export default {
  name: "Home",
  components: {
    appnav,
    productcomp,
    footercomp
  },
};
</script>