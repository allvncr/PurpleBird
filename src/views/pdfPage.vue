<template>
  <div>
    <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :paginate-elements-by-height="1400"
      filename="shoping"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a3"
      pdf-orientation="landscape"
      pdf-content-width="100%"
      @progress="onProgress($event)"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"
      ref="html2Pdf"
    >
      <section slot="pdf-content" class="container">
        <!-- PDF Content Here -->

        <div class="logoBlock">
          <router-link to="/" class="brand">
            <img src="@/assets/PURPLEBIRD.jpg" />
          </router-link>
        </div>
        <div class="info-perso">
          <ul>
            <!-- <li style="justify-content: center">
              <div class="title">société:<span>Sw Consulting</span></div>
            </li> -->
            <li>
              <div class="title">
                Nom:<span style="text-transform: uppercase">{{
                  getForm.nom
                }}</span>
              </div>
              <div class="title">
                Prenom:<span>{{ getForm.prenom }}</span>
              </div>
            </li>
            <!-- <li>
              <div class="title">Ville:<span>Paris</span></div>
              <div class="title">Code Postal:<span>15000</span></div>
              <div class="title">Pays:<span>France</span></div>
            </li>
            <li style="justify-content: center">
              <div class="title">Adresse:<span>18 rue Lafayette</span></div>
            </li> -->
            <li>
              <div class="title">
                Email:<span>{{ getForm.email }}</span>
              </div>
              <div class="title">
                Telephone:<span>{{ getForm.tel }}</span>
              </div>
            </li>
          </ul>
        </div>

        <table class="PanierTable">
          <thead>
            <tr class="PanierTRTitle">
              <th class="caddi1">Produit</th>
              <th class="caddi1">Désignation</th>
              <th class="caddi1">Couleur</th>
              <th class="caddi1">Marquage</th>
              <th class="caddi1">Quantité</th>

              <th class="caddi1" nowrap="">Prix unitaire HT</th>
              <th class="caddi1" nowrap="">Prix total HT</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, i) in getPanier" :key="i">
              <td>
                <img
                  v-if="product.imagesList[0]"
                  :src="product.imagesList[0].imageStoreLocation"
                />
              </td>
              <td class="panierCol">
                {{ product.name }}
              </td>
              <td class="panierCol">
                <div
                  class="color"
                  :style="'background-color:' + product.color"
                ></div>
              </td>
              <td>
                {{ product.marking ? product.marking.marque : "-" }}
              </td>
              <td class="panierCol">
                {{ product.quantite }}
              </td>
              <td class="panierCol" align="right">{{ product.price }} €</td>
              <td class="panierCol" align="right">
                {{ productTotal(product) }} €
              </td>
            </tr>

            <tr class="PanierTRHT">
              <td></td>
              <td></td>
              <td colspan="2"></td>
              <td></td>
              <td align="right">Sous-total HT</td>
              <td align="right" class="panierCol">{{ getTotal }} €</td>
              <td></td>
            </tr>

            <tr class="PanierTRTVA">
              <td></td>
              <td></td>
              <td colspan="2"></td>
              <td></td>
              <td align="right">TVA ( 20% )</td>
              <td align="right" class="panierCol">{{ getTVA }} €</td>
            </tr>
            <tr class="PanierTRTTC">
              <td></td>
              <td></td>
              <td colspan="2"></td>
              <td></td>
              <td align="right">Total TTC</td>
              <td align="right" class="panierCol">{{ getTotal + getTVA }} €</td>
            </tr>
          </tbody>
        </table>
        <p class="remarque">
          ** Prix indicatif hors marquage et hors frais de livraison
        </p>
      </section>
    </vue-html2pdf>
    <div class="actions">
      <p class="btn btn-secondary" @click="generateReport">
        Valider la commande
      </p>
    </div>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import { mapGetters } from "vuex";

export default {
  components: {
    VueHtml2pdf,
  },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },

    productTotal(product) {
      return product.price * product.quantite;
    },
  },
  computed: {
    ...mapGetters(["getPanierRows", "getPanier", "getForm"]),

    getTotal() {
      var total = 0;
      this.getPanier.forEach((product) => {
        total += product.price * product.quantite;
      });
      return total;
    },
    getTVA() {
      var total = 0;
      this.getPanier.forEach((product) => {
        total += product.price * product.quantite;
      });
      total = (total * 20) / 100;
      return total;
    },
  },
};
</script>

<style lang="scss" scoped>

.container {
  width: 75%;
}
.brand {
  display: block;
  padding: 30px 15px;
  max-width: 300px;
  margin: auto;

  img {
    width: 100%;
  }
}

.info-perso {
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  padding: 15px;
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

.PanierTable {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 10px;
  max-width: 100%;
  width: 100%;
  background-color: $white;

  thead {
    th {
      border-top: 0;
      border-bottom: 1px solid #dbdbdb;
      font-size: 12px;
      font-weight: 600;
      height: auto;
      line-height: 1.66666667;
      text-align: center;
      text-transform: uppercase;
      vertical-align: middle;
      white-space: nowrap;
      padding: 20px;
    }
  }

  tbody {
    td {
      position: relative;
      padding: 8px;
      font-size: 14px;
      border-top: 1px solid $grey-dark;

      img {
        max-height: 48px;
        max-width: 48px;
        border: 0;
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
.remarque {
  font-size: 14px;
  text-align: right;
  font-style: italic;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    width: 50%;
  }
}

.color {
  width: 24px;
  height: 24px;
}
</style>
