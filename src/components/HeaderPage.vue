<template>
  <div>
    <div class="logoBlock">
      <div class="logoBlock-header">
        <ul>
          <li>
            <a href="">
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
            </a>
          </li>
          <li>
            <a href="">
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
            </a>
          </li>
        </ul>
      </div>
      <a href="/" class="brand">
        <img src="@/assets/PURPLEBIRD.png" />
      </a>
    </div>
    <div class="navBlock">
      <ul class="nav-pages">
        <li>
          <div
            class="link dropdown"
            title="La société"
            @click="dropdown = !dropdown"
          >
            La société
            <div class="dropdown-container" v-show="dropdown">
              <ul>
                <li>
                  <router-link to="">Qui sommes-nous ?</router-link>
                </li>
                <li>
                  <router-link to="">L'equipe</router-link>
                </li>
                <li>
                  <router-link to="">Notre savoir-faire</router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <router-link to="" title="Nos références">Nos références</router-link>
        </li>
        <li>
          <router-link to="" title="Nous contacter">Nous contacter</router-link>
        </li>
      </ul>
      <ul class="nav-pages">
        <li>
          <router-link :to="{ name: 'panier'}" title="Votre Panier" class="shopping-cart">
            <svg
              class="img shopping-cart-icon"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 391.52 355.52"
            >
              <g>
                <path
                  fill="#28367a"
                  d="M370.961,348.238H205.922c-7.363,0-13.281-5.918-13.281-13.277V176.078H384.16v158.883 C384.238,342.238,378.238,348.238,370.961,348.238L370.961,348.238z M370.961,348.238"
                ></path>
                <path
                  fill="#000"
                  d="M50.32,355.441h110.719c4,0,7.281-3.281,7.281-7.281s-3.281-7.281-7.281-7.281H50.32 c-19.761,0-35.761-16.078-35.761-35.758V75.68H64v30.64c0,4,3.281,7.282,7.281,7.282c4,0,7.278-3.282,7.278-7.282V75.68h96.961 v30.64c0,4,3.281,7.282,7.281,7.282c4,0,7.277-3.282,7.277-7.282V75.68h49.442V92c0,4,3.281,7.281,7.281,7.281 c4,0,7.277-3.281,7.277-7.281V68.398c0-4-3.277-7.277-7.277-7.277h-56.723C189.121,27.199,161.281,0,127.121,0 s-62,27.281-62.961,61.121H7.281c-4,0-7.281,3.277-7.281,7.277v236.723C0.078,332.879,22.641,355.441,50.32,355.441L50.32,355.441z M126.961,14.559c26.078,0,47.437,20.722,48.48,46.64H78.559C79.52,35.281,100.879,14.559,126.961,14.559L126.961,14.559z M126.961,14.559"
                ></path>
                <path
                  fill="#000"
                  d="M237.039,159.121v9.758h-44.398c-4,0-7.282,3.281-7.282,7.281v145.36c0,18.718,15.2,34,34,34H357.52 c18.718,0,34-15.2,34-34V176.078c0-4-3.282-7.277-7.282-7.277H339.84v-9.762c0-28.32-23.039-51.359-51.36-51.359 C260.16,107.68,237.039,130.801,237.039,159.121L237.039,159.121z M376.961,183.359V321.52c0,10.718-8.723,19.441-19.441,19.441 H219.359c-10.718,0-19.437-8.723-19.437-19.441V183.359h37.117v20.403c0,4,3.281,7.277,7.281,7.277s7.282-3.277,7.282-7.277 v-20.403h73.757v20.403c0,4,3.282,7.277,7.282,7.277c4,0,7.281-3.277,7.281-7.277v-20.403H376.961z M288.398,122.238 c20.321,0,36.883,16.563,36.883,36.883v9.758H251.52v-9.758C251.602,138.719,268.078,122.238,288.398,122.238L288.398,122.238z M288.398,122.238"
                ></path>
              </g>
            </svg>
            <span class="shopping-cart-title">Votre panier</span>
            <span class="shopping-cart-bagde">0</span>
          </router-link>
        </li>
      </ul>
      <ul class="nav-pages nav-unstyled">
        <li>
          <router-link to="tel:0147476667" title="tel:01 47 47 66 67">
            01 47 47 66 67
          </router-link>
        </li>
        <li>
          <router-link to="mailto:info@purplebird.fr" title="INFO@PURPLEBIRD.FR">
            INFO@PURPLEBIRD.FR
          </router-link>
        </li>
      </ul>
    </div>
    <div class="searchBlock">
      <form action="">
        <label for=""> CONSULTER NOTRE CATALOGUE ET RECEVOIR UN DEVIS </label>
        <div class="form-group">
          <input
            type="text"
            v-model="search"
            placeholder="Rechercher un object pub ou un cadeau"
          />
          <span class="search-icon">
            <svg
              class="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 11.14 11.14"
              fill="#28367a"
            >
              <title>icon-search</title>
              <path
                class="a"
                d="M11.14,11.42a.85.85,0,0,1-.85.85A.79.79,0,0,1,9.68,12L7.39,9.73a4.62,4.62,0,0,1-2.68.83A4.71,4.71,0,0,1,1.38,9.18,4.71,4.71,0,0,1,0,5.85,4.71,4.71,0,0,1,1.38,2.51a4.77,4.77,0,0,1,1.5-1,4.74,4.74,0,0,1,3.67,0A4.72,4.72,0,0,1,9.06,4a4.84,4.84,0,0,1,.37,1.84A4.61,4.61,0,0,1,8.6,8.52l2.3,2.29A.85.85,0,0,1,11.14,11.42ZM6.83,8a2.89,2.89,0,0,0,.88-2.12,2.86,2.86,0,0,0-.88-2.12,2.86,2.86,0,0,0-2.12-.88,2.89,2.89,0,0,0-2.12.88,2.9,2.9,0,0,0-.88,2.12,3,3,0,0,0,3,3A2.9,2.9,0,0,0,6.83,8Z"
                transform="translate(0 -1.13)"
              ></path>
            </svg>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown: false,
      search: null
    };
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
// Variable definition
$black: #2a2a2a;
$white: #fff;
$grey-light: #e6e6e6;
$grey-dark: #d9d9d9;
$primary: #3e4ca7;
$secondary: #ff6391;

