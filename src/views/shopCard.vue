<template>
  <div>
    <p>
      Vous pouvez modifier les quantités souhaitées dans les cases, puis cliquer
      sur le bouton <strong>RECALCULER</strong> pour mettre à jour le total.
    </p>
    <p v-if="!getPanierRows">Vide</p>
    <table class="PanierTable" v-else>
      <thead>
        <tr class="PanierTRTitle">
          <th></th>
          <th class="caddi1">Désignation</th>
          <th class="caddi1">Quantité</th>

          <th class="caddi1" nowrap="">Prix unitaire HT</th>
          <th class="caddi1" nowrap="">Prix total HT</th>
          <th class="caddi1 skip-xs"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in getPanier" :key="i">
          <td>
            <router-link to=""><img :src="product.img" /></router-link>
          </td>
          <td class="panierCol">
            {{ product.name }}
          </td>
          <td class="panierCol">
            <input type="number" v-model="product.quantite" min="1" />
          </td>
          <td class="panierCol" align="right">{{ product.price }} €</td>
          <td class="panierCol" align="right">{{ productTotal(product) }} €</td>

          <td class="panierCol action">
            <div @click="remove_product(product)">
              <svg viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
                />
              </svg>
            </div>
          </td>
        </tr>

        <tr class="PanierTRHT">
          <td></td>
          <td colspan="2"></td>
          <td align="right">Sous-total HT</td>
          <td align="right" class="panierCol">{{ getTotal }} €</td>
          <td></td>
        </tr>

        <tr class="PanierTRTVA">
          <td></td>
          <td colspan="2"></td>
          <td align="right">TVA</td>
          <td align="right" class="panierCol">0 €</td>
          <td></td>
        </tr>
        <tr class="PanierTRTTC">
          <td></td>
          <td colspan="2"></td>
          <td align="right">Total TTC</td>
          <td align="right" class="panierCol">{{ getTotal }} €</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <div class="actions">
      <router-link to="/categories" class="btn btn-default">
        Continuer votre selection
      </router-link>
      <router-link to="/resume" class="btn btn-secondary" v-if="getPanierRows">
        Demander un devis
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getPanierRows", "getPanier"]),

    getTotal() {
      var total = 0;
      this.getPanier.forEach((product) => {
        total += product.price * product.quantite;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(["add_product", "remove_product"]),

    productTotal(product) {
      return product.price * product.quantite;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 14px;
  margin-bottom: 20px;
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
      padding: 20px;
      font-size: 14px;
      border-top: 1px solid $grey-dark;
      // line-height: 36px;

      img {
        max-height: 56px;
        max-width: 56px;
        border: 0;
      }

      svg {
        width: 24px;
        height: 24px;
        color: $primary;
      }

      input {
        padding: 8px 0;
        text-align: center;
        max-width: 75px;
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

    .action {
      cursor: pointer;
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

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    width: 30%;
  }
}
</style>