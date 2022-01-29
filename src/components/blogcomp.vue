<template>
    <div class="container">
        <div class="row">
            <h1 class="lead d-1 text-center p-4" style="color:black;font-size:60px">Read About Fashion</h1>
        </div>
        <div class="d-flex justify-content-between gap-3">
            <a href="/post">
                <div class="card px-0 my-3">
                    <img class="card-img-top " style="height:350px" :src="images.slide2" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title text-secondary">lorem ipsom</h5>
                        <p class="card-text text-dark">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore a eaque fugiat neque quis. Et natus quidem mollitia obcaecati delectus. Sint numquam nihil incidunt eligendi id harum enim cupiditate animi.</p>
                        <a href="/post" class="h4 text-warning">Read More</a>
                    </div>
                </div>
            </a>
            <a href="/post" style="">
                <div class="card px-0 my-3">
                    <img class="card-img-top " style="height:350px" :src="images.slide3" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title text-secondary">lorem ipsom</h5>
                        <p class="card-text text-dark">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore a eaque fugiat neque quis. Et natus quidem mollitia obcaecati delectus. Sint numquam nihil incidunt eligendi id harum enim cupiditate animi.</p>
                        <a href="/post" class="h4 text-warning">Read More</a>
                    </div>
                </div>
            </a>
            <a href="/post">
                <div class="card px-0 my-3">
                    <img class="card-img-top " style="height:350px" :src="images.slide4" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title text-secondary">lorem ipsom</h5>
                        <p class="card-text text-dark">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore a eaque fugiat neque quis. Et natus quidem mollitia obcaecati delectus. Sint numquam nihil incidunt eligendi id harum enim cupiditate animi.</p>
                        <a href="/post" class="h4 text-warning">Read More</a>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "blogcomp",
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
<style>
    *,a{
        text-decoration: none;
    }
    a:focus{
        color: gray;
    }
</style>