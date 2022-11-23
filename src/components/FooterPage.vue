<template>
  <div class="footer">
    <div class="navbar">
      <div class="container">
        <ul>
          <li>
            <router-link :to="{ name: 'savoirFaire' }"
              >Notre savoir-faire</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'quiSommeNous' }"
              >Qui sommes-nous ?</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'equipe' }" title="L'équipe"
              >L'équipe</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'contact' }" title="Nous contacter"
              >Nous contacter</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="navbar-body">
        <div class="block">
          <div class="office">
            <div class="office-title">Siège social &amp; showroom</div>
            <div class="office-addr">
              31, rue des Poissonniers<br />92200 Neuilly-sur-Seine<br />France
            </div>
            <div class="office-directions">ligne 1 - Pont de Neuilly</div>
          </div>
        </div>
        <div class="block">
          <ul class="nav-contact">
            <li>
              Tél:
              <router-link to="tel:+33147476667" title="tel:+33147476667"
                >+33 (0)1 47 47 66 67</router-link
              >
            </li>
            <li class="text-truncate">
              Email:
              <router-link
                to="mailto:info@purplebird.fr"
                title="mailto:info@purplebird.fr"
                >info@purplebird.fr</router-link
              >
            </li>
          </ul>
          <ul class="nav-social">
            <li>
              <router-link
                to=""
                title="Profil LinkedIn de Purplebird"
                target="_blank"
              >
                <svg
                  class="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10.29 9.83"
                >
                  <title>icon-linkedin</title>
                  <path
                    d="M2.48,2.41a1.08,1.08,0,0,1-.34.82,1.26,1.26,0,0,1-.91.33h0a1.22,1.22,0,0,1-.89-.33A1.11,1.11,0,0,1,0,2.41a1.08,1.08,0,0,1,.34-.82,1.27,1.27,0,0,1,.91-.32,1.22,1.22,0,0,1,.89.32A1.16,1.16,0,0,1,2.48,2.41ZM2.34,4.46V11.1H.13V4.46Zm8,2.83V11.1H8.08V7.55a1.92,1.92,0,0,0-.27-1.1A.94.94,0,0,0,7,6.05a1,1,0,0,0-.7.23,1.44,1.44,0,0,0-.43.57,1.61,1.61,0,0,0-.07.54V11.1H3.56c0-1.79,0-3.23,0-4.34s0-1.76,0-2V4.46h2.2v1h0A2.49,2.49,0,0,1,6.4,4.7,1.85,1.85,0,0,1,7,4.41a2.66,2.66,0,0,1,.77-.1,2.36,2.36,0,0,1,1.84.76A3.18,3.18,0,0,1,10.29,7.29Z"
                    transform="translate(0 -1.27)"
                  ></path>
                </svg>
              </router-link>
            </li>
            <li>
              <router-link
                to=""
                title="Profil Instagram de Purplebird"
                target="_blank"
              >
                <svg
                  class="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10.29 10.29"
                >
                  <title>icon-instagram</title>
                  <path
                    d="M10.29,6.27c0,1,0,1.73,0,2.13a3.1,3.1,0,0,1-.83,2.15,3.12,3.12,0,0,1-2.15.83c-.4,0-1.1,0-2.13,0s-1.73,0-2.12,0a3.12,3.12,0,0,1-2.16-.83A3.14,3.14,0,0,1,0,8.4C0,8,0,7.3,0,6.27S0,4.54,0,4.15A3.12,3.12,0,0,1,.86,2,3.12,3.12,0,0,1,3,1.17c.39,0,1.1,0,2.12,0s1.73,0,2.13,0A3.12,3.12,0,0,1,9.42,2a3.08,3.08,0,0,1,.83,2.15C10.27,4.54,10.29,5.25,10.29,6.27ZM5.66,2.05H3.92l-.64,0a5.7,5.7,0,0,0-.69.07,2.39,2.39,0,0,0-.48.12,1.77,1.77,0,0,0-1,1A2.39,2.39,0,0,0,1,3.72a4.21,4.21,0,0,0-.07.69c0,.27,0,.49,0,.65V7.49c0,.16,0,.38,0,.65A4.21,4.21,0,0,0,1,8.83a2.39,2.39,0,0,0,.12.48,1.77,1.77,0,0,0,1,1,3.35,3.35,0,0,0,.48.12c.19,0,.42.05.69.07l.64,0H6.36l.65,0c.27,0,.5,0,.69-.07a3.35,3.35,0,0,0,.48-.12,1.79,1.79,0,0,0,.59-.39,1.76,1.76,0,0,0,.38-.59,3.24,3.24,0,0,0,.13-.48,5.92,5.92,0,0,0,.06-.69c0-.27,0-.49,0-.65s0-.39,0-.7v-1c0-.31,0-.54,0-.7s0-.38,0-.65a5.92,5.92,0,0,0-.06-.69,3.24,3.24,0,0,0-.13-.48,1.76,1.76,0,0,0-.38-.59,1.79,1.79,0,0,0-.59-.39,2.39,2.39,0,0,0-.48-.12A5.7,5.7,0,0,0,7,2.07l-.65,0ZM7,4.41a2.54,2.54,0,0,1,.77,1.86A2.54,2.54,0,0,1,7,8.14a2.5,2.5,0,0,1-1.87.77A2.63,2.63,0,0,1,2.5,6.27a2.54,2.54,0,0,1,.77-1.86,2.54,2.54,0,0,1,1.87-.77A2.5,2.5,0,0,1,7,4.41ZM6.35,7.49a1.7,1.7,0,0,0,0-2.43,1.65,1.65,0,0,0-1.21-.5A1.72,1.72,0,0,0,3.93,7.49,1.68,1.68,0,0,0,5.14,8,1.65,1.65,0,0,0,6.35,7.49Zm2-4.4a.6.6,0,0,1,.18.44A.58.58,0,0,1,8.32,4a.59.59,0,0,1-.43.19A.61.61,0,0,1,7.45,4a.58.58,0,0,1-.18-.43.61.61,0,0,1,.62-.62A.58.58,0,0,1,8.32,3.09Z"
                    transform="translate(0 -1.13)"
                  ></path>
                </svg>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="block">
          <div class="object-media">
            <img src="@/assets/PURPLEBIRD.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
    <div class="navbar-bottom">
      <div class="container">
        <div class="scroll" @click="scrollUp">
          <svg
            class="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16.667 9.996"
          >
            <path
              fill="#ffffff"
              d="M1.006 7.938C.45 7.938 0 8.398 0 8.967c0 .568.45 1.029 1.006 1.029.555 0 1.005-.461 1.005-1.029 0-.569-.45-1.029-1.005-1.029zm2.442-2.646c-.555 0-1.006.461-1.006 1.029S2.893 7.35 3.448 7.35c.556 0 1.006-.461 1.006-1.029s-.45-1.029-1.006-1.029zm0 2.646c-.555 0-1.006.46-1.006 1.029 0 .568.451 1.029 1.006 1.029.556 0 1.006-.461 1.006-1.029 0-.569-.45-1.029-1.006-1.029zm2.443-5.292c-.556 0-1.006.46-1.006 1.028 0 .57.45 1.03 1.006 1.03.555 0 1.005-.46 1.005-1.03 0-.568-.45-1.028-1.005-1.028zm0 2.646c-.556 0-1.006.461-1.006 1.029s.45 1.029 1.006 1.029c.555 0 1.005-.461 1.005-1.029s-.45-1.029-1.005-1.029zm0 2.646c-.556 0-1.006.46-1.006 1.029 0 .568.45 1.029 1.006 1.029.555 0 1.005-.461 1.005-1.029 0-.569-.45-1.029-1.005-1.029zM8.333 0c-.555 0-1.006.46-1.006 1.028 0 .569.451 1.03 1.006 1.03.556 0 1.006-.461 1.006-1.03C9.339.46 8.889 0 8.333 0zm0 2.646c-.555 0-1.006.46-1.006 1.028 0 .57.451 1.03 1.006 1.03.556 0 1.006-.46 1.006-1.03 0-.568-.45-1.028-1.006-1.028zm0 2.646c-.555 0-1.006.461-1.006 1.029S7.778 7.35 8.333 7.35c.556 0 1.006-.461 1.006-1.029s-.45-1.029-1.006-1.029zm0 2.646c-.555 0-1.006.46-1.006 1.029 0 .568.451 1.029 1.006 1.029.556 0 1.006-.461 1.006-1.029 0-.569-.45-1.029-1.006-1.029zm2.443-5.292c-.556 0-1.006.46-1.006 1.028 0 .57.45 1.03 1.006 1.03.555 0 1.006-.46 1.006-1.03 0-.568-.451-1.028-1.006-1.028zm0 2.646c-.556 0-1.006.461-1.006 1.029s.45 1.029 1.006 1.029c.555 0 1.006-.461 1.006-1.029s-.451-1.029-1.006-1.029zm0 2.646c-.556 0-1.006.46-1.006 1.029 0 .568.45 1.029 1.006 1.029.555 0 1.006-.461 1.006-1.029 0-.569-.451-1.029-1.006-1.029zm2.442-2.646c-.555 0-1.005.461-1.005 1.029s.45 1.029 1.005 1.029c.556 0 1.006-.461 1.006-1.029s-.45-1.029-1.006-1.029zm0 2.646c-.555 0-1.005.46-1.005 1.029 0 .568.45 1.029 1.005 1.029.556 0 1.006-.461 1.006-1.029 0-.569-.45-1.029-1.006-1.029zm2.443 0c-.556 0-1.006.46-1.006 1.029 0 .568.45 1.029 1.006 1.029.555 0 1.006-.461 1.006-1.029 0-.569-.451-1.029-1.006-1.029z"
            ></path>
          </svg>
        </div>
        <p class="copyright">© 2022&nbsp;PURPLEBIRD</p>
        <ul class="nav nav-unstyled nav-pages">
          <li>
            <router-link
              :to="{ name: 'condition utilisation' }"
              title="Conditions générales d'utilisation"
              >Conditions générales d'utilisation</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'condition de vente' }"
              title="Conditions générales de vente"
              >Conditions générales de vente</router-link
            >
          </li>
          <li>
            Site réalisé par
            <a
              href="https://www.linkedin.com/in/vianney-ablo-76a3ab19a/"
              title="Ablo Vianney"
              target="_blank"
              >Ablo Vianney</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollUp() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $black;
  color: $grey-dark;
  font-size: 12px;
  line-height: 1.5;
}

