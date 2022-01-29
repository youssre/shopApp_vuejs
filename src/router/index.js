import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "shop",

    component: () =>
      import("../views/shop.vue"),
  },
  {
    path: "/cart",
    name: "cart",

    component: () =>
      import("../views/cart.vue"),
  },
  {
    path: "/product",
    name: "product",

    component: () =>
      import("../views/product.vue"),
  },
  {
    path: "/blog",
    name: "blog",

    component: () =>
      import("../views/blog.vue"),
  },
  {
    path: "/post",
    name: "post",

    component: () =>
      import("../views/post.vue"),
  },
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
