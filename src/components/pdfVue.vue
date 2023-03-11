<template>
  <div class="page">
    <section class="pdf-item">
      <h1>DESCRIPTIF PRODUIT</h1>
      <div class="info-produit" v-for="(product, i) in getPanier" :key="i">
        <div class="produit">
          <div class="left">
            <h2>{{ product.name }}</h2>
            <p>{{ product.reference }}</p>
          </div>
          <div class="right">
            <img :src="product.imagesList[0].imageStoreLocation" />
          </div>
        </div>
        <table class="PanierTable">
          <thead>
            <tr class="PanierTRTitle">
              <th>Couleur</th>
              <th>Quantité</th>
              <th>Prix unitaire HT</th>
              <th>TVA</th>
              <th>Prix total HT</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="ligneColor">
                <div
                  v-if="product.hexCodeColors.length < 2"
                  class="color"
                  :style="'background-color:' + product.hexCodeColors[0]"
                ></div>
                <div
                  class="b_coloris"
                  :style="'background-color:' + product.hexCodeColors[0]"
                  :title="product.color"
                  v-else
                >
                  <div
                    class="bottom"
                    :style="'background-color:' + product.hexCodeColors[1]"
                  ></div>
                </div>
              </td>
              <td class="panierCol">
                <span v-if="product.size"> {{ product.size }} x </span>
                {{ product.quantite }}
              </td>
              <td class="panierCol" align="right">
                {{ product.price | price }} €
              </td>
              <td class="panierCol" align="right">20%</td>
              <td class="panierCol">{{ productTotal(product) }} €</td>
            </tr>
          </tbody>
        </table>

        <table class="PanierTable marquage" v-if="product.marking">
          <thead>
            <tr>
              <th colspan="3">Techniques de marquage</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="3" style="text-transform: uppercase">
                {{ product.marking.marque }}
              </td>
              <td></td>
              <td></td>
              <td>
                <a :href="getMinio" target="_blank">{{ getMinio }}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <table class="PanierTable">
        <thead>
          <tr>
            <th class="full">Couleur</th>
            <th>Quantité</th>
            <th>Prix total HT</th>
            <th>TVA</th>
            <th>Prix total TTC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>{{ getTotal }} €</td>
            <td>{{ getTVA }} €</td>
            <td>{{ getTTC }} €</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    productTotal(product) {
      let total = product.price * product.quantite;
      return total.toFixed(2);
    },
  },
  computed: {
    ...mapGetters(["getPanierRows", "getPanier", "getForm", "getMinio"]),

    getTotal() {
      var total = 0;
      this.getPanier.forEach((product) => {
        total += product.price * product.quantite;
      });
      return total.toFixed(2);
    },
    getTVA() {
      var total = 0;
      this.getPanier.forEach((product) => {
        total += product.price * product.quantite;
      });
      total = (total * 20) / 100;
      return total.toFixed(2);
    },
    getTTC() {
      let total = +this.getTVA + +this.getTotal;
      return total.toFixed(2);
    },
  },

  filters: {
    price: function (value) {
      return Number(value).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
.brand {
  margin-top: 15px;
  display: block;
  padding: 15px;
  max-width: 250px;

  img {
    width: 100%;
  }
}

.date {
  text-align: right;
  border: 1px dotted $primary;
  width: fit-content;
  margin: 0 0 15px auto;
  padding: 15px;

  p {
    margin: 0;
  }
}

h1 {
  background-color: $primary;
  color: $white;
  font-size: 14px;
  margin-bottom: 0;
  padding: 4px;
}

.info-produit {
  h2 {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }

  .produit {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left,
    .right {
      padding: 0 15px;
      width: 50%;
    }

    .right {
      text-align: right;
    }
  }

  img {
    width: 120px;
    height: 120px;
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $primary;
    margin: 8px 0;
  }

  .title {
    font-weight: 600;
    font-size: 16px;
    text-decoration: underline;

    span {
      display: inline-block;
      margin-left: 8px;
      font-size: 18px;
      font-style: italic;
      text-decoration: none;
      font-weight: 400;
    }
  }
}
.marquage thead th,
.marquage tbody td {
  text-align: left !important;
}
.PanierTable {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 10px;
  max-width: 100%;
  background-color: $white;

  thead {
    th {
      padding: 0px 16px;
      background-color: $primary;
      color: $white;
      font-size: 14px;
      font-weight: 400;
      text-align: center;
      min-width: 110px;
    }

    .full {
      color: $primary;
    }
  }

  tbody {
    td {
      position: relative;
      padding: 4px;
      font-size: 14px;
      text-align: center;

      img {
        max-height: 72px;
        max-width: 72px;
        border: 0;
      }

      a {
        font-weight: 600;
        color: $secondary;
        font-size: 14px;
      }
    }

    .ligneColor {
      display: flex;
      justify-content: center;
      .color {
        border: 1px solid #333;
        width: 24px;
        height: 24px;
      }
    }

    .b_coloris {
      width: 24px;
      border-left: 1px solid #333;
      border-top: 1px solid #333;

      .bottom {
        clip-path: polygon(0 100%, 100% 0%, 100% 100%, 0% 100%);
        height: 24px;
        border-bottom: 1px solid #333;
        border-right: 1px solid #333;
      }
    }

    .PanierTRTTC td {
      border-bottom: 2px solid $secondary;
      border-top: 2px solid $secondary;
      color: $secondary;
      font-size: 24px;
      font-weight: 600;
      line-height: 1;
    }

    .panierCol::before {
      content: "";
      border-left: 1px solid $grey-dark;
      bottom: 20px;
      display: inline-block;
      left: 0;
      position: absolute;
      top: 20px;
    }
  }
}

.title {
  font-size: 24px;
  text-align: center;
  font-weight: 800;
  color: $black;
  margin-bottom: 0;
}
.remarque {
  font-size: 16px;
  text-align: center;
  line-height: 1.125;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    width: 50%;
  }
}
.page {
  overflow: auto;
  padding: 0 15px;
}

footer {
  margin-top: auto;
  flex-grow: 0;
  background-color: $primary;
  color: $white;
  font-size: 14px;
  font-weight: 400;
  padding: 15px;
  text-align: center;
}
</style>
