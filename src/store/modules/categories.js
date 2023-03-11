import axios from "axios";
import domain from "@/environment";
import Categorie from "@/models/categorie";

const state = {
  categories: [],
  Souscategories: [],
  InfoSouscategories: [],
  colors: [],
  sizes: [],
  categorieLoading: false,
  categorieRows: 0,
};
const getters = {
  getCategories: (state) =>
    state.categories.sort((a, b) => {
      return a.lib.localeCompare(b.lib);
    }),
  getSousCategories: (state) => state.Souscategories,
  getInfoSousCategories: (state) => state.InfoSouscategories,
  getCategorieLoading: (state) => state.categorieLoading,
  getCategorieRows: (state) => state.categorieRows,
  getAllColors: (state) => state.colors,
  getAllSizes: (state) => state.sizes,
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
  SET_SOUSCATEGORIES(state, payload) {
    if (payload) {
      state.Souscategories = payload;
    } else {
      state.Souscategories = [];
    }
  },
  SET_INFOSOUSCATEGORIES(state, payload) {
    if (payload) {
      state.InfoSouscategories = payload;
    } else {
      state.InfoSouscategories = [];
    }
  },
  SET_COLORS(state, payload) {
    if (payload) {
      state.colors = payload;
    } else {
      state.colors = [];
    }
  },
  SET_SIZES(state, payload) {
    if (payload) {
      state.sizes = payload;
    } else {
      state.sizes = [];
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
  async all_subcategories({ commit }, payload) {
    commit("SET_CATEGORIELOADING", true);
    try {
      const response = await axios.get(
        domain + `/categories/subcategories/` + payload
      );
      commit("SET_SOUSCATEGORIES", response.data);
      commit("SET_CATEGORIELOADING", false);
      return true;
    } catch (error) {
      commit("SET_CATEGORIELOADING", false);
      return error;
    }
  },
  async all_infosubcategories({ commit }, payload) {
    commit("SET_CATEGORIELOADING", true);
    try {
      const response = await axios.get(
        domain + `/subcategories/infosubcategories/` + payload
      );
      commit("SET_INFOSOUSCATEGORIES", response.data);
      commit("SET_CATEGORIELOADING", false);
      return true;
    } catch (error) {
      commit("SET_CATEGORIELOADING", false);
      return error;
    }
  },
  async all_colors({ commit }) {
    commit("SET_CATEGORIELOADING", true);
    try {
      const response = await axios.get(domain + `/products/colors`);
      commit("SET_COLORS", response.data);
      commit("SET_CATEGORIELOADING", false);
      return true;
    } catch (error) {
      commit("SET_CATEGORIELOADING", false);
      return error;
    }
  },
  async all_sizes({ commit }) {
    commit("SET_CATEGORIELOADING", true);
    try {
      const response = await axios.get(domain + `/products/sizes`);
      commit("SET_SIZES", response.data);
      commit("SET_CATEGORIELOADING", false);
      return true;
    } catch (error) {
      commit("SET_CATEGORIELOADING", false);
      return error;
    }
  },
};

export default { state, mutations, getters, actions };
