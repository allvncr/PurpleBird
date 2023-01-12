import axios from "axios";
import Pays from "../../models/pays";

const state = {
  panier: localStorage.getItem("panier")
    ? JSON.parse(localStorage.getItem("panier"))
    : [],
  form: localStorage.getItem("form")
    ? JSON.parse(localStorage.getItem("form"))
    : {},
  minio: localStorage.getItem("minio")
    ? JSON.parse(localStorage.getItem("minio"))
    : null,
  pays: [],
  orderLoading: false
};
const getters = {
  getPanier: (state) => state.panier,
  getForm: (state) => state.form,
  getPanierRows: (state) => state.panier.length,
  getMinio: (state) => state.minio,
  getPays: (state) => state.pays,
  getOrderLoading: (state) => state.orderLoading
};
const mutations = {
  DO_NOTHING() {},
  SET_PANIER(state) {
    localStorage.setItem("panier", JSON.stringify(state.panier));
  },
  SET_FORM(state, payload) {
    state.form = payload;
    localStorage.setItem("form", JSON.stringify(payload));
  },
  ADD_PRODUCT(state, payload) {
    if (payload) {
      state.panier.push(payload);
    }
  },
  REMOVE_PRODUCT(state, payload) {
    state.panier.splice(payload, 1);
  },
  UPDATE_PRODUCT(state, payload) {
    if (payload) {
      state.categorieRows = payload;
    } else {
      state.categorieRows = 0;
    }
  },
  UPDATE_PANIER_ROW(state, payload) {
    if (payload) {
      state.panierRows = payload;
    } else {
      state.panierRows = 0;
    }
  },
  SET_MINIO(state, payload) {
    if (payload) {
      localStorage.setItem("minio", JSON.stringify(payload));
    }
  },
  SET_PAYS(state, payload) {
    if (payload) {
      state.pays = payload.map((item) => Pays.create(item));
      state.pays = state.pays.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    } else {
      state.pays = [];
    }
  },
  SET_ORDERLOADING(state, payload){
    if (payload) {
      state.orderLoading = payload;
    } else {
      state.orderLoading = false;
    }
  }
};

const actions = {
  add_product({ commit }, payload) {
    commit("ADD_PRODUCT", payload);
    commit("SET_PANIER");
    return true;
  },
  add_form({ commit }, payload) {
    commit("SET_FORM", payload);
    return true;
  },
  remove_product({ commit }, payload) {
    commit("REMOVE_PRODUCT", payload);
    commit("SET_PANIER");
    return true;
  },

  async post_monio({ commit }, payload) {
    try {
      const response = await axios.post(
        `http://192.168.1.20:8080/minio/upload/`,
        payload,
        {}
      );

      commit("SET_MINIO", response.data);
      return true;
    } catch (error) {
      return error;
    }
  },

  async all_pays({ commit }) {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/all?fields=name,translations`
      );

      commit("SET_PAYS", response.data);
      return true;
    } catch (error) {
      return error;
    }
  },

  async create_order({ commit }, payload) {
    commit("SET_ORDERLOADING", true);
    try {
      await axios.post(`http://192.168.1.20:8080/orders/estimate`, payload);

      commit("SET_ORDERLOADING", false);
      return true;
    } catch (error) {
      commit("SET_ORDERLOADING", false);
      return error;
    }
  },
};

export default { state, mutations, getters, actions };
