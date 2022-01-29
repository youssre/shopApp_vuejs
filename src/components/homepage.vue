<template>
  <div class="row" style="padding: 0; margin: 0">
    <div
      id="carouselExampleIndicators"
      class="carousel slide w-100"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner" style="height: 500px">
        <div class="carousel-item active">
          <img
            :src="images.slide1"
            class="d-block w-100 image-fluid"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img :src="images.slide2" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img :src="images.slide3" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img :src="images.slide4" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>

  <div class="row  my-3" style="margin: 0">
    <div class="col-md-6 mt-3 text-center " style="position: relative">
      <img class="img-fluid rounded" :src="images.slide2" alt="" />
      <div style="position: absolute; top: 40%; left: 40%">
        <h2 style="color: white">Top Picks</h2>
        <a href="/shop" class="btn btn-outline-light">SHOP NOW</a>
      </div>
    </div>
    <div class="col-md-6 mt-3 text-center" style="position: relative">
      <img class="img-fluid rounded" :src="images.slide3" alt="" />
      <div style="position: absolute; top: 40%; left: 40%">
        <h2 class="text-center" style="color: white">New Arrivels</h2>
        <a href="/shop" class="btn btn-outline-light">SHOP NOW</a>
      </div>
    </div>
  </div>

  <div class="row my-3" style="margin: 0">
    <div class="col-md-4 mt-3 text-center" style="position: relative">
      <img
        class="img-fluid rounded w-100"
        style="height: 320px"
        :src="images.img2"
        alt=""
      />
      <div style="position: absolute; top: 28%; left: 20%">
        <h2 style="color: white; font-size:40px">Lorem & Ipsum</h2>
        <a href="/shop" class="text-light h4">SHOP NOW <i class="fas fa-arrow-right px-1"></i></a>
      </div>
    </div>
    <div class="col-md-4 mt-3 text-center" style="position: relative">
      <img
        class="img-fluid rounded w-100"
        style="height: 320px"
        :src="images.img3"
        alt=""
      />
      <div style="position: absolute; top: 28%; left: 20%">
        <h2 style="color: white; font-size:40px">Lorem & Ipsum</h2>
        <a href="/shop" class="text-light h4">SHOP NOW <i class="fas fa-arrow-right px-1"></i></a>
      </div>
    </div>
    <div class="col-md-4 mt-3 text-center" style="position: relative">
      <img
        class="img-fluid rounded w-100"
        style="height: 320px"
        :src="images.img4"
        alt=""
      />
      <div style="position: absolute; top: 28%;left:20%">
        <h2 style="color: white; font-size:40px;text-align:center">Lorem & Ipsum</h2>
        <a href="/shop" class="text-light h4">SHOP NOW <i class="fas fa-arrow-right px-1"></i></a>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row my-5 ">
        <div class="col-md-3 col-sm-12 card explore d-flex flex-column align-items-center">
            <div style="position:relative" class="height:200px">
                <img class="card-img-top" :src="images.img1" alt="">
                <h3 style="position:absolute;bottom:0" class="text-center text-light px-2">Bags & Purses</h3>
            </div>
            <p class="text-secondary text-center py-2">
                Upto 60% + Extra 10% <br> Baggit, Zara, Fossil
            </p>
            <button class="btn btn-outline-dark justify-content-center">EXPLORE</button>
        </div>
              
         <div class="col-md-3 col-sm-12 card explore d-flex flex-column align-items-center">
            <div style="position:relative" class="height:200px">
                <img class="card-img-top" :src="images.img2" alt="">
                <h3 style="position:absolute;bottom:0" class="text-center text-light px-2">T-SHIRT</h3>
            </div>
            <p class="text-secondary text-center py-2">
                Upto 60% + Extra 10% <br> Baggit, Zara, Fossil
            </p>
            <button class="btn btn-outline-dark justify-content-center">EXPLORE</button>
        </div>
        
        <div class="col-md-3 col-sm-12 card explore d-flex flex-column align-items-center">
            <div style="position:relative" class="height:200px">
                <img class="card-img-top" :src="images.img3" alt="">
                <h3 style="position:absolute;bottom:0" class="text-center text-light px-2">Jeans</h3>
            </div>
            <p class="text-secondary text-center py-2">
                Upto 60% + Extra 10% <br> Baggit, Zara, Fossil
            </p>
            <button class="btn btn-outline-dark justify-content-center">EXPLORE</button>
        </div>
         <div class="col-md-3 col-sm-12 card explore d-flex flex-column align-items-center">
            <div style="position:relative" class="height:200px">
                <img class="card-img-top" :src="images.img4" alt="">
                <h3 style="position:absolute;bottom:0" class="text-center text-light px-2">Shoes</h3>
            </div>
            <p class="text-secondary text-center py-2">
                Upto 60% + Extra 10% <br> Baggit, Zara, Fossil
            </p>
            <button class="btn btn-outline-dark justify-content-center">EXPLORE</button>
        </div>
      

        
    </div>
  </div>
</template>
<script>
export default {
  name: "homepage",
  data() {
    return {
      images: {
        slide1: require("../assets/img/home/slider1.jpg"),
        slide2: require("../assets/img/home/slider2.jpg"),
        slide3: require("../assets/img/home/slider3.jpg"),
        slide4: require("../assets/img/home/slider4.jpg"),

        img1: require("../assets/img/home/deal1.jpg"),
        img2: require("../assets/img/home/deal2.jpg"),
        img3: require("../assets/img/home/deal3.jpg"),
        img4: require("../assets/img/home/deal4.jpg"),
        img5: require("../assets/img/shop/5.jpg"),
        img6: require("../assets/img/shop/3.jpg"),
      },
    };
  },
};
</script>

<style scoped>
a{
  text-decoration: none;
}
.carousel img {
  top: 0;
  left: 0;
  min-width: 100%;
  height: 550px;
  max-height: 550px;
  width: auto;
}
.explore .card-img-top{
    height: 200px;
}
.btn-outline-dark:hover,.btn-outline-light:hover{
    background-color: transparent;
    color: white;
}
.explore{
    transition: all 1s;
    padding-bottom: 10px;
    box-shadow: 0px 0px 4px #222;
    min-width: 150px;
}

.explore:hover{
    box-shadow: 0px 0px 15px #222;
    transform: scale(1.05);
    
}


</style>
