<template>
    <div style="position: fixed;z-index: 10000;background-color:#2d3753" class="d-flex w-100 justify-content-between text-light p-3 align-items-center">
        <div class="" style="font-size:25px">
            <a href="/" class="text-light">
                <i class="fas fa-truck"></i> Ship<span>IT</span>
            </a>
        </div>
        
        <div class="d-md-block d-none">
            <input type="text" class="text form-control" placeholder="Search" aria-label="Search" aria-describedby="addon-wrapping">
        </div>
        <div>
            <ul style="width:200px" class="d-flex justify-content-around">
                <router-link to="/" tag="li" exact>
                    <a href="" class="active" style="color:white;font-size:23px"><i class="fas fa-user-circle"></i></a>
                </router-link>
                <router-link to="" tag="li" >
                    <a href="" style="color:white;font-size:22px;position:relative">
                        <i class="fas fa-bell"></i>
                        <span style="position:absolute;bottom:18px;right:-15px;background-color:#4caf50" class="rounded-circle small text-light badge">2</span>
                    </a>
                </router-link>
                <router-link to="/cart" tag="li">
                    <a href="" style="color:white;font-size:22px;position:relative">
                        <i class="fas fa-cart-plus"></i>
                        <span style="position:absolute;bottom:18px;right:-15px;background-color:#4caf50" class="rounded-circle small text-light badge">2</span>
                    </a>
                </router-link>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
}
.text{
    width:400px;
    background-color:#4f576f;
    color:white
}
.text:focus{
    background-color: white;
}
</style>
