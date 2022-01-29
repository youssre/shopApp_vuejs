<template>
    <div class="cart">
        <div class="container">
            <div class="row">
                <h1 class="lead d-1 text-center p-4" style="color:black;font-size:60px">SHOPPING CART</h1>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <table class="table">
                        <tr>
                            <td>Item</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <img class="rounded-circle" style="width:80px;height:80px" :src="images.slide1" alt="">
                                <span>Lorem Ipsom</span>
                            </td>
                            <td>40$</td>
                            <td>
                                <input type="number" value="1" name="" id="" class="w-25 rounded">
                            </td>
                            <td>80$</td>
                            <td>X</td>
                        </tr>
                        <tr>
                            <td>
                                <img class="rounded-circle" style="width:80px;height:80px" :src="images.slide1" alt="">
                                <span>Lorem Ipsom</span>
                            </td>
                            <td>40$</td>
                            <td>
                                <input type="number" value="1" name="" id="" class="w-25 rounded">
                            </td>
                            <td>80$</td>
                            <td>X</td>
                        </tr>
                    </table>
                </div>
                <div class="col-md-4" style="padding-left:40px">
                    <div class="card  " style="background-color: #d3d3d3">
                        <div class="card-body d-flex flex-column justify-content-center align-items-center">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <table class="table bg-white text-center rounded">
                                <tr>
                                    <td>Order Subtotal</td>
                                    <td>$160.00</td>
                                </tr>
                                <tr>
                                    <td>Shipping Charges</td>
                                    <td>$10.00</td>
                                </tr>
                                <tr>
                                    <td>Tax</td>
                                    <td>$5.00</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>$175.00</td>
                                </tr>
                            </table>
                            <a href="#" class="btn btn-secondary" style="background-color:#2d3753">PROCEED TO PAY</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"cartcomp",
    data(){
        return{
            images:{
                slide1: require("../assets/img/home/slider1.jpg"),
                slide2: require("../assets/img/home/slider2.jpg"),
            }
        }
    }
}
</script>
<style>
    table tr td{
        padding: 10px;
    }
</style>