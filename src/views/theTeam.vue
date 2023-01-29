<template>
  <div class="aboutus">
    <div class="container">
      <h1 class="page-title"><span>L'</span>équipe</h1>

      <div class="team">
        <div class="about-feature">
          <img class="rounded-circle" src="../assets/pole-crea.png" width="170" />
          <h5>Micha TOTSHI</h5>
          <p>
            Gérante<br />
            <a href="mailto:micha.totshi@purplebird.fr">
              micha.totshi@purplebird.fr
            </a>
            <br />
            <a href="tel:0617312495">06 17 31 24 95</a><br />
          </p>
        </div>

        <div class="about-feature">
          <img class="rounded-circle" src="../assets/pole-crea.png" width="170" />
          <h5>Marie Thérèse Y.</h5>
          <p>
            Responsable Commerciale<br />
            <a href="mailto:marie.thérèse@purplebird.fr">
              marie.thérèse@purplebird.fr
            </a>
          </p>
        </div>

        <div class="about-feature">
          <img class="rounded-circle" src="../assets/pole-crea.png" width="170" />
          <h5>Thomas SIMON</h5>
          <p>
            Responsable Commercial<br />
            <a href="mailto:thomas.simon@purplebird.fr">
              thomas.simon@purplebird.fr
            </a>
          </p>
        </div>

        <div class="about-feature">
          <img class="rounded-circle" src="../assets/pole-crea.png" width="170" />
          <h5>Lois Anne</h5>
          <p>
            Conseiller Clientèle<br />
            <a href="mailto:lois.anne@purplebird.fr">
              lois.anne@purplebird.fr
            </a>
          </p>
        </div>

        <div class="about-feature">
          <img
            class="rounded-circle"
            src="../assets/pole-crea.png"
            width="170"
          />
          <h5>Pôle Sourcing & Achat</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aboutus {
  background-image: url(../assets/équipe.png);
  background-position: center;
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

.team {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .about-feature {
    width: 33%;
    padding: 24px;
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