.logoBlock {
  .logoBlock-header {
    padding: 8px 30px;
    background-color: $primary;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    ul {
      display: flex;
      margin: 0;
      padding: 0;

      li {
        margin-right: 8px;
      }
    }

    a {
      background-color: $white;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 24px;
      padding: 6px !important;
      vertical-align: top;
      width: 24px;

      &:hover {
        background-color: $secondary;
      }
    }
  }
  .brand {
    display: block;
    padding: 30px 15px;
    max-width: 300px;
    margin: auto;
  }
}

.navBlock {
  border-top: 1px solid $grey-dark;
  border-bottom: 1px solid $grey-dark;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-pages {
    display: flex;
    align-items: center;
    border-right: 1px solid $grey-dark;
    padding-left: 36px;
    padding-right: 36px;
    position: relative;
    margin: 0;

    li a, li .link {
      cursor: pointer;
      color: $black;
      display: block;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.5;
      padding: 10px 20px;
      text-transform: uppercase;

      &:hover {
        color: $primary;
        text-decoration: underline;
      }

      .shopping-cart-icon {
        display: inline-block;
        height: 30px;
        width: 30px;
        vertical-align: middle;
      }

      .shopping-cart-title {
        margin: 0 5px;
      }

      .shopping-cart-bagde {
        background-color: $primary;
        border-radius: 12px;
        color: $white;
        display: inline-block;
        height: 24px;
        line-height: 24px;
        padding: 0 !important;
        text-align: center;
        vertical-align: middle;
        width: 24px;
      }
    }

    .dropdown {
      &::after {
        border: 4px solid transparent;
        border-top-color: currentColor;
        content: "";
        display: inline-block;
        margin-bottom: 1px;
        margin-left: 2px;
        vertical-align: text-bottom;
      }
      ul {
        li a {
          color: $black;
          display: block;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.5;
          padding: 10px 20px;
          text-transform: uppercase;

          &:hover {
            color: $secondary;
          }
        }
      }
    }

    .dropdown-container {
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 160px;
      padding: 5px 0;
      margin: 2px 0 0;
      font-size: 14px;
      text-align: left;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.18);
      border: 1px solid rgba(0, 0, 0, 0.15);
      background-color: $white;
      background-clip: padding-box;
    }
  }

  .nav-unstyled {
    border: none;
  }
}

.searchBlock {
  padding: 20px 15px;
  margin: auto;

  form {
    display: flex;
    align-items: center;
    justify-content: center;

    label {
      display: block;
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 0;
      padding: 9px 50px 9px 56px;
      font-weight: 600;
      text-transform: uppercase;
    }
    .form-group {
      position: relative;
      width: 45%;
      input {
        width: 100%;
        font-size: 16px;
        line-height: 1.25;
        padding: 8px 12px;

        &::placeholder {
          text-transform: uppercase;
        }
      }

      .search-icon {
        position: absolute;
        padding: 8px 12px;
        top: 0;
        right: 0;
        svg {
          height: 24px;
          vertical-align: top;
          width: 24px;
        }
      }
    }
  }
}
</style>