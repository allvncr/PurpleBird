import Vue from "vue";
import Vuex from "vuex";
import { createStore } from "vuex-extensions";
import categories from "./modules/categories";
import produits from "./modules/produits";
import panier from "./modules/panier";

Vue.use(Vuex);

export default createStore(Vuex.Store, {
  state: {},
  mutations: {},
  actions: {},

  getters: {},
  modules: {
    categories,
    produits,
    panier,
  },
});
