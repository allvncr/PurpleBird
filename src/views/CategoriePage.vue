<template>
  <div class="container">
    <section>
      <div class="breadcrumb-responsive">
        <ul class="breadcrumb">
          <li>
            <router-link to="/">Accueil</router-link>
          </li>
          <li>Catégorie</li>
          <li v-if="categorie.id">{{ categorie.lib }}</li>
        </ul>
      </div>
    </section>
    <section class="section">
      <div class="right">
        <div class="searchnone">
          <h1 class="page-title category-title">Recherche</h1>
          <div class="category-total">
            <p>
              <strong>{{ getProduitRows }}</strong> produit(s)
            </p>
          </div>
          <p v-if="!getProduitRows">
            Il n'y a aucun produit pour cette recherche. Merci de nous
            contacter.
          </p>
        </div>
        <div class="produit-list">
          <!-- <router-view /> -->
          <produit-list></produit-list>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProduitList from "./ProduitList.vue";

export default {
  components: { ProduitList },
  data() {
    return {
      page: 1,
      perPage: 10,
      categorie: {},
    };
  },
  computed: {
    ...mapGetters(["getCategories", "getProduitRows"]),
  },
  methods: {
    ...mapActions(["all_categories", "all_products", "category_products"]),
    setup(query) {
      this.all_products(query);
    },
  },
  mounted() {
    if (!this.$route.query.search) this.setup({});
    this.all_categories();
  },
  watch: {
    "$route.params.id"(newParamsId) {
      if (newParamsId)
        this.category_products({
          id: newParamsId,
          page: 1,
          perPage: this.perPage,
        });
    },
    categorie(cat) {
      if (cat.id)
        this.$router.push({ name: "produitList", params: { id: cat.id } });
      else {
        this.setup({});
        this.$router.push({ name: "categories" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 15px 128px;
}

.breadcrumb-responsive {
  margin-bottom: 64px;

  .breadcrumb {
    margin: 20px 0 64px;
    background-color: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    text-transform: capitalize;

    a {
      color: $black;
    }
  }
  .breadcrumb > li + li:before {
    content: "/Â ";
    padding: 0 5px;
    color: #ccc;
  }
}

.section {
  display: flex;
  @media only screen and (max-width: $phone) {
    display: block;
  }
  .left {
    @media only screen and (max-width: $phone) {
      width: 100%;
      margin-bottom: 15px;
      display: none;
    }
    width: 25%;
    border-top: 1px solid $grey-dark;

    .form-group {
      border-bottom: 1px solid $grey-dark;
      padding: 20px 0;
      margin-bottom: 0;

      label {
        display: inline-block;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 4px;
        width: 100%;
      }

      .form-control {
        display: block;
        width: 100%;
        height: 46px;
        padding: 12px 24px;
        font-size: 14px;
        line-height: 1.42857143;
        color: $black;
        background-color: $white;
        background-image: none;
        border: 1px solid $grey-dark;
        border-radius: 2px;
        outline: none;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
      }
    }

    .form-group-budget {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .form-control {
        display: inline-block;
        width: 49.05%;
      }
    }

    .form-group-tag {
      border-bottom: 1px solid $grey-dark;
      padding: 20px 0;

      p {
        display: inline-block;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 0;
      }

      ul {
        @media only screen and (max-width: $phone) {
          display: flex;
          flex-wrap: wrap;
        }
      }
      .checkbox {
        @media only screen and (max-width: $phone) {
          width: 50%;
        }
        position: relative;
        margin: 10px 0;

        label {
          min-height: 20px;
          padding-left: 20px;
          margin-bottom: 0;
          font-weight: normal;
          cursor: pointer;
        }

        input {
          position: absolute;
          margin: 4px 0 0 -20px;
          line-height: normal;
        }
        span {
          text-transform: uppercase;
        }
      }
    }

    .actions {
      margin-top: 20px;
    }
  }

  .right {
    @media only screen and (max-width: $phone) {
      width: 100%;
      padding: 0;
    }
    width: 100%;
    padding: 0 15px 0 30px;

    .searchnone {
      margin-bottom: 24px;
    }
    .page-title {
      @media only screen and (max-width: $phone) {
        font-size: 36px;
      }
      font-size: 56px;
      line-height: 1.15;
      font-weight: 600;
      overflow: hidden;
      padding-bottom: 0;
      text-decoration: none;
      text-overflow: ellipsis;
    }

    .category-total {
      text-align: right;
      border-bottom: 1px solid $grey-dark;
      margin-bottom: 4px;
    }
  }
}
</style>
