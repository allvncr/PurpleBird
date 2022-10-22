import Vue from "vue";
import Vuex from "vuex";
import { createStore } from "vuex-extensions";
import categories from "./modules/categories";
import produits from "./modules/produits";
// import axios from "axios";
// import domain from "@/environment";

Vue.use(Vuex);

export default createStore(Vuex.Store, {
  state: {},
  mutations: {},
  actions: {},

  getters: {},
  modules: {
    categories,
    produits
  },
});
