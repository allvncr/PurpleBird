import axios from "axios";
import domain from "@/environment";
import Categorie from "@/models/categorie";

const state = {
  categories: [],
  categorieLoading: false,
  categorieRows: 0,
};
const getters = {
  getCategories: (state) => state.categories,
  getCategorieLoading: (state) => state.categorieLoading,
  getCategorieRows: (state) => state.categorieRows,
};
const mutations = {
  DO_NOTHING() {},
  SET_CATEGORIELOADING(state, payload) {
    if (payload) {
      state.categorieLoading = payload;
    } else {
      state.categorieLoading = false;
    }
  },
  SET_CATEGORIES(state, payload) {
    if (payload) {
      state.categories = payload.map((item) => Categorie.create(item));
    } else {
      state.categories = [];
    }
  },
  PUSH_CATEGORIE(state, payload) {
    state.categories.push(payload);
  },
  UPDATE_CATEGORIE_ROW(state, payload) {
    if (payload) {
      state.categorieRows = payload;
    } else {
      state.categorieRows = 0;
    }
  },
};

const actions = {
  async all_categories({ commit }) {
    commit("SET_CATEGORIELOADING", true);
    try {
      const response = await axios.get(domain + `/categories`);
      commit("SET_CATEGORIES", response.data);
      commit("UPDATE_CATEGORIE_ROW", response.data.length);
      commit("SET_CATEGORIELOADING", false);
      return true;
    } catch (error) {
      commit("SET_CATEGORIELOADING", false);
      return error;
    }
  },
};

export default { state, mutations, getters, actions };
