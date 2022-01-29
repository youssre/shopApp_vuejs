<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
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
          <div class="carousel-inner" >
            <div class="carousel-item active">
              <img :src="images.slide1" class="d-block w-100" alt="..." />
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
      <div class="col-md-6" style="margin-left: 40px">
        <div class="row">
          <nav aria-label="breadcrumb py-3">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a style="text-decoration: none; color: #2d3753" href="#"
                  >Home</a
                >
              </li>
              <li class="breadcrumb-item">
                <a style="text-decoration: none; color: #2d3753" href="#"
                  >Clothing</a
                >
              </li>
              <li
                class="breadcrumb-item active"
                style="color: gray"
                aria-current="page"
              >
                T-Shirts
              </li>
            </ol>
          </nav>
        </div>
        <div class="row">
          <h2 class="py-2">Modern Black T-Shirt</h2>
          <div class="d-flex justify-content-between">
            <p class="lead" style="color: #666; font-size: 22px">
              $65.00
              <span style="font-size: 17px; text-decoration: line-through"
                >$80.00</span
              >
            </p>
            <div style="font-size: 20px">
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="far fa-star text-warning"></i>
              <span class="lead mx-2" style="font-size: 16px">25 REVIEWS</span>
            </div>
          </div>
          <p style="line-height: 1.7; color: rgba(0, 0, 0, 0.87)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales
            ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi
            tristique senectus et netus et malesuada.
          </p>
          <h4 class="py-3">SIZE</h4>
          <div class="d-flex gap-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                XS
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                S
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                M
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                L
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault5"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                XL
              </label>
            </div>
          </div>
          <h4 class="py-3">Item</h4>
          <div class="py-3">
            <input class="input-form w-25" type="text" value="1" id="" />
          </div>
          <div class="d-flex gap-3 py-3">
            <button style="background-color:#2d3753" class="btn btn-primary text-light">
              <i class="fas fa-cart-plus"></i> ADD TO CART
            </button>
            <button class="btn btn-outline-dark">ADD TO WISHLIST</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row my-5">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-secondary active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            DESCRIPTION
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-secondary"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            MATERIALS
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link text-secondary"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            REVIEWS
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies
          mi eget mauris pharetra et. Vel pretium lectus quam id leo in vitae
          turpis massa. Orci dapibus ultrices in iaculis nunc. At auctor urna
          nunc id cursus metus. Integer feugiat scelerisque varius morbi enim
          nunc. Aliquam sem et tortor consequat id porta nibh venenatis cras.
          Pellentesque pulvinar pellentesque habitant morbi tristique senectus
          et netus. Malesuada nunc vel risus commodo viverra maecenas. Neque
          volutpat ac tincidunt vitae semper quis
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies
          mi eget mauris pharetra et. Vel pretium lectus quam id leo in vitae
          turpis massa. Orci dapibus ultrices in iaculis nunc. At auctor urna
          nunc id cursus metus. Integer feugiat scelerisque varius morbi enim
          nunc. Aliquam sem et tortor consequat id porta nibh venenatis cras.
          Pellentesque pulvinar pellentesque habitant morbi tristique senectus
          et netus. Malesuada nunc vel risus commodo viverra maecenas. Neque
          volutpat ac tincidunt vitae semper quis
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div class="row">
            <div class="d-flex align-items-center gap-4">
              <img
                :src="images.slide1"
                class="rounded-circle"
                height="60"
                width="60"
                alt=""
              />
              <div>
                <p style="margin: 0; color: #444">Lorem ipsum dolor?</p>
                <div>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="far fa-star text-warning"></i>
                </div>
                <p class="text-secondary">
                  <span style="color: #444">Ali Connors</span> — Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Nisl
                  tincidunt eget nullam non. Tincidunt arcu non sodales neque
                  sodales ut etiam. Lectus arcu bibendum at varius vel pharetra.
                </p>
              </div>
            </div>
            <div class="d-flex align-items-center gap-4">
              <img
                :src="images.slide2"
                class="rounded-circle"
                height="60"
                width="60"
                alt=""
              />
              <div>
                <p style="margin: 0; color: #444">Lorem ipsum dolor?</p>
                <div>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="far fa-star text-warning"></i>
                </div>
                <p class="text-secondary">
                  <span style="color: #444">Ali Connors</span> — Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Nisl
                  tincidunt eget nullam non. Tincidunt arcu non sodales neque
                  sodales ut etiam. Lectus arcu bibendum at varius vel pharetra.
                </p>
              </div>
            </div>
            <div class="d-flex align-items-center gap-4">
              <img
                :src="images.slide3"
                class="rounded-circle"
                height="60"
                width="60"
                alt=""
              />
              <div>
                <p style="margin: 0; color: #444">Lorem ipsum dolor?</p>
                <div>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="far fa-star text-warning"></i>
                </div>
                <p class="text-secondary">
                  <span style="color: #444">Ali Connors</span> — Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Nisl
                  tincidunt eget nullam non. Tincidunt arcu non sodales neque
                  sodales ut etiam. Lectus arcu bibendum at varius vel pharetra.
                </p>
              </div>
            </div>
            <div class="d-flex align-items-center gap-4 mb-3">
              <img
                :src="images.slide4"
                class="rounded-circle"
                height="60"
                width="60"
                alt=""
              />
              <div>
                <p style="margin: 0; color: #444">Lorem ipsum dolor?</p>
                <div>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="far fa-star text-warning"></i>
                </div>
                <p class="text-secondary">
                  <span style="color: #444">Ali Connors</span> — Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Nisl
                  tincidunt eget nullam non. Tincidunt arcu non sodales neque
                  sodales ut etiam. Lectus arcu bibendum at varius vel pharetra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-1">
        <p class="lead text-center">YOU MIGHT ALSO LIKE</p>
    </div>
    <hr>
    <div class="row my-5 ">

        <div class="col-md-2 col-sm-12 card explore d-flex flex-column align-items-center">
            <div style="position:relative" class="height:200px">
                <img class="card-img-top" :src="images.img1" alt="">
                <h3 style="position:absolute;bottom:0" class="text-center text-light px-2">Bags & Purses</h3>
            </div>
            <p class="text-secondary text-center py-2">
                Upto 60% + Extra 10% <br> Baggit, Zara, Fossil
            </p>
            <button class="btn btn-outline-dark justify-content-center">EXPLORE</button>
        </div>
              
         <div class="col-md-2 col-sm-12 card explore d-flex flex-column align-items-center">
            <div style="position:relative" class="height:200px">
                <img class="card-img-top" :src="images.img2" alt="">
                <h3 style="position:absolute;bottom:0" class="text-center text-light px-2">T-SHIRT</h3>
            </div>
            <p class="text-secondary text-center py-2">
                Upto 60% + Extra 10% <br> Baggit, Zara, Fossil
            </p>
            <button class="btn btn-outline-dark justify-content-center">EXPLORE</button>
        </div>
        
        <div class="col-md-2 col-sm-12 card explore d-flex flex-column align-items-center">
            <div style="position:relative" class="height:200px">
                <img class="card-img-top" :src="images.img3" alt="">
                <h3 style="position:absolute;bottom:0" class="text-center text-light px-2">Jeans</h3>
            </div>
            <p class="text-secondary text-center py-2">
                Upto 60% + Extra 10% <br> Baggit, Zara, Fossil
            </p>
            <button class="btn btn-outline-dark justify-content-center">EXPLORE</button>
        </div>
         <div class="col-md-2 col-sm-12 card explore d-flex flex-column align-items-center">
            <div style="position:relative" class="height:200px">
                <img class="card-img-top" :src="images.img4" alt="">
                <h3 style="position:absolute;bottom:0" class="text-center text-light px-2">Shoes</h3>
            </div>
            <p class="text-secondary text-center py-2">
                Upto 60% + Extra 10% <br> Baggit, Zara, Fossil
            </p>
            <button class="btn btn-outline-dark justify-content-center">EXPLORE</button>
        </div>
         <div class="col-md-2 col-sm-12 card explore d-flex flex-column align-items-center">
            <div style="position:relative" class="height:200px">
                <img class="card-img-top" :src="images.img5" alt="">
                <h3 style="position:absolute;bottom:0" class="text-center text-light px-2">Jackets</h3>
            </div>
            <p class="text-secondary text-center py-2">
                Upto 60% + Extra 10% <br> Baggit, Zara, Fossil
            </p>
            <button class="btn btn-outline-dark justify-content-center">EXPLORE</button>
        </div>
        <div class="col-md-2 col-sm-12 card explore d-flex flex-column align-items-center">
            <div style="position:relative" class="height:200px">
                <img class="card-img-top" :src="images.img6" alt="">
                <h3 style="position:absolute;bottom:0" class="text-center text-light px-2">Shirts</h3>
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
  name: "productcomp",
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
        img5: require("../assets/img/shop/3.jpg"),
        img6: require("../assets/img/shop/5.jpg"),
        
      },
    };
  },
};
</script>

<style scoped>
.explore .card-img-top{
    height: 200px;
}
.nav-item .active {
  text-decoration: underline;
  color: #2d3753;
}
.btn-outline-dark:hover{
    background-color: transparent;
    color: black;
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
.row>*{
    padding-right: 0;
    padding-left: 0;
}

</style>
