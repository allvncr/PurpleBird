const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      css: {
        modules: {
          auto: () => true
        }
      },
      scss: {
        additionalData: `
                    @import "@/assets/global.scss";
                `,
      },
    },
  },
});
