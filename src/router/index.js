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
    path: "/produit/:id",
    name: "produitDetail",
    component: () => import("../views/produitDetail.vue"),
  },
  {
    path: "/qui-sommes-nous",
    name: "quiSommeNous",
    component: () => import("../views/aboutUs.vue"),
  },
  {
    path: "/savoir-faire",
    name: "savoirFaire",
    component: () => import("../views/savoirFaire.vue"),
  },
  {
    path: "/presentation",
    name: "equipe",
    component: () => import("../views/theTeam.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/contactUs.vue"),
  },
  {
    path: "/catalogue",
    name: "catalogue",
    component: () => import("../views/cataloguePage.vue"),
  },
  {
    path: "/cgu",
    name: "condition utilisation",
    component: () => import("../views/conditionUtilisation.vue"),
  },
  {
    path: "/cgv",
    name: "condition de vente",
    component: () => import("../views/conditionVente.vue"),
  },
  {
    path: "/pdc",
    name: "politique de confidentialité",
    component: () => import("../views/politiqueConfidentialite.vue"),
  },
  {
    path: "/recrutement",
    name: "recrutement",
    component: () => import("../views/recrutement.vue"),
  },
  {
    path: "/candidatures",
    name: "candidatures",
    component: () => import("../views/candidaturePage.vue"),
  },
  {
    path: "/candidature-spontannee",
    name: "candidature-spontannée",
    component: () => import("../views/candidatureSpontannee.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/adminLogin.vue"),
    meta: { disableHeader: true },
  },
  {
    path: "/admin/home",
    name: "admin home",
    component: () => import("../views/admin/adminHome.vue"),
    meta: { disableHeader: true },
  },
  {
    path: "/admin/:obj",
    name: "admin object",
    component: () => import("../views/admin/objectDetail.vue"),
    meta: { disableHeader: true },
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
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   }
  //   return { left: 0, top: 0 };
  // },
});

export default router;
