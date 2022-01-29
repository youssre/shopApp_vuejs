<template>
    <ul class="d-flex justify-content-center align-items-center" style="padding: 20px 0;box-shadow: 3px 0px 10px #444">
        <router-link to="/" tag="li" class="mx-3" exact>
            <a href="" class="active text-secondary">Home</a>
        </router-link>
        <router-link to="/shop" class="mx-3" tag="li">
            <a href="" class="text-secondary one">Shop</a>
        </router-link>
        <router-link to="/product" class="mx-3" tag="li">
            <a href="" class="text-secondary">Product</a>
        </router-link>
        <router-link to="/blog" class="mx-3" tag="li">
            <a href="" class="text-secondary">Blog</a>
        </router-link>
    </ul>

</template>

<script>
export default {
    name: 'nav'
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    list-style: none;
}
ul li a{
    color: #333;
}
.text-secondary{
    padding: 10px;
}
.text-secondary:hover{
    background-color: whitesmoke;
}


</style>