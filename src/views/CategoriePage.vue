<template>
  <div class="container">
    <section>
      <div class="breadcrumb-responsive">
        <ul class="breadcrumb">
          <li>
            <router-link to="/">Accueil</router-link>
          </li>
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
          <produit-list :liste="liste"></produit-list>
        </div>

        <b-pagination
          class=""
          v-model="page"
          :per-page="perPage"
          :total-rows="getProduitRows"
          last-number
          first-number
          pills
          align="center"
          @change="pagination"
        ></b-pagination>
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
      perPage: 12,
      liste: [],
    };
  },
  computed: {
    ...mapGetters(["getCategories", "getProduitRows", "getProduits"]),
  },
  methods: {
    ...mapActions([
      "all_categories",
      "all_products",
      "category_products",
      "getProduitLoading",
    ]),
    setup(query) {
      this.all_products(query).then(() => {
        this.liste = this.getProduits.slice(0, this.perPage);
      });
    },
    pagination(paginate) {
      this.page = paginate;
      this.liste = this.getProduits.slice(
        this.perPage * (paginate - 1),
        this.perPage * paginate
      );
      console.log(paginate);
    },
  },
  mounted() {
    document.title = "Liste Articles";
    if (!this.$route.query.search) this.setup({});
    this.all_categories();
  },
  watch: {
    "getProduits"(newList) {
      if (newList)
        this.liste = newList.slice(0, this.perPage);
    },
  },
};
</script>

<style lang="scss" scoped>
ul,
p {
  margin: 0;
}
.container {
  padding: 0 15px 64px;
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
      padding-bottom: 8px;
      margin-bottom: 8px;
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
