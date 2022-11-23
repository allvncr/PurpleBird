<template>
  <div class="aboutus">
    <div class="container">
      <h1 class="page-title"><span>Qui</span> sommes-nous ?</h1>
      <p>
        <span class="brand">PURPLEBIRD</span>
        est une agence de communication spécialisée dans l’objet publicitaire,
        les cadeaux d’entreprises, du textile personnalisé et tout type
        d’opérations de promotion pour les entreprises et les professionnels.
        <span class="brand">PURPLEBIRD</span> offre aujourd’hui une solution
        complète et maîtrisée du « produit personnalisé ». Force de proposition,
        professionnel et réactif notre équipe vous aidera à sélectionner vos
        objets publicitaires parmi les meilleurs fabricants du marché afin de
        répondre à l’ensemble de vos demandes et rendre ainsi, la communication
        de votre entreprise plus optimale.
      </p>

      <p>
        <span class="brand">PURPLEBIRD</span>, nous transformerons vos idées en
        produits innovants et remarquables pour votre image.
      </p>

      <p>
        Créée en 2022, <span class="brand">PURPLEBIRD</span> répond à des
        milliers de problématiques pour des structures aussi diverses que
        variées : PME, mairies, banques, établissement financiers, agences de
        publicité, holdings, laboratoires, entreprises publiques, cabinets
        d’avocats, associations, grandes écoles...
      </p>

      <p>
        Notre objectif est de satisfaire vos exigences de communication et de
        marketing en proposant des objets publicitaires de qualité en respectant
        vos budgets et en s’adaptant aux tendances actuelles et à venir.
      </p>

      <p>
        Utilité, originalité et responsabilité sont les critères essentiels pour
        communiquer efficacement auprès de vos cibles.
      </p>

      <p>
        Le savoir-faire de l’agence est complet : <br />
        <span class="brand">PURPLEBIRD</span> propose une large collection de
        produits “prêt à sigler” pour valoriser votre image de professionnels :
        textile, papeterie, articles high-tech, clés USB, outdoor, montres,
        parapluies, bagagerie, art de la table, gastronomie, ainsi qu’une
        sélection de marques et de produits de prestiges, actualisée
        régulièrement en fonction des collections et des saisons. <br />

        <span class="brand">PURPLEBIRD</span> afin de mettre en avant le
        savoir-faire de fabricants locaux et européens, nous mettons en avant
        les fabrications made in France et made in Europe.<br />

        <span class="brand">PURPLEBIRD</span> ,c’est aussi un site Internet
        pionner de l’objet publicitaire issu du développement durable La
        Publicité par l’Objet avec une éthique écologique et Développement
        Durable est en pleine évolution, les entreprises en font un vecteur de
        communication efficace et chargé de sens pour l’environnement.
        <br />
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
    color: $primary;
    display: inline-block;
  }
}

p {
  margin-bottom: 14px;

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
