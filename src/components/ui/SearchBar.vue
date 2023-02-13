<template>
  <form @submit.prevent="searchProduct">
    <div class="form-group search">
      <input type="text" v-model="filtre.search" placeholder="Rechercher" />
      <!-- <span class="search-icon" @click="searchProduct">
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
      </span> -->
    </div>
    <div class="form-group select">
      <b-select
        plain
        v-model="filtre.categorie"
        :options="[
          {
            lib: 'Toutes Categories',
          },
          ...getCategories,
        ]"
        text-field="lib"
        value-field="lib"
        @change="searchProduct"
      ></b-select>
    </div>
    <div class="form-group">
      <input type="text" v-model="filtre.min" placeholder="Min" />
    </div>
    <div class="form-group">
      <input type="text" v-model="filtre.max" placeholder="Max" />
    </div>

    <button type="submit" class="btn btn-primary">Valider</button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      filtre: {
        search: null,
        categorie: "Toutes Categories",
        min: null,
        max: null,
      },
    };
  },
  computed: {
    ...mapGetters(["getCategories"]),
  },
  methods: {
    ...mapActions(["all_products", "all_categories"]),
    searchProduct() {
      var data = {
        search: this.filtre.search,
        min: this.filtre.min,
        max: this.filtre.max,
      };
      if (this.filtre.categorie != "Toutes Categories")
        data.categorie = this.filtre.categorie;

      this.all_products(data);
      if (
        this.$route.name != "categories" &&
        this.$route.name != "produitList"
      ) {
        this.$router.push("/categories?cat=" + this.filtre.categorie);
      } else {
        if (this.filtre.categorie != "Toutes Categories")
          this.$router.push("/categories?cat=" + this.filtre.categorie);
        else this.$router.push("/categories");
      }
    },
  },
  watch: {
    "$route.query.search"(newSearch) {
      if (this.search != newSearch) this.search = newSearch;
    },
  },
  mounted() {
    if (this.$route.query.cat) {
      this.filtre.categorie = this.$route.query.cat;
      this.all_products({
        categorie: this.filtre.categorie,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
form {
  @media only screen and (max-width: $phone) {
    width: 100%;
    gap: 8px 0;
  }
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  margin: auto;
  .form-group {
    @media only screen and (max-width: $phone) {
      width: 24%;
    }
    position: relative;
    margin: 0;
    width: 10%;

    input,
    select {
      @media only screen and (max-width: $tablette) {
        padding: 8px;
        font-size: 12px;
      }
      outline: none;
      width: 100%;
      border-radius: 5px;
      font-size: 16px;
      line-height: 1.25;
      padding: 8px 12px;
      border: 1px solid $black;

      &:focus {
        box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
      }

      &::placeholder {
        text-transform: uppercase;
      }
    }
  }

  .btn {
    @media only screen and (max-width: $phone) {
      width: 60%;
      margin: auto;
    }
    width: 15%;
    padding: 8px 12px;
  }

  .search {
    @media only screen and (max-width: $phone) {
      width: 100%;
    }
    width: 40%;
  }

  .select {
    @media only screen and (max-width: $phone) {
      width: 49%;
    }
    width: 20%;
  }
}
</style>
