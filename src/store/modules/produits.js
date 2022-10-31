import axios from "axios";
import domain from "@/environment";
import Product from "@/models/product";

const state = {
  produits: [
    {
      id: 1,
      lib: "T-Shirt Technique Homme",
      img: "//www.extradtp.net/Datas/Pdts/Ima/P154832.jpg",
      price: 5.44,
    },
    {
      id: 2,
      lib: "T-Shirt Technique Homme",
      img: "//www.extradtp.net/Datas/Pdts/Ima/P154832.jpg",
      price: 5.44,
    },
    {
      id: 3,
      lib: "T-Shirt Technique Homme",
      img: "//www.extradtp.net/Datas/Pdts/Ima/P154832.jpg",
      price: 5.44,
    },
    {
      id: 4,
      lib: "T-Shirt Technique Homme",
      img: "//www.extradtp.net/Datas/Pdts/Ima/P154832.jpg",
      price: 5.44,
    },
    {
      id: 5,
      lib: "T-Shirt Technique Homme",
      img: "//www.extradtp.net/Datas/Pdts/Ima/P154832.jpg",
      price: 5.44,
    },
    {
      id: 6,
      lib: "T-Shirt Technique Homme",
      img: "//www.extradtp.net/Datas/Pdts/Ima/P154832.jpg",
      price: 5.44,
    },
    {
      id: 7,
      lib: "T-Shirt Technique Homme",
      img: "//www.extradtp.net/Datas/Pdts/Ima/P154832.jpg",
      price: 5.44,
    },
    {
      id: 8,
      lib: "T-Shirt Technique Homme",
      img: "//www.extradtp.net/Datas/Pdts/Ima/P154832.jpg",
      price: 5.44,
    },
    {
      id: 9,
      lib: "T-Shirt Technique Homme",
      img: "//www.extradtp.net/Datas/Pdts/Ima/P154832.jpg",
      price: 5.44,
    },
    {
      id: 10,
      lib: "T-Shirt Technique Homme",
      img: "//www.extradtp.net/Datas/Pdts/Ima/P154832.jpg",
      price: 5.44,
    },
  ],
  produitRows: 0,
  produitLoading: false,
};
const getters = {
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
      page: payload.page,
      perPage: payload.perPage,
      name: payload.search,
      sort: payload.sort,
    };
    try {
      const response = await axios.get(domain + `/products`, {
        params,
      });

      commit("SET_PRODUCTS", response.data.products);
      commit("UPDATE_PRODUCT_ROW", response.data.total);
      commit("SET_PRODUCTLOADING", false);
      return true;
    } catch (error) {
      commit("SET_PRODUCTLOADING", false);
      return error;
    }
  },
  async category_products({ commit }, payload) {
    commit("SET_PRODUCTLOADING", true);
    const params = {
      page: payload.page,
      perPage: payload.perPage,
      name: payload.search,
      sort: payload.sort,
    };
    try {
      const response = await axios.get(
        domain + `/categories/${payload.id}/products`,
        {
          params,
        }
      );

      commit("SET_PRODUCTS", response.data.products);
      commit("UPDATE_PRODUCT_ROW", response.data.total);
      commit("SET_PRODUCTLOADING", false);
      return true;
    } catch (error) {
      commit("SET_PRODUCTLOADING", false);
      return error;
    }
  },
};

export default { state, mutations, getters, actions };
