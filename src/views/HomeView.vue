<template>
  <div class="home">
    <div class="sliders">
      <Flicking :options="{ circular: true }">
        <div style="width: 95%;">
          <img
              src="../assets/sliders/ban.jpeg"
              alt="image slot"
          />
        </div>
        <div style="width: 95%;">
          <img
              src="../assets/sliders/BC_2022_1800×600_01.jpg"
              alt="image slot"
          />
        </div>
        <div style="width: 95%;">
          <img
              src="../assets/sliders/gogreen_2022_1800×600_03.jpg"
              alt="image slot"
          />
        </div>
        <div style="width: 95%;">
          <img
              src="../assets/sliders/New.jpeg"
              alt="image slot"
          />
        </div>
      </Flicking>
    </div>

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
      <div class="section-content">
        <div class="container">
          <h2 class="page-title">
            <a href="" title="Partenaires"><span>Nos</span> partenaires</a>
          </h2>
        </div>
      </div>
      <div class="partenaires">
        <Flicking :options="{ circular: true }">
          <div style="width: 35%;">
            <img
                src="../assets/partenaires/LOGO_RTP_RVB.jpg"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                src="../assets/partenaires/Logo_SOLO-Group.jpg"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                src="../assets/partenaires/atf_Noir_CMJN.jpg"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                src="../assets/partenaires/NEO BLU logo avec baseline Bleu RVB.jpg"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                src="../assets/partenaires/SOLS logo avec baseline Noir RVB.jpg"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                style="background-color: #fff;padding: 16px"
                src="../assets/partenaires/Joy Thai_ logotype_Noir.png"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                src="../assets/partenaires/XDXCLUSIVE_primary_logo.jpg"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                src="../assets/partenaires/XD_Design_primary_logo_black.jpg"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                style="background-color: #fff;padding: 16px"
                src="../assets/partenaires/XDConnects_Logo_Black_Tagline.jpg"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                style="background-color: #fff;padding: 32px 8px"
                src="../assets/partenaires/Urban-Vitamin_black_primary_RGB.jpg"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                src="../assets/partenaires/SwissPeak_primary_logo.jpg"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                style="background-color: #fff;padding: 24px"
                src="../assets/partenaires/Impact_the-collection-of-tomorrow.png"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                style="background-color: #fff;padding: 16px"
                src="../assets/partenaires/GEAR-X_primary_black_RGB.jpg"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                style="background-color: #fff;padding: 84px 4px"
                src="../assets/partenaires/philips-primary_black.png"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                style="background-color: #fff;padding: 16px"
                src="../assets/partenaires/Vinga_Sweden_logo_v2.png"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                style="background-color: #fff;padding: 16px"
                src="../assets/partenaires/iqoniq_tagline_grey.jpg"
                alt="image slot"
            />
          </div>
          <div style="width: 35%;">
            <img
                style="background-color: #fff;padding: 84px 4px"
                src="../assets/partenaires/motorola-primary_black.png"
                alt="image slot"
            />
          </div>
        </Flicking>

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
h4,
h5,
h6,
h5 a {
  color: #15273e;
  margin-top: 0;
  font-style: normal;
  font-weight: 400;
}
h3{
  color: $secondary;
}
p{
  font-size: 18px;
}
a {
  color: $secondary;
}

.partenaires{
  @media only screen and (max-width: $phone) {
    display: none;
  }
  padding: 12px 0;
  background-color: $primary;

  img{
    height: 250px;
    width: 350px;
    border-radius: 15px;
  }
}

.sliders{
  @media only screen and (max-width: $phone) {
    display: none;
  }
  padding: 12px 0;
  background-color: $primary;

  img{
    height: 370px;
    width: 97%;
    border-radius: 15px;
  }
}
</style>
