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
      <div class="left">
        <form @submit.prevent="">
          <div class="form-group form-group-budget">
            <label>Budget (€)</label>
            <input
              class="form-control"
              type="text"
              value=""
              placeholder="min."
            />
            <input
              class="form-control"
              type="text"
              value=""
              placeholder="max."
            />
          </div>
          <div class="form-group form-group-color">
            <label>Couleur</label>
            <select class="form-control" name="_color">
              <option value="">Toutes</option>
              <option value="argent">argent</option>
              <option value="beige">beige</option>
              <option value="blanc">blanc</option>
              <option value="bleu">bleu</option>
              <option value="gris">gris</option>
              <option value="jaune">jaune</option>
              <option value="marron">marron</option>
              <option value="noir">noir</option>
              <option value="orange">orange</option>
              <option value="rose">rose</option>
              <option value="rouge">rouge</option>
              <option value="vert">vert</option>
            </select>
          </div>
          <div class="form-group form-group-size">
            <label>Taille</label>
            <select class="form-control" name="_size">
              <option value="">Toutes</option>
              <optgroup label="Textile">
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </optgroup>
              <optgroup label="Memoire">
                <option value="512 Mo">512 Mo</option>
                <option value="1 Go">1 Go</option>
                <option value="2 Go">2 Go</option>
                <option value="4 Go">4 Go</option>
                <option value="8 Go">8 Go</option>
                <option value="16 Go">16 Go</option>
                <option value="32 Go">32 Go</option>
              </optgroup>
            </select>
          </div>
          <div class="form-group-tag">
            <p>Catégories</p>
            <ul>
              <li class="checkbox">
                <label>
                  <input
                    type="radio"
                    name="categorie"
                    :value="{}"
                    v-model="categorie"
                  />
                  <span>Aucune</span>
                </label>
              </li>
              <li class="checkbox" v-for="(cat, i) in getCategories" :key="i">
                <label>
                  <input
                    type="radio"
                    name="categorie"
                    :value="cat"
                    v-model="categorie"
                  />
                  <span>{{ cat.lib }}</span>
                </label>
              </li>
            </ul>
          </div>
          <div class="actions">
            <button class="btn btn-primary" type="submit">Filtrer</button>
          </div>
        </form>
      </div>
      <div class="right">
        <div class="searchnone">
          <h1 class="page-title category-title">Recherche</h1>
          <div class="category-total">
            <strong>{{ getProduitRows }}</strong> produit(s)
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
    if (this.$route.params.id)
      this.category_products({
        id: this.$route.params.id,
        page: this.page,
        perPage: this.perPage,
      });
    else this.setup(this.$route.query);
    this.all_categories();
  },
  watch: {
    $route(newRoute) {
      if (newRoute.params.id)
        this.category_products({
          id: newRoute.params.id,
          page: this.page,
          perPage: this.perPage,
        });
      else this.setup(newRoute.params);
    },
    categorie(cat) {
      if (cat.id)
        this.$router.push({ name: "produitList", params: { id: cat.id } });
      else this.$router.push({ name: "categories" });
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
    width: 75%;
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
    }
  }
}
</style>