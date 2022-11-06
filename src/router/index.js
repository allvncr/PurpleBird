import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/card",
    name: "card",
    component: () => import("../views/ShoppingCart.vue"),
    children: [
      {
        path: "/panier",
        name: "panier",
        component: () => import("../views/shopCard.vue"),
      },
      {
        path: "/resume",
        name: "resume",
        component: () => import("../views/resumePage.vue"),
      },
      {
        path: "/checkout",
        name: "checkout",
        component: () => import("../views/checkoutPage.vue"),
      },
    ],
  },

  {
    path: "/categories",
    name: "categories",
    component: () => import("../views/CategoriePage.vue"),
    children: [
      {
        path: ":id",
        name: "produitList",
        component: () => import("../views/CategoriePage.vue"),
      },
    ],
  },
  {
    path: "/**",
    redirect: () => {
      return { path: "/" };
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
