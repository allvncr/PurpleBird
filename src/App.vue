<template>
  <div id="app">
    <HeaderPage />
    <router-view />
    <FooterPage />
    <cookie-template />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import cookieTemplate from "@/components/cookieTemplate.vue";

export default {
  components: {
    HeaderPage,
    FooterPage,
    cookieTemplate,
  },
};
</script>

<style lang="scss"></style>
