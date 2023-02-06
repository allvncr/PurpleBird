<template>
  <div>
    <ul v-if="!getProduitLoading">
      <li v-for="product in liste" :key="product.id">
        <div class="product">
          <img
            src="../assets/new-blue.png"
            class="new"
            v-if="dateDiff(product.created_at)"
          />
          <router-link
            class="product-img img-ratio"
            :to="'/produit/' + product.reference"
            :title="product.name"
          >
            <img :src="product.urlimage" :alt="product.name" />
          </router-link>

          <div class="product-details">
            <h2 class="h4 product-title">
              <router-link :to="'/produit/' + product.reference">
                {{ product.name }}
              </router-link>
            </h2>
            <div class="product-price">{{ product.price | price }} € HT</div>
          </div>
          <div class="product-actions actions">
            <router-link
              style="border-radius: 0; padding: 18px 0"
              class="btn btn-primary"
              :to="'produit/' + product.reference"
              title="Voir produit"
              >Voir produit</router-link
            >
          </div>
        </div>
      </li>
    </ul>
    <div class="loader" v-else>
      <b-spinner label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getProduitRows", "getPanier", "getProduitLoading"]),
  },

  props: {
    liste: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions(["add_product", "remove_product"]),

    isStored(product) {
      const find = this.getPanier.find((pro) => pro.id === product.id);
      if (find) return true;
      else return false;
    },

    dateDiff(date1) {
      date1 = new Date(date1);
      const date2 = new Date();
      const diffInMilliseconds = date2.getTime() - date1.getTime();
      const diffInSeconds = diffInMilliseconds / 1000;
      const diffInMinutes = diffInSeconds / 60;
      const diffInHours = diffInMinutes / 60;
      const diffInDays = diffInHours / 24;
      const diffInWeeks = diffInDays / 7;
      return diffInWeeks.toFixed(0) < 4;
    },
  },

  filters: {
    price: function (value) {
      return Number(value).toFixed(2);
    },
  },

  mounted() {
    document.title = "Liste articles";
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

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

      .new {
        position: absolute;
        width: 42px;
        height: 42px;
        top: 0;
        left: 0;
      }

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

.loader {
  height: 28vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner-border {
    width: 5rem;
    height: 5rem;
  }
}
</style>
