<template>
  <section>
    <h1>Panier</h1>
    <ul>
      <li :class="{ active: step == 1 }">
        <span>1</span>
        &nbsp;Panier
      </li>
      <li :class="{ active: step == 2 }">
        <span>2</span>
        &nbsp;Coordonnées
      </li>
      <li :class="{ active: step == 3 }">
        <span>3</span>
        &nbsp;Confirmation
      </li>
    </ul>
    <p>
      Vous pouvez modifier les quantités souhaitées dans les cases, puis cliquer
      sur le bouton <strong>RECALCULER</strong> pour mettre à jour le total.
    </p>
    <p>Vide</p>
    <div class="action">
      <router-link to="" class="btn btn-default"
        >Continuer votre selection</router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
    };
  },
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
    }
  }

  .active {
    color: $primary;
    span {
      background-color: $primary;
    }
  }
}
p {
  margin-bottom: 20px;
}
</style>