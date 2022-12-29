<template>
  <div>
    <div class="container" v-if="getProduit">
      <section>
        <div class="breadcrumb-responsive">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Accueil</router-link></li>
            <li class="breadcrumb-item"><router-link to="/categories">Produits</router-link></li>
            <li class="breadcrumb-item"><a v-if="produit_id">{{ getProduit.name }}</a></li>
          </ol>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-xl-8 col-lg-7">
            <div class="row justify-content-center">
              <div class="col-9">
                <img
                    :src="getProduit.urlimages[0]"
                    :alt="getProduit.name"
                />
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="product-details-content">
              <h1 class="h2">{{ getProduit.name }}</h1>
              <h2><small>À partir de </small>{{ getProduit.price }} €</h2>
              <p><strong>Référence : {{ getProduit.reference }}</strong></p><br>

              <p>{{ getProduit.description }}</p>
              <div class="pro-details-rating-wrap pb-2">
                <div class="pro-details-rating">
                  <div class="row d-flex justify-content-center ml-2">
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "produitDetail",

  methods: {
    ...mapActions(["one_product"]),
  },

  computed:{
    ...mapGetters(["getProduit"]),
    produit_id(){
      return this.$route.params.id
    }
  },

  mounted() {
    this.one_product(this.$route.params)
  }
}
</script>

<style lang="scss" scoped>

.container {
  padding: 0 15px 128px;
}

.breadcrumb-responsive {
  margin-bottom: 64px;

  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: .75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: .25rem;

    a {
      outline: medium none;
      color: #15273e;
    }
  }
}

.product-details-content {
  h1 {
    font-size: 2rem;
    margin-bottom: .5rem;
  }

  h2 {
    color: $secondary;
    font-size: 20px;
    font-weight: 500;
    margin: 0 0 20px;
  }

  p {
    color: $black;
    line-height: 25px;
    font-size: 14px;
    margin: 0;
  }
}

img{
  max-width: 100%;
  max-height: 400px;
}

</style>
