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
    produitRows: 10,
  };
  const getters = {
    getProduits: (state) => state.produits,
    getProduitRows: (state) => state.produitRows,
  };
  const mutations = {
    DO_NOTHING() {},
  };
  
  const actions = {};
  
  export default { state, mutations, getters, actions };
  