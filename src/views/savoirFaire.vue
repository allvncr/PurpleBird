<template>
  <div class="aboutus">
    <div class="container">
      <h1 class="page-title"><span>Notre</span> savoir faire</h1>

      <p>
        <span class="brand">Pour qui et pourquoi un objet publicitaire ? </span>
      <ul>
        <li>Remercier un client pour le fidéliser</li>
        <li>Communiquer et pérenniser votre marque</li>
        <li>Marquer un évènement</li>
        <li>Lancer un nouveau produit</li>
        <li>Remercier vos collaborateurs</li>
        <li>Stimuler votre réseau de ventes</li>
      </ul>
      </p>

      <p>
        <span class="brand">Saviez-vous que ?</span>
      <ul>
        <li>99% des Français conservent les objets publicitaires qu’ils reçoivent</li>
        <li>81% déclarent s’en servir et retenir la marque associée au produit</li>
      </ul>
      </p>

      <p>
        <span class="brand">A quelle occasion les Français aiment-ils qu’on leur remette des objets
          publicitaires?</span>
      <ul>
        <li>92% pour les remercier de leur fidélité</li>
        <li>85% pour les remercier d'un premier achat</li>
        <li>89% lors d’un évènement commercial, culturel ou sportif</li>
      </ul>
      </p>

      <p>
        <span class="brand">Délais Express</span> <br>
        Chez <span class="brand">PURPLEBIRD</span>, nous prenons l’engagement de traiter vos commandes dans les
        meilleurs délais. Nous nous adapterons à vos plannings même les plus serrés.
        Il ne vous reste plus que 3, 5 ou 7 jours avant le début de votre opération ?
        Nous sélectionnerons pour vous des objets réalisables en un temps record : carnets, sacs en coton, t-shirts,
        clés USB, connectiques multiports, bar à batterie...
        Interrogez-nous, nous avons des idées à foison et proposons des solutions rapides !
      </p>
    </div>
  </div>
</template>
  
<style lang="scss" scoped>
.aboutus {
  background-image: url(../assets/background-aboutus.jpg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 64px 0;
}

.container {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 64px;
}

.page-title {
  font-size: 56px;
  line-height: 1.15;
  margin-bottom: 24px;
  text-align: center;

  span {
    color: $secondary;
    display: inline-block;
  }
}

p {
  margin-bottom: 14px;

  ul {
    list-style: circle !important;
  }

  .brand {
    color: $secondary;
    display: inline-block;
    font-weight: 900;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
}
</style>