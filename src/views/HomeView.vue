<template>
  <div class="home">
    <div class="sliders">
      <Flicking
        :options="{ circular: true }"
        align="center"
        :plugins="pluginsS"
      >
        <a
          href="https://heyzine.com/flip-book/19f2643a78.html"
          target="_blank"
          style="width: 97%"
        >
          <img src="../assets/sliders/ban.jpeg" alt="image slot" />
        </a>
        <div style="width: 97%">
          <img
            src="../assets/sliders/BC_2022_1800×600_01.jpg"
            alt="image slot"
          />
        </div>
        <div style="width: 97%">
          <img
            src="../assets/sliders/gogreen_2022_1800×600_03.jpg"
            alt="image slot"
          />
        </div>
        <a
          href="https://heyzine.com/flip-book/b332d8d341.html"
          target="_blank"
          style="width: 97%"
        >
          <img src="../assets/sliders/New.jpeg" alt="image slot" />
        </a>
      </Flicking>
    </div>

    <section class="widget-tabs">
      <div
        class="widget"
        :class="{ selected: !categorie }"
        @click="filtreProduit()"
      >
        Toutes Categories
      </div>
      <div
        class="widget"
        :class="{ selected: categorie == cat.id }"
        v-for="(cat, i) in getCategories.slice(0, 5)"
        :key="i"
        @click="filtreProduit(cat)"
      >
        {{ cat.lib }}
      </div>
    </section>

    <section class="container product_list">
      <div class="product" v-for="(produit, i) in computedProd" :key="i">
        <div class="element_top">
          <!-- <img
                    src="../assets/new.png"
                    class="new"
                    v-if="dateDiff(produit.created_at)"
                  /> -->
          <router-link :to="'/produit/' + produit.reference">
            <img
              class="img-fluid w-100"
              :src="produit.urlimage"
              :alt="produit.name"
              :title="produit.name"
            />
          </router-link>
        </div>
        <div class="element_bottom">
          <div class="product_name">
            <router-link :to="'/produit/' + produit.reference">
              {{ produit.name }}
            </router-link>
          </div>
          <div class="product_price">
            <span class="price">{{ produit.price }} €</span>
          </div>
        </div>
      </div>
    </section>

    <div class="section-content">
      <div class="container">
        <h2 class="page-title">
          <a href="" title="Partenaires"><span>Nos</span> partenaires</a>
        </h2>
      </div>
    </div>
    <div class="container partenaires">
      <Flicking :options="{ circular: true }" :plugins="pluginsP">
        <div class="divSlide">
          <img src="../assets/partenaires/LOGO_RTP_RVB.jpg" alt="image slot" />
        </div>
        <div class="divSlide">
          <img
            src="../assets/partenaires/Logo_SOLO-Group.jpg"
            alt="image slot"
          />
        </div>
        <div class="divSlide">
          <img
            style="padding: 16px 32px"
            src="../assets/partenaires/atf_Noir_CMJN.jpg"
            alt="image slot"
          />
        </div>
        <div class="divSlide">
          <img
            src="../assets/partenaires/NEO BLU logo avec baseline Bleu RVB.jpg"
            alt="image slot"
          />
        </div>
        <div class="divSlide">
          <img
            src="../assets/partenaires/SOLS logo avec baseline Noir RVB.jpg"
            alt="image slot"
          />
        </div>
        <div class="divSlide">
          <img
            src="../assets/partenaires/Joy Thai_ logotype_Noir.png"
            alt="image slot"
          />
        </div>
        <div class="divSlide">
          <img
            src="../assets/partenaires/XDXCLUSIVE_primary_logo.jpg"
            alt="image slot"
          />
        </div>
        <div class="divSlide">
          <img
            src="../assets/partenaires/XD_Design_primary_logo_black.jpg"
            alt="image slot"
          />
        </div>
        <div class="divSlide">
          <img
            src="../assets/partenaires/XDConnects_Logo_Black_Tagline.jpg"
            alt="image slot"
          />
        </div>
        <div class="divSlide">
          <img
            style="padding: 42px 16px"
            src="../assets/partenaires/Urban-Vitamin_black_primary_RGB.jpg"
            alt="image slot"
          />
        </div>
        <div class="divSlide">
          <img
            src="../assets/partenaires/SwissPeak_primary_logo.jpg"
            alt="image slot"
          />
        </div>
        <div class="divSlide">
          <img
            style="padding: 32px 16px"
            src="../assets/partenaires/Impact_the-collection-of-tomorrow.png"
            alt="image slot"
          />
        </div>
        <div class="divSlide">
          <img
            style="padding: 42px 16px"
            src="../assets/partenaires/GEAR-X_primary_black_RGB.jpg"
            alt="image slot"
          />
        </div>
        <div class="divSlide">
          <img
            style="padding: 42px 16px"
            src="../assets/partenaires/philips-primary_black.png"
            alt="image slot"
          />
        </div>
        <div class="divSlide">
          <img
            src="../assets/partenaires/Vinga_Sweden_logo_v2.png"
            alt="image slot"
          />
        </div>
        <div class="divSlide">
          <img
            src="../assets/partenaires/iqoniq_tagline_grey.jpg"
            alt="image slot"
          />
        </div>
        <div class="divSlide">
          <img
            style="padding: 42px 16px"
            src="../assets/partenaires/motorola-primary_black.png"
            alt="image slot"
          />
        </div>
      </Flicking>
      <div class="block_grey"></div>
    </div>

    <div class="container">
      <h3>Nouveautés</h3>
      <div class="subtitle">
        <div class="divider"></div>
        <span>Voir Badge NEW</span>
      </div>
    </div>
    <section class="container product_list">
      <Flicking :options="{ circular: true }">
        <div
          class="product product_slide"
          v-for="(produit, y) in getProduits.slice(0, 10)"
          :key="y"
        >
          <div class="element_top">
            <img
              src="../assets/new-blue.png"
              class="new"
              v-if="dateDiff(produit.created_at)"
            />
            <router-link :to="'/produit/' + produit.reference">
              <img
                class="produit_img img-fluid w-100"
                :src="produit.urlimage"
                :alt="produit.name"
                :title="produit.name"
              />
            </router-link>
          </div>
          <div class="element_bottom">
            <div class="product_name">
              <router-link :to="'/produit/' + produit.id">
                {{ produit.name }}
              </router-link>
            </div>
            <div class="product_price">
              <span class="price">{{ produit.price }} €</span>
            </div>
          </div>
        </div>
      </Flicking>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { AutoPlay } from "@egjs/flicking-plugins";

