const state = {
  panier: localStorage.getItem("panier")
    ? JSON.parse(localStorage.getItem("panier"))
    : [],
};
const getters = {
  getPanier: (state) => state.panier,
  getPanierRows: (state) => state.panier.length,
};
const mutations = {
  DO_NOTHING() {},
  SET_PANIER(state) {
    localStorage.setItem("panier", JSON.stringify(state.panier));
  },
  ADD_PRODUCT(state, payload) {
    if (payload) {
      const find = state.panier.find((pro) => pro.id == payload.id);
      if (!find) {
        payload.quantite = 1;
        state.panier.push(payload);
      }
    }
  },
  REMOVE_PRODUCT(state, payload) {
    if (payload) {
      state.panier = state.panier.filter((pro) => pro.id != payload.id);
    }
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
};

const actions = {
  add_product({ commit }, payload) {
    commit("ADD_PRODUCT", payload);
    commit("SET_PANIER");
    return true;
  },
  remove_product({ commit }, payload) {
    commit("REMOVE_PRODUCT", payload);
    commit("SET_PANIER");
    return true;
  },
};

export default { state, mutations, getters, actions };
