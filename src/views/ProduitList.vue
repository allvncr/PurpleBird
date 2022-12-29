<template>
  <div>
    <ul>
      <li v-for="product in getProduits" :key="product.id">
        <div class="product">
          <router-link
            class="product-img img-ratio"
            to=""
            :title="product.name"
          >
            <img :src="product.urlimages[0]" :alt="product.name" />
          </router-link>

          <div class="product-details">
            <h2 class="h4 product-title">
              <router-link to="">
                {{ product.name }}
              </router-link>
            </h2>
            <div class="product-price">{{ product.price }} € HT</div>
          </div>
          <!-- <div class="product-actions actions">
            <div
              class="btn btn-primary"
              title="Ajouter au Panier"
              v-if="!isStored(product)"
              @click="add_product(product)"
            >
              Ajouter au Panier
            </div>
            <div
              class="btn btn-secondary"
              title="Retirer du Panier"
              v-else
              @click="remove_product(product)"
            >
              Retirer du Panier
            </div>
          </div>-->
          <div class="product-actions actions">
            <router-link
                style="border-radius: 0; padding: 18px 0"
              class="btn btn-primary"
              :to="'produit/' + product.id"
              title="Voir produit"
              >Voir produit</router-link
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getProduits", "getProduitRows", "getPanier"]),
  },
  methods: {
    ...mapActions(["add_product", "remove_product"]),

    isStored(product) {
      const find = this.getPanier.find((pro) => pro.id === product.id);
      if (find) return true;
      else return false;
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;

  li {
    @media only screen and (max-width: $tablette) {
      width: 33%;
    }
    @media only screen and (max-width: $phone) {
      width: 50%;
    }
    width: 25%;
    padding: 0 15px;

    .product {
      position: relative;
      margin-bottom: 24px;

      .img-ratio > img {
        width: 100%;
        height: 220px;
      }

      .product-details {
        background-color: $grey-light;
        padding: 12px 8px;
        text-align: center;
      }
      .product-title {
        color: $black;
        font-size: 10px;
        font-weight: 600;
        line-height: 1.5;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;
        white-space: nowrap;

        a {
          color: inherit;
          text-decoration: none;
        }
      }

      .product-price {
        color: $secondary;
        font-size: 12px;
        font-weight: 600;
        line-height: 1.5;
      }

      .product-img::after {
        background-color: rgba($primary, 0.1);
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        visibility: hidden;
        z-index: 1;
      }

      .product-actions {
        display: none;
      }

      &:hover .product-img::after {
        visibility: visible;
      }
      &:hover .product-actions {
        display: block;
        position: relative;
        z-index: 2;
      }

      &:hover .product-details {
        display: none;
      }
    }
  }
}
</style>