const pluginsP = [
  new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
];

const pluginsS = [
  new AutoPlay({ duration: 10000, direction: "NEXT", stopOnHover: false }),
];

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      categorie: null,
      pluginsP,
      pluginsS,
    };
  },
  computed: {
    ...mapGetters(["getProduits", "getCategories"]),

    computedProd() {
      var list = this.getProduits;
      list = list.reverse();

      return list.slice(0, 15);
    },
  },
  methods: {
    ...mapActions(["all_products", "all_categories"]),
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },

    filtreProduit(cat) {
      if (!cat) {
        this.categorie = null;
      } else this.categorie = cat.id;

      this.all_products({ categorie: cat ? cat.lib : null });
    },

    dateDiff(date1) {
      date1 = new Date(date1);
      const date2 = new Date();
      const diffInMilliseconds = date2.getTime() - date1.getTime();
      const diffInSeconds = diffInMilliseconds / 1000;
      const diffInMinutes = diffInSeconds / 60;
      const diffInHours = diffInMinutes / 60;
      const diffInDays = diffInHours / 24;
      const diffInWeeks = diffInDays / 7;
      return diffInWeeks.toFixed(0) < 4;
    },
  },
  mounted() {
    document.title = "PurpleBird";
    this.all_products({ sort: "createdDate,desc" });
    this.all_categories();
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
}
.section-content {
  h2 {
    @media only screen and (max-width: $phone) {
      font-size: 32px;
    }
    text-align: center;
    font-size: 42px;
    line-height: 1.5;
    margin-bottom: 0;
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
h3 {
  color: $secondary;
}
p {
  font-size: 18px;
}
a {
  color: $secondary;
}

.partenaires {
  @media only screen and (max-width: $phone) {
    display: none;
  }

  position: relative;
  margin-bottom: 48px;

  img {
    padding: 16px;
    height: 140px;
    width: 200px;
  }

  .block_grey {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
  }
}

.sliders {
  @media only screen and (max-width: $phone) {
    display: none;
  }
  padding: 12px 0;
  margin-bottom: 24px;

  img {
    height: 65vh;
    width: 95%;
    border-radius: 10px;
  }
}

.widget-tabs {
  @media only screen and (max-width: $phone) {
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
  margin-bottom: 15px;
  text-align: center;
  .widget {
    @media only screen and (max-width: $phone) {
      margin: 0;
      font-size: 16px;
    }
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    line-height: 1.4em;
    margin: 10px 15px 40px 15px;
    vertical-align: bottom;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: #999999;
  }

  .selected {
    font-weight: 600;
    color: $primary;
  }
}

.product_list {
  @media only screen and (max-width: $phone) {
    padding: 0;
  }
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 48px;

  .img-fluid {
    @media only screen and (max-width: $phone) {
      height: 120px;
    }
    height: 180px;
  }

  .product {
    @media only screen and (max-width: $tablette) {
      width: 33%;
    }

    @media only screen and (max-width: $phone) {
      width: 50%;
    }
    width: 20%;
    max-width: 217px;
    padding: 0 15px;
    margin-bottom: 20px;

    &:hover .element_bottom {
      background-color: rgba($color: $primary, $alpha: 0.3);
    }

    .element_top {
      position: relative;

      .new {
        position: absolute;
        width: 42px;
        height: 42px;
        top: 0;
        left: 0;
      }

      .produit_img {
        width: 217px;
        height: 217px;
      }
    }

    .element_bottom {
      background-color: #f6f6f6;
      text-align: center;
      position: relative;
      padding: 0 5px;

      .product_name {
        overflow: hidden;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 2rem;

        a {
          color: $primary;
          font-size: 14px;
          text-transform: capitalize;
        }
      }

      .product_price .price {
        color: #dc3545;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

  .product_slide {
    @media only screen and (max-width: $phone) {
      width: 60%;
    }

    .produit_img {
      @media only screen and (max-width: $phone) {
        height: 150px !important;
      }
      width: 217px;
      height: 217px;
    }
  }
}

h3 {
  @media only screen and (max-width: $phone) {
    font-size: 28px;
  }
  font-size: 32px;
  line-height: 1.4em;
  color: #333333;
  font-weight: 600;
  margin: 0;
}
.subtitle {
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  .divider {
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: #f6bcce;
    width: 100px;
  }

  span {
    @media only screen and (max-width: $phone) {
      padding-left: 15px;
    }
    font-size: 16px;
    font-style: italic;
    line-height: 1.6em;
    color: #999999;
    padding-left: 30px;
  }
}

.divSlide {
  @media only screen and (max-width: $tablette) {
    width: 30%;
  }
  width: 25%;
}
</style>
