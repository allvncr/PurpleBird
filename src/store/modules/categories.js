import axios from "axios";
import domain from "@/environment";

const state = {
  categories: [
    {
      id: 1,
      lib: "textile",
    },
    {
      id: 2,
      lib: "HIGH TECH",
    },
    {
      id: 3,
      lib: "Maison",
    },
    {
      id: 4,
      lib: "Accessoires",
    },
  ],
  categorieLoading: false,
  categorieRows: 4,
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
      state.categories = payload;
    } else {
      state.categories = false;
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
  
  async all_clients({ commit }, payload) {
    commit("SET_CATEGORIELOADING", true);
    const params = {
      page: payload.page,
      per_page: payload.per_page,
      search: payload.search,
    };
    try {
      const responce = await axios.get(domain + `/categories`, {
        params,
      });

      commit("SET_CATEGORIES", responce.data.data.data);
      commit("UPDATE_CATEGORIE_ROW", responce.data.data.total);
      commit("SET_CATEGORIELOADING", false);
      return true;
    } catch (error) {
      commit("SET_CATEGORIELOADING", false);
      return error;
    }
  },
};

export default { state, mutations, getters, actions };
