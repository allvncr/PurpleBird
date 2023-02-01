<template>
  <div>
    <div class="container">
      <section>
        <header>Catalogues Objects Publicitaires</header>
        <div class="image-grid">
          <a href="https://heyzine.com/flip-book/a371410d53.html" target="_blank">
            <img :src="image1" />
          </a>

          <a href="https://heyzine.com/flip-book/89fbe399b6.html" target="_blank">
            <img :src="image2" />
          </a>

          <a href="https://heyzine.com/flip-book/5ab6219686.html" target="_blank">
            <img :src="image3" />
          </a>
        </div>
      </section>
      <section>
        <header>Catalogues Textiles Publicitaires</header>
        <div class="image-grid">
          <a href="https://heyzine.com/flip-book/19f2643a78.html" target="_blank">
            <img :src="image4" />
          </a>

          <a href="https://heyzine.com/flip-book/b332d8d341.html" target="_blank">
            <img :src="image5" />
          </a>
        </div>
      </section>
    </div>
  </div>
</template>


<script setup>
import image1 from "../assets/catalogue/image1.jpg";
import image2 from "../assets/catalogue/image2.jpg";
import image3 from "../assets/catalogue/image3.jpg";
import image4 from "../assets/catalogue/image4.jpg";
import image5 from "../assets/catalogue/image5.png";
</script>

<script>
export default {
  mounted() {
    document.title = "Catalogues";
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 32px 0;
}

section {
  margin-bottom: 12px;
  header {
    font-size: 14px;
    font-weight: 600;
    color: #000;
    padding: 8px 0;
    border-bottom: 1px solid #000;
  }

  .image-grid {
    display: flex;
    flex-wrap: wrap;

    a {
      text-decoration: none;
      width: 20%;
    }

    img {
      max-width: 154px;
      border: 1px solid #333;
      height: 195px;
      margin: 10px;
    }
  }
}
</style>
