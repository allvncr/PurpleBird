<template>
  <section>
    <h1>Panier</h1>
    <ul>
      <li>
        <router-link to="/panier">
          <span>1</span>
          Panier
        </router-link>
      </li>
      <li>
        <router-link to="/resume">
          <span>2</span>
          Coordonnées
        </router-link>
      </li>
      <li>
        <router-link to="/checkout">
          <span>3</span>
          Confirmation
        </router-link>
      </li>
    </ul>

    <router-view></router-view>
  </section>
</template>

<script>
// import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    routerName() {
      return this.$route.name;
    },
  },
  mounted() {
    document.title = "Panier";
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 64px 0;
  width: 75%;
  margin: auto;
}
h1 {
  font-size: 56px;
  line-height: 1.15;
  font-weight: 600;
  margin: 0 auto 24px auto;
  overflow: hidden;
  padding-bottom: 0;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
}
ul {
  border-top: 1px solid $grey-dark;
  border-bottom: 1px solid $grey-dark;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  li {
    flex-grow: 1;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
    padding: 9px 18px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      background-color: $secondary;
      border-radius: 12px;
      color: $white;
      display: inline-block;
      height: 24px;
      line-height: 24px;
      padding: 0;
      text-align: center;
      width: 24px;
      margin-right: 4px;
    }
  }

  a {
    color: $black;
  }

  .router-link-exact-active {
    color: $primary;
    span {
      background-color: $primary;
    }
  }
}
</style>