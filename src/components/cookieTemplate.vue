<template>
  <div>
    <aside class="dark-scheme" v-if="showCookie">
      <div class="info-bar-container">
        <div class="info-bar-content">
          <div class="cookie-notice">
            <p>
              Nous utilisons des cookies pour vous offrir la meilleure
              expérience sur notre site.
            </p>
            <p>
              Vous pouvez vérifier quels cookies nous utilisons
              <router-link to="/cgu" class="change-settings"
                >Conditions générales d'utilisation</router-link
              >.
            </p>
          </div>
          <!--  .moove-gdpr-cookie-notice -->
          <div class="button-holder">
            <button
              class="btn"
              aria-label="Accepter"
              @click="showCookie = false"
            >
              Accepter
            </button>
            <button
              class="btn"
              aria-label="Rejeter"
              @click="showCookie = false"
            >
              Rejeter
            </button>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCookie: null,
    };
  },

  mounted() {
    this.showCookie = true;
  },
};
</script>

<style lang="scss" scoped>
.dark-scheme {
  background-color: $primary;
  border-top: 1px solid #fff;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 60px;
  max-height: 400px;
  color: #fff;
  z-index: 9900;

  .info-bar-container {
    padding: 10px 40px;
    position: static;
    display: inline-block;

    .info-bar-content {
      padding-left: 30px;
      padding-right: 30px;
      text-align: left;
      display: flex;
      align-items: center;
      width: 100%;
    }

    .change-settings {
      text-decoration: underline;
      color: $white;

      &:hover {
        color: $secondary;
      }
    }
  }

  .button-holder {
    display: flex;
    align-items: center;
    padding-left: 3vw;

    button {
      font-size: 14px;
      line-height: 20px;
      color: #fff;
      font-weight: 700;
      text-decoration: none;
      border-radius: 150px;
      padding: 8px 30px;
      transition: all 0.3s ease;
      border: none;
      display: inline-block;
      margin: 3px 4px;
      white-space: nowrap;
      text-transform: none;
      letter-spacing: 0;
      background-color: $secondary;
      //   #0082ca
    }
  }
}
</style>
