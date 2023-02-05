import axios from "axios";
import domain from "@/environment";
import Product from "@/models/product";

const state = {
  produit: null,
  produits: [],
  produitRows: 0,
  produitLoading: false,
};
const getters = {
  getProduit: (state) => state.produit,
  getProduits: (state) => state.produits,
  getProduitRows: (state) => state.produitRows,
  getProduitLoading: (state) => state.produitLoading,
};
const mutations = {
  DO_NOTHING() {},
  SET_PRODUCTLOADING(state, payload) {
    if (payload) {
      state.produitLoading = payload;
    } else {
      state.produitLoading = false;
    }
  },
  SET_PRODUCT(state, payload) {
    if (payload) {
      // state.produit = payload.map((item) => Product.create(item));
      state.produit = payload;
    } else {
      state.produit = [];
    }
  },
  SET_PRODUCTS(state, payload) {
    if (payload) {
      state.produits = payload.map((item) => Product.create(item));
    } else {
      state.produits = [];
    }
  },
  PUSH_PRODUCT(state, payload) {
    state.produits.push(payload);
  },
  UPDATE_PRODUCT_ROW(state, payload) {
    if (payload) {
      state.produitRows = payload;
    } else {
      state.produitRows = 0;
    }
  },
};

const actions = {
  async all_products({ commit }, payload) {
    commit("SET_PRODUCTLOADING", true);
    const params = {
      name: payload.search,
      category: payload.categorie,
      min: payload.min,
      max: payload.max,
      sort: payload.sort,
    };
    try {
      const response = await axios.get(domain + `/products`, {
        params,
      });

      commit("SET_PRODUCTS", response.data);
      commit("UPDATE_PRODUCT_ROW", response.data.length);
      commit("SET_PRODUCTLOADING", false);
      return true;
    } catch (error) {
      commit("SET_PRODUCTLOADING", false);
      return error;
    }
  },

  async one_product({ commit }, payload) {
    commit("SET_PRODUCTLOADING", true);
    try {
      const response = await axios.get(
        domain + `/products/single-product/` + payload.id,
        {}
      );
      commit("SET_PRODUCT", response.data);
      commit("SET_PRODUCTLOADING", false);
      return true;
    } catch (error) {
      commit("SET_PRODUCTLOADING", false);
      return error;
    }
  },
  async candidature({ commit }, payload) {
    commit("DO_NOTHING", true);
    try {
      await axios.post(domain + `/candidates`, payload);
      return true;
    } catch (error) {
      return error;
    }
  },
};

export default { state, mutations, getters, actions };
