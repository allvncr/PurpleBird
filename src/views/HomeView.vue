<template>
  <div class="home">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      no-animation
      :interval="5000"
      controls
      indicators
      background="#ababab"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with image only -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100"
            width="1024"
            height="400"
            src="https://m3.extradtp.net/Org/M97x251006.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100"
            width="1024"
            height="400"
            src="https://m3.extradtp.net/Org/M97x153414.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100"
            width="1024"
            height="400"
            src="https://m3.extradtp.net/Org/M97x153412.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>

    <section
      class="section py-4"
      id="featured-products"
      data-section="featured-products"
      data-category-id="3300"
    >
      <div class="section-content">
        <div class="container">
          <h2 class="page-title">
            <a href="" title="Nouveautés"><span>Les</span> nouveautés</a>
          </h2>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-6 col-md-3 mb-4" v-for="i in 4" :key="i">
            <!-- Card -->
            <div class="product">
              <div
                class="view zoom overlay z-depth-2 d-flex flex-wrap align-items-center justify-content-center"
              >
                <router-link :to="/produit/ + i">
                  <img
                    class="img-fluid w-100"
                    src="https://stopcom.maqprint.fr/files/visuals/medium/9-1886-8.jpg"
                    alt="Carnet de notes A5 en cuir recyclé"
                    title="Carnet de notes A5 en cuir recyclé"
                  />
                </router-link>
              </div>
              <div class="text-center pt-2">
                <h5>
                  <router-link :to="/produit/ + i"
                    >Carnet de notes A5 en cuir recyclé</router-link
                  >
                </h5>

                <h6 class="mb-3">
                  <span class="text-grey"
                    ><small>à partir de</small>

                    <span class="text-grey"> 4,71 € </span>
                  </span>
                </h6>
              </div>
            </div>
            <!-- Card -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.section-content {
  h2 {
    text-align: center;
    font-size: 56px;
    line-height: 1.5;
    margin-bottom: 24px;
    font-weight: 600;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;

    a {
      color: inherit;
      span {
        color: $primary;
      }
    }
  }
}

.backdrop-primary {
  background-color: #ffebf7;
  padding-top: 48px;
}

.group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .item {
    width: 25%;
    padding: 0 15px;

    &:hover .product-actions {
      display: block;
    }

    &:hover .product-details {
      display: none;
    }
  }
}

.product {
  padding: 0 15px;
}

.z-depth-2 {
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.07), 0 6px 20px 0 rgba(0, 0, 0, 0.07);
  height: 390px;
  border-radius: 10px;
}
h1,
h2,
h3,
h4,
h5,
h6,
h5 a {
  color: #15273e;
  margin-top: 0;
  font-style: normal;
  font-weight: 400;
}
</style>
