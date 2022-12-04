<template>
  <div>
    <div class="container">
      <section>
        <div class="breadcrumb-responsive">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Accueil</router-link></li>
            <li class="breadcrumb-item"><router-link to="/categories">Produits</router-link></li>
            <li class="breadcrumb-item"><a v-if="produit_id">Carnet de notes A5 en cuir recyclé</a></li>
          </ol>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-xl-8 col-lg-7">
            <div class="row justify-content-center">
              <div class="col-9">
                <img
                    src="https://stopcom.maqprint.fr/files/visuals/medium/9-1886-8.jpg"
                    alt="Carnet de notes A5 en cuir recycl"
                />
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="product-details-content">
              <h1 class="h2">Carnet de notes A5 en cuir recyclé</h1>
              <h2><small>À partir de </small>4,11 €</h2>

              <p>
                ( Dont 0,01 € d'éco-taxe et
                1,00 € de SORECOP )

              </p>
              <p><strong>Référence :  5-1169</strong></p>

              <p> Afin de faciliter votre manutention, les clés non marquées sont livrées séparément des conditionnements. Garanti sans PVC. Plastique et aluminium.
                <br><br><strong><em>Produit soumis aux éco-taxes en supplément</em></strong></p>
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
export default {
  name: "produitDetail",

  computed:{
    produit_id(){
      return this.$route.params.id
    }
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
