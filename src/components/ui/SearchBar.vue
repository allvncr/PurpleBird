<template>
  <form @submit.prevent="searchProduct">
    <label for=""> CONSULTER NOTRE CATALOGUE ET RECEVOIR UN DEVIS </label>
    <div class="form-group">
      <input
        type="text"
        v-model="search"
        placeholder="Rechercher un object pub ou un cadeau"
      />
      <span class="search-icon" @click="searchProduct">
        <svg
          class="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 11.14 11.14"
          fill="#2c3e57"
        >
          <title>icon-search</title>
          <path
            class="a"
            d="M11.14,11.42a.85.85,0,0,1-.85.85A.79.79,0,0,1,9.68,12L7.39,9.73a4.62,4.62,0,0,1-2.68.83A4.71,4.71,0,0,1,1.38,9.18,4.71,4.71,0,0,1,0,5.85,4.71,4.71,0,0,1,1.38,2.51a4.77,4.77,0,0,1,1.5-1,4.74,4.74,0,0,1,3.67,0A4.72,4.72,0,0,1,9.06,4a4.84,4.84,0,0,1,.37,1.84A4.61,4.61,0,0,1,8.6,8.52l2.3,2.29A.85.85,0,0,1,11.14,11.42ZM6.83,8a2.89,2.89,0,0,0,.88-2.12,2.86,2.86,0,0,0-.88-2.12,2.86,2.86,0,0,0-2.12-.88,2.89,2.89,0,0,0-2.12.88,2.9,2.9,0,0,0-.88,2.12,3,3,0,0,0,3,3A2.9,2.9,0,0,0,6.83,8Z"
            transform="translate(0 -1.13)"
          ></path>
        </svg>
      </span>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      search: null,
    };
  },
  methods: {
    ...mapActions(["all_products", "category_products"]),
    searchProduct() {
      if (this.$route.params.id) {
        this.category_products({
          id: this.$route.params.id,
          search: this.search,
        });
      } else {
        this.all_products({
          search: this.search,
        });
      }

      if (this.$route.name != "categories" && this.$route.name != "produitList")
        this.$router.push({
          name: "categories",
          query: { search: this.search },
        });
      else {
        if (this.search != this.$route.query.search)
          this.$router.push({
            name: "categories",
            query: { search: this.search },
          });
      }
    },
  },
  watch: {
    "$route.query.search"(newSearch) {
      if (this.search != newSearch) this.search = newSearch;
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    @media only screen and (max-width: $tablette) {
      padding: 8px 16px;
    }
    @media only screen and (max-width: $phone) {
      display: none;
    }
    display: block;
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 0;
    padding: 9px 50px 9px 56px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .form-group {
    @media only screen and (max-width: $phone) {
      width: 100%;
    }
    position: relative;
    width: 45%;

    input {
      @media only screen and (max-width: $phone) {
        border: 0;
      }
      @media only screen and (max-width: $tablette) {
        padding: 8px;
        font-size: 12px;
      }
      outline: none;
      width: 100%;
      font-size: 16px;
      line-height: 1.25;
      padding: 8px 12px;
      border: 1px solid $black;

      &::placeholder {
        text-transform: uppercase;
      }
    }

    .search-icon {
      @media only screen and (max-width: $phone) {
        padding: 8px 12px;
      }
      @media only screen and (max-width: $tablette) {
        padding: 6px 8px;
      }
      position: absolute;
      padding: 8px 12px;
      cursor: pointer;
      top: 0;
      right: 0;
      svg {
        height: 20px;
        vertical-align: top;
        width: 24px;
      }
    }
  }
}
</style>
