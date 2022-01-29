<template>
    <div class="container">
        <div class="row">
            <h1 class="lead d-1 text-center p-4" style="color:black;font-size:60px">Best brands for fashion</h1>
            <p class="small text-center py-2">BY <span class="h6">JOHN DOE</span> | JANUARY 24,2020</p>
        </div>
        <div class="row">
            <img :src="images.slide2"  class="img-fluid w-100"  style="height:450px" alt="">
        </div>
        <div class="row">
            <h2 class="py-3">Lorem ipsum</h2>
        </div>
        <div class="row">
            <p class="text-secondary py-2" style="line-height:1.7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul inside  class="text-secondary" style="line-height:1.7">
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
            <p class="text-secondary py-2" style="line-height:1.7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div class="row">
            <img :src="images.slide3"  class="img-fluid w-100"  style="height:450px" alt="">
        </div>
        <div class="row">
            <h2 class="py-3">Lorem ipsum</h2>
        </div>
        <div class="row">
            <p class="text-secondary py-2" style="line-height:1.7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p class="text-secondary py-2" style="line-height:1.7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>

        <div class="row">
            <h4 class="lead my-4">3 COMMENTS</h4>
            <div class="d-flex align-items-center gap-4">
                <img :src="images.slide1" class="rounded-circle" height="60" width="60" alt="">
                <div>
                    <p style="margin:0;color:#444">Lorem ipsum dolor?</p>
                    <div>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="far fa-star text-warning"></i>
                    </div>
                    <p class="text-secondary"><span style="color:#444">Ali Connors</span>  — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. 
                        Lectus arcu bibendum at varius vel pharetra.</p>
                </div>
            </div>
            <div class="d-flex align-items-center gap-4">
                <img :src="images.slide2" class="rounded-circle" height="60" width="60" alt="">
                <div>
                    <p style="margin:0;color:#444">Lorem ipsum dolor?</p>
                    <div>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="far fa-star text-warning"></i>
                    </div>
                    <p class="text-secondary"><span style="color:#444">Ali Connors</span>  — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. 
                        Lectus arcu bibendum at varius vel pharetra.</p>
                </div>
            </div>
            <div class="d-flex align-items-center gap-4">
                <img :src="images.slide3" class="rounded-circle" height="60" width="60" alt="">
                <div>
                    <p style="margin:0;color:#444">Lorem ipsum dolor?</p>
                    <div>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="far fa-star text-warning"></i>
                    </div>
                    <p class="text-secondary"><span style="color:#444">Ali Connors</span>  — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. 
                        Lectus arcu bibendum at varius vel pharetra.</p>
                </div>
            </div>
            <div class="d-flex align-items-center gap-4 mb-3">
                <img :src="images.slide4" class="rounded-circle" height="60" width="60" alt="">
                <div>
                    <p style="margin:0;color:#444">Lorem ipsum dolor?</p>
                    <div>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="far fa-star text-warning"></i>
                    </div>
                    <p class="text-secondary"><span style="color:#444">Ali Connors</span>  — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. 
                        Lectus arcu bibendum at varius vel pharetra.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "postcomp",
    data(){
        return{
            images:{
                slide1: require("../assets/img/home/slider1.jpg"),
                slide2: require("../assets/img/home/slider2.jpg"),
                slide3: require("../assets/img/home/slider3.jpg"),
                slide4: require("../assets/img/home/slider4.jpg"),
            }
        }
    }
}
</script>

<style scoped>
    ul{
        list-style:inside
    }
</style>