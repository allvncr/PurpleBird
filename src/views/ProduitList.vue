<template>
  <div>
    <ul>
      <li v-for="product in getProduits" :key="product.id">
        <div class="product">
          <router-link class="product-img img-ratio" to="" :title="product.lib">
            <img :src="product.img" :alt="product.lib" />
          </router-link>

          <div class="product-details">
            <h2 class="h4 product-title">
              <router-link to="" :title="product.lib">
                {{ product.lib }}
              </router-link>
            </h2>
            <div class="product-price">{{ product.price }} € HT</div>
          </div>
          <div class="product-actions actions">
            <router-link class="btn btn-default" to="" title="Voir produit"
              >Voir produit</router-link
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getProduits", "getProduitRows"]),
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

        .btn-default {
          background-color: $primary;
          border-radius: 0;
          color: $white;
          display: block;
          padding: 18px 0;
        }
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