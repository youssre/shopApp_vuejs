<template>
  <div class="blog">
    <appnav />
    <blogcomp />
    <div class="row" style="background-color:#2d3753;margin: 0; padding: 20px 0">
        <div class="col-md-12 d-flex justify-content-center gap-5 h4 py-2">
            <a href="" style="padding:10px"><i class="fas fa-home text-light"></i></a>
            <a href="" style="padding:10px"><i class="fas fa-envelope text-light"></i></a>
            <a href="" style="padding:10px"><i class="fas fa-calendar-week text-light"></i></a>
            <a href="" style="padding:10px"><i class="fas fa-trash text-light"></i></a>
        </div>
        <div class="col-md-12 text-center text-light py-2">
            <p>Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
                 Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. 
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </div>
        <br>

        <div class="col-md-12 text-center text-light  py-2">
            <p>2021 - <span class="h5">ShipIT</span></p>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import appnav from "../components/nav.vue"
import blogcomp from "../components/blogcomp.vue"
//import footercomp from "../components/footercomp.vue"
export default {
  name: "Home",
  components: {
    appnav,
    blogcomp,
    //footercomp
  },
};
</script>