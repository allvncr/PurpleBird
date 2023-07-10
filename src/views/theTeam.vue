<template>
  <div class="aboutus">
    <div class="container">
      <h1 class="page-title"><span>L'</span>équipe</h1>

      <div class="team">
        <div class="about-feature">
          <img class="rounded-circle" src="../assets/pole-crea.png" />
          <h5>Micha TOTSHI</h5>
          <p>
            Chargée de projet marketing et communication<br />
            <a href="mailto:micha.totshi@purplebird.fr">
              micha.totshi@purplebird.fr
            </a>
          </p>
        </div>

        <div class="about-feature">
          <img class="rounded-circle" src="../assets/pole-crea.png" />
          <h5>Marie Thérèse Y.</h5>
          <p>
            Responsable Commerciale<br />
            <a href="mailto:marie.thérèse@purplebird.fr">
              marie.thérèse@purplebird.fr
            </a>
          </p>
        </div>

        <div class="about-feature">
          <img class="rounded-circle" src="../assets/pole-crea.png" />
          <h5>Thomas SIMON</h5>
          <p>
            Responsable Commercial<br />
            <a href="mailto:thomas.simon@purplebird.fr">
              thomas.simon@purplebird.fr
            </a>
          </p>
        </div>

        <div class="about-feature">
          <img class="rounded-circle" src="../assets/pole-crea.png" />
          <h5></h5>
          <p>
            Administration et Finance<br />
            <a href="mailto:admin@purplebird.fr"> admin@purplebird.fr </a>
          </p>
        </div>

        <div class="about-feature">
          <img class="rounded-circle" src="../assets/pole-crea.png" />
          <h5>Pôle Sourcing & Achat</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = "L'equipe";
  },
};
</script>

<style lang="scss" scoped>
.aboutus {
  background-image: url(../assets/équipe.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 64px 0;
}

.container {
  @media only screen and (max-width: $phone) {
    padding: 32px 15px;
  }
  background-color: rgba(255, 255, 255, 0.95);
  padding: 64px;
}

.page-title {
  @media only screen and (max-width: $phone) {
    font-size: 42px;
  }
  font-size: 56px;
  line-height: 1.15;
  margin-bottom: 24px;
  text-align: center;

  span {
    color: $primary;
    display: inline-block;
  }
}

.rounded-circle {
  width: 100%;
  max-width: 170px;
}

.team {
  @media only screen and (max-width: $phone) {
    display: block;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .about-feature {
    @media only screen and (max-width: $tablette) {
      width: 50%;
    }
    @media only screen and (max-width: $phone) {
      width: 100%;
    }
    width: 25%;
    text-align: center;

    img {
      border-radius: 50%;
      margin: 0 auto;
    }

    h5 {
      font-size: 16px;
      font-weight: 600;
      margin: 10px 0 0;
    }
    p,
    a {
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      color: $black;
    }
  }
}

.lead {
  font-size: 21px;
  line-height: 1.4;
  .brand {
    color: $secondary;
    display: inline-block;
    font-weight: 800;
    line-height: 1.25;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
}
</style>
