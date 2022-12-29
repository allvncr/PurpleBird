<template>
  <div class="aboutus">
    <div class="container">
      <h1 class="page-title"><span>Notre</span> savoir-faire</h1>

      <ul class="group">
        <li class="media">
          <div class="media-img">
            <img src="https://www.rose.fr/images/feature-pink-1.jpg">
          </div>
          <div class="media-main">
            <h2> <span>Un objet</span> publicitaire ?</h2>
            <div class="media-desc">
              <p>Pour Qui ? Pour Quoi ?</p>
              <ul>
                <li>Remercier un client pour le fidéliser</li>
                <li>Communiquer et pérenniser votre marque</li>
                <li>Marquer un évènement</li>
                <li>Lancer un nouveau produit</li>
                <li>Remercier vos collaborateurs</li>
                <li>Stimuler votre réseau de ventes</li>
              </ul>
              <br>
              <p>Saviez-vous que ?</p>
              <ul>
                <li>99% des Français conservent les objets publicitaires qu’ils reçoivent</li>
                <li>81% déclarent s’en servir et retenir la marque associée au produit</li>
              </ul>
              <br>
              <p>A quelle occasion les Français aiment-ils qu’on leur remette des objets
                publicitaires?</p>
              <ul>
                <li>92% pour les remercier de leur fidélité</li>
                <li>85% pour les remercier d'un premier achat</li>
                <li>89% lors d’un évènement commercial, culturel ou sportif</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="media">
          <div class="media-main">
            <h2><span>Délais</span> Express</h2>
            <div class="media-desc">
              Chez <span class="brand">PURPLEBIRD</span>, nous prenons l’engagement de traiter vos commandes dans les
              meilleurs délais. Nous nous adapterons à vos plannings même les plus serrés.
              Il ne vous reste plus que 3, 5 ou 7 jours avant le début de votre opération ? <br>
              Nous sélectionnerons pour vous des objets réalisables en un temps record : carnets, sacs en coton, t-shirts,
              clés USB, connectiques multiports, bar à batterie... <br>
              Interrogez-nous, nous avons des idées à foison et proposons des solutions rapides !
            </div>
          </div>
          <div class="media-img">
            <img src="https://www.rose.fr/images/feature-pink-3.jpg">
          </div>
        </li>
      </ul>
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
    color: $primary;
    display: inline-block;
  }
}

p {
  margin-bottom: 14px;

  ul {
    list-style: inside circle !important;
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

.media {
  margin: 64px 0;
  display: flex;

  .media-img, .media-main {
    width: 50%;
    padding: 0 15px;
  }

  img{
    width: 100%;
    border-radius: 50%;
  }

  .media-main {
    h2 {
      span{
        color: $secondary;
      }
      color: $primary;
      font-size: 30px;
      margin-bottom: 24px;
    }

    .media-desc {
      font-size: 14px;
      p {
        margin-bottom: 0;
        font-weight: 600;
      }
    }
  }
}
</style>
