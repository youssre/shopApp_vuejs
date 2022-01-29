<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <h4 style="color:#444">Filters</h4>
                        </li>
                        <li class="list-group-item">
                            <details style="color:#444;font-size:20px">
                                <summary>Shoes</summary>
                                <div class="row">
                                    <div>
                                        <div class="list-group" id="list-tab" role="tablist">
                                        <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#" role="tab" aria-controls="home">Formal</a>
                                        <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#" role="tab" aria-controls="profile">Clissic</a>
                                        <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#" role="tab" aria-controls="messages">Clissic</a>
                                        </div>
                                    </div>
                                    
                                </div>

                            </details>
                            <details class="py-2" style="color:#444;font-size:20px">
                                <summary>Clothing</summary>
                                <div class="row">
                                    <div>
                                        <div class="list-group" id="list-tab" role="tablist">
                                        <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#" role="tab" aria-controls="home">Formal</a>
                                        <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#" role="tab" aria-controls="profile">Clissic</a>
                                        <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#" role="tab" aria-controls="messages">Clissic</a>
                                        </div>
                                    </div>
                                    
                                </div>

                            </details>
                        </li>
                        <li class="list-group-item">
                            <h4 style="color:#444">Price</h4>
                            <input class="w-100 my-2" v-model="text" type="range" id="points" name="points" min="0" max="10000">
                            <div class="d-flex justify-content-between">
                                <input class="input-form py-1" :value="text" style="width:40%" type="text">
                                <span class="lead">TO</span>
                                <input class="input-form " style="width:40%" type="text" value="10000">
                            </div>
                        </li>
                        <li class="list-group-item">
                            <h4 style="color:#444">Customer Rating</h4>
                            <div class="d-flex flex-column justify-content-between">
                                <div class="d-flex align-items-center my-2">
                                    <input type="checkbox" class="display-2 mx-1">  <label for="" class="lead">4 & Above</label>
                                    <i class="fas fa-star text-secondary ms-5"></i>
                                </div>
                                <div class="d-flex align-items-center my-2">
                                    <input type="checkbox" class="display-2 mx-1">  <label for="" class="lead">3 & Above</label>
                                    <i class="fas fa-star text-secondary ms-5"></i>
                                </div>
                                <div class="d-flex align-items-center my-2">
                                    <input type="checkbox" class="display-2 mx-1">  <label for="" class="lead">2 & Above</label>
                                    <i class="fas fa-star text-secondary ms-5"></i>
                                </div>
                                <div class="d-flex align-items-center my-2">
                                    <input type="checkbox" class="display-2 mx-1">  <label for="" class="lead">1 & Above</label>
                                    <i class="fas fa-star text-secondary ms-5"></i>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <h4 style="color:#444">Size</h4>
                            <div class="d-flex flex-column">
                                <div class="my-2">
                                     <input type="checkbox" class="display-2 mx-1">  <label for="" class="lead">XS</label>
                                </div>
                                <div class="my-2">
                                     <input type="checkbox" class="display-2 mx-1">  <label for="" class="lead">S</label>
                                </div>
                                <div class="my-2">
                                     <input type="checkbox" class="display-2 mx-1">  <label for="" class="lead">M</label>
                                </div>
                                <div class="my-2">
                                     <input type="checkbox" class="display-2 mx-1">  <label for="" class="lead">L</label>
                                </div>
                                <div class="my-2">
                                     <input type="checkbox" class="display-2 mx-1">  <label for="" class="lead">XL</label>
                                </div>
                                <div class="my-2">
                                     <input type="checkbox" class="display-2 mx-1">  <label for="" class="lead">XXL</label>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-8 offset-md-1">
                <div class="row">
                    <nav aria-label="breadcrumb py-3">
                        <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a style="text-decoration: none; color: #2d3753" href="/"
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
                    <div class="d-flex justify-content-between">
                        <p class="lead" style="color: #444; font-size: 15px">
                            Showing 1-12 of 200 products
                        </p>
                        <div class="form-group w-50">
                            <select class="form-control">
                                <option selected>Choose</option>
                                <option>option 1</option>
                                <option>option 2</option>
                                <option>option 3</option>
                                <option>option 4</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr>

                <div class="row mt-4">
                    <div class="card col-md-3 col-xs-12 text-center mt-3" v-for="product in products" :key="product.id">
                        <div class="card-header" style="padding:0;position: relative;">
                            <img :src="product.src" height="200" class="card-img-top" alt="...">
                            <h4 class="text-light" style="position:absolute;bottom:5px;padding: 5px">{{product.type}}</h4>
                            <div class=" overlay">
                                <a href="/product" class="btn btn-outline-dark">View</a>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title" style="color:#444">{{product.name}}</h5>
                            <p class="card-text lead">{{product.price}}</p>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination text-center justify-content-center gap-3 align-items-center">
                            <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "shopcomp",
        data: () => ({
            text: "0",
            page:1,


            products:[
                {
                    id:1,
                    name:'BLACK TEE',
                    type:'Jackets',
                    price:'$18.00',
                    src:require('../assets/img/shop/1.jpg')
                },
                {
                    id:2,
                    name:'WHITE TEE',
                    type:'Polo',
                    price:'$40.00',
                    src:require('../assets/img/shop/2.jpg')
                },
                {
                    id:3,
                    name:'Zara limited...',
                    type:'Denim',
                    price:'$25.00',
                    src:require('../assets/img/shop/3.jpg')
                },
                {
                    id:4,
                    name:'SKULL TEE',
                    type:'Jackets',
                    price:'$30.00',
                    src:require('../assets/img/shop/4.jpg')
                },
                {
                    id:5,
                    name:'MANGO WINTER',
                    type:'Sweaters',
                    price:'$50.00',
                    src:require('../assets/img/shop/5.jpg')
                },
                {
                    id:6,
                    name:'SHIRT',
                    type:'Denim',
                    price:'$34.00',
                    src:require('../assets/img/shop/6.jpg')
                },
                {
                    id:7,
                    name:'TRUCKER JACKET',
                    type:'Jackets',
                    price:'$38.00',
                    src:require('../assets/img/shop/7.jpg')
                },
                {
                    id:8,
                    name:'COATS',
                    type:'Jackets',
                    price:'$25.00',
                    src:require('../assets/img/shop/8.jpg')
                },{
                    id:9,
                    name:'MANGO WINTER',
                    type:'Sweaters',
                    price:'$50.00',
                    src:require('../assets/img/shop/9.jpg')
                },
                {
                    id:10,
                    name:'SHIRT',
                    type:'Denim',
                    price:'$34.00',
                    src:require('../assets/img/shop/10.jpg')
                },
                {
                    id:11,
                    name:'TRUCKER JACKET',
                    type:'Jackets',
                    price:'$38.00',
                    src:require('../assets/img/shop/11.jpg')
                },
                {
                    id:12,
                    name:'COATS',
                    type:'Jackets',
                    price:'$25.00',
                    src:require('../assets/img/shop/12.jpg')
                }
            ]
        }),
    }
</script>
<style scoped>
    .btn-outline-dark:hover{
        background-color: transparent;
        color: white;
    }
    .overlay {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
    }


    .row .col-md-4{
        padding: 0;

    }
    .card-img-top {
        width: 100%;
        object-fit: cover;
        opacity: 1;
        display: block;
        transition: .5s ease;
        backface-visibility: hidden;
    }
    .card-header:hover .card-img-top{
        opacity: 0.3;
    }
    .card-header:hover .overlay{
        opacity: 1;
    } 
</style>