<template>
<div class="container">
  <section class="row">
    <div class="col-6">
      <h4>Vous cherchez un emploi ?</h4>
      <p>
        Nous apprécions les talents qui peuvent transmettre des valeurs, encourager l’innovation
        et contribuer de manière significative à la réussite.
      </p>
      <router-link to="/candidatures">Voir toutes les offres</router-link>
    </div>
    <div class="col-6">
      <img src="../assets/recrutement.png">
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "recrutementPage",
  mounted() {
    document.title = "Recrutement";
  },
}
</script>

<style lang="scss" scoped>

section {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

h4 {
  color: $primary;
}

a {
  color: $secondary;
}

img {
  width: 100%;
}

</style>
