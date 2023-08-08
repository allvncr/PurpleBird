<template>
  <div class="background">
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
        <div class="left">
          <b-form-group v-if="getSousCategories.length">
            <label>Sous Categorie</label>
            <b-select
              :options="['Tous', ...getSousCategories]"
              v-model="sousCategorie"
              @change="filtreSub"
            ></b-select>
          </b-form-group>
          <b-form-group
            v-if="sousCategorie != 'Tous' && getInfoSousCategories.length"
          >
            <label>Type de produit</label>
            <b-select
              :options="['Tous', ...getInfoSousCategories]"
              v-model="infoSousCategorie"
              @change="filtreInfoSub"
            ></b-select>
          </b-form-group>

          <b-form-group v-if="getAllColors.length">
            <label>Couleur</label>
            <b-select
              :options="['Tous', ...getAllColors]"
              v-model="color"
              @change="filtreColor"
            ></b-select>
          </b-form-group>

          <b-form-group v-if="getAllSizes.length">
            <label>Taille</label>
            <b-select
              :options="['Tous', ...getAllSizes]"
              v-model="size"
              @change="filtreSize"
            ></b-select>
          </b-form-group>
        </div>
        <div class="right">
          <div class="searchnone">
            <h1 class="page-title category-title">
              {{ $route.query.cat ? $route.query.cat : "Recherche" }}
            </h1>
            <div class="category-total">
              <b-select
                :options="[12, 24, 36]"
                v-model="perPage"
                @change="pagination(1)"
              ></b-select>

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
            <produit-list
              v-if="!showSpinner"
              :liste="liste"
              :showSpinner="showSpinner"
            ></produit-list>
            <div class="loader" v-else>
              <b-spinner label="Spinning"></b-spinner>
            </div>
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
      perPage: 24,
      liste: [],
      showSpinner: false,
      sousCategorie: "Tous",
      infoSousCategorie: "Tous",
      color: "Tous",
      size: "Tous",
    };
  },
  computed: {
    ...mapGetters([
      "getCategories",
      "getProduitRows",
      "getProduits",
      "getSousCategories",
      "getInfoSousCategories",
      "getAllColors",
      "getAllSizes",
    ]),
  },
  methods: {
    ...mapActions([
      "all_categories",
      "all_products",
      "category_products",
      "getProduitLoading",
      "all_subcategories",
      "all_infosubcategories",
      "all_colors",
      "all_sizes",
    ]),
    setup(query) {
      var data = {
        categorie: this.$route.query.cat,
        color: this.color != "Tous" ? this.color : null,
        size: this.size != "Tous" ? this.size : null,
        subCategory: this.sousCategorie != "Tous" ? this.sousCategorie : null,
        infoSubCategory:
          this.infoSousCategorie != "Tous" ? this.infoSousCategorie : null,
        ...query,
      };
      this.all_products(data).then(() => {
        if (this.$route.query.page) {
          this.pagination(this.$route.query.page);
        } else {
          this.liste = this.getProduits.slice(0, this.perPage);
        }
      });
    },
    filtreSub(cat) {
      this.infoSousCategorie = "Tous";
      if (cat != "Tous") {
        this.all_infosubcategories(cat);
        this.setup({ subCategory: cat });
      } else {
        this.setup({});
      }
    },
    filtreInfoSub(sub) {
      if (sub != "Tous") {
        this.setup({ infoSubCategory: sub });
      } else {
        this.filtreSub(this.sousCategorie);
      }
    },
    filtreColor(color) {
      if (color != "Tous") {
        this.setup({ color: color });
      } else {
        this.setup({});
      }
    },
    filtreSize(size) {
      if (size != "Tous") {
        this.setup({ size: size });
      } else {
        this.setup({});
      }
    },
    pagination(paginate) {
      this.showSpinner = true;
      this.page = paginate;
      this.liste = this.getProduits.slice(
        this.perPage * (paginate - 1),
        this.perPage * paginate
      );
      if (!this.$route.query.cat)
        this.$router.push({ name: "categories", query: { page: this.page } });

      window.scrollTo({ top: 300, behavior: "smooth" });
      setTimeout(() => {
        this.showSpinner = false;
      }, 500);
    },
  },
  mounted() {
    document.title = "Liste Articles";
    if (!this.$route.query.search && !this.$route.query.cat) {
      this.setup({});
    }
    this.all_categories();
    this.all_colors();
    this.all_sizes();
  },
  watch: {
    $route() {
      this.sousCategorie = "Tous";
      this.infoSousCategorie = "Tous";
      this.color = "Tous";
      this.size = "Tous";
    },
    getProduits(newList) {
      if (newList) this.liste = newList.slice(0, this.perPage);
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
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: flex-end;
      border-bottom: 1px solid $grey-dark;
      padding-bottom: 8px;
      margin-bottom: 8px;

      input,
      select {
        width: 64px;
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

.categories {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  gap: 8px;
  li {
    cursor: pointer;
    display: inline-block;
    vertical-align: bottom;
    font-size: 14px;
    padding: 8px 24px;
    border-radius: 5px;
    background-color: $primary;
    border-color: $primary;
    border-radius: 5px;
    color: $white;
    font-weight: 600;
    margin-bottom: 12px;
  }
}
</style>