.navbar {
  background-color: transparent;
  border: 0;
  border-radius: 0;
  color: inherit;
  min-height: 0;
  margin-bottom: 0;
  position: static;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid $grey-dark;

    li {
      @media only screen and (max-width: $phone) {
        width: 50%;
      }
      width: 25%;
      display: flex;
      justify-content: center;
    }

    li a {
      color: $grey-dark;
      display: inline-block;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.42857143;
      margin: 0;
      padding: 24px 12px;
      text-transform: uppercase;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.container {
  @media only screen and (max-width: $phone) {
    padding: 16px;
  }
  padding: 64px 16px 16px;
  color: $grey-dark;
}

.navbar-body {
  @media only screen and (max-width: $phone) {
    grid-template-columns: auto auto;
  }
  display: grid;
  grid-template-columns: auto auto auto;

  .block {
    font-size: 16px;
    padding: 0 16px;

    .office {
      font-weight: 600;
      margin-bottom: 16px;
      &-title {
        text-transform: uppercase;
      }
    }

    a {
      color: $grey-dark;
    }

    .nav-contact {
      line-height: 1.5;
      font-weight: 600;
      margin-bottom: 4px;
    }

    .nav-social {
      margin-bottom: 16px;
      display: flex;

      li a {
        background-color: #959595;
        border-radius: 12px;
        display: inline-block;
        margin-right: 4px;
        height: 24px;
        padding: 6px;
        vertical-align: top;
        width: 24px;

        .img {
          vertical-align: top;
        }
      }
    }

    .object-media img {
      @media only screen and (max-width: $phone) {
        display: none;
      }
      display: block;
      max-height: 72px;
    }
  }
}

.navbar-bottom {
  @media only screen and (max-width: $phone) {
    padding: 16px 0;
  }
  background-color: $white;
  color: #959595;
  padding: 32px 0;
  font-size: 14px;

  & .container {
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }

  .scroll {
    @media only screen and (max-width: $phone) {
      display: none;
    }
    position: absolute;
    cursor: pointer;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background-color: $primary;
    border-radius: 27px;
    display: block;
    height: 54px;
    line-height: 24px;
    padding: 15px;
    width: 54px;
  }

  .copyright {
    @media only screen and (max-width: $phone) {
      width: 100%;
    }
    margin-bottom: 0;
    text-transform: uppercase;
    &::after {
      content: "-";
      margin-left: 5px;
      margin-right: 5px;
    }
  }

  ul {
    display: flex;
    li {
      flex-grow: 1;

      a {
        color: #787878;
        display: inline-block;
      }

      &:not(:last-child)::after {
        content: "-";
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }
}
</style>
