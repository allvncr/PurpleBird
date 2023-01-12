<template>
  <div id="app">
    <HeaderSearch v-if="showSearch" />
    <HeaderPage v-else-if="ShowHeader" />
    <router-view />
    <FooterPage v-if="ShowHeader" />
    <cookie-template />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderPage from "@/components/HeaderPage.vue";
import HeaderSearch from "@/components/HeaderList.vue";
import FooterPage from "@/components/FooterPage.vue";
import cookieTemplate from "@/components/cookieTemplate.vue";

export default {
  components: {
    HeaderPage,
    FooterPage,
    cookieTemplate,
    HeaderSearch
  },

  computed: {
    ShowHeader() {
      if (this.$route.meta.disableHeader) return false;
      return true;
    },

    showSearch() {
      if (this.$route.name == "categories" || this.$route.name == "produitList")
        return true;
      return false;
    },
  },
};
</script>

<style lang="scss"></style>
