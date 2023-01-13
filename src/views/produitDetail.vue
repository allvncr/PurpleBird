<template>
  <div>
    <div class="container" v-if="getProduit">
      <section>
        <div class="breadcrumb-responsive">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Accueil</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/categories">Produits</router-link>
            </li>
            <li class="breadcrumb-item">
              <a v-if="produit_id">{{ getProduit.name }}</a>
            </li>
          </ol>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-xl-8 col-lg-7">
            <div>
              <span>coloris</span>
              <div class="coloris">
                <div
                  class="color"
                  v-for="(color, i) in quantiteColor"
                  :key="i"
                  :class="{ bordered: currentColor == color.name }"
                  :style="'background-color:' + color.code"
                  @click="rangeColor(color.name)"
                ></div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-8">
                <img
                  style="cursor: pointer"
                  v-if="images[0]"
                  :src="images[0].imageStoreLocation"
                  :alt="getProduit.name"
                  @click="openModal()"
                />
                <img src="../assets/new.png" class="new" v-if="dateDiff" />
              </div>
              <div class="col-4 mini" v-if="images.length > 1">
                <Flicking
                  :options="{ circular: false, horizontal: false, bound: true }"
                  align="next"
                  style="height: 100%"
                >
                  <img
                    v-for="(image, i) in computedList"
                    :key="i"
                    :src="image.imageStoreLocation"
                    :alt="getProduit.name"
                    @click="charge(image, i)"
                  />
                </Flicking>
              </div>
            </div>
            <b-modal
              ref="modal-image"
              id="modal-image"
              centered
              hide-footer
              hide-header
              @hide="resetModal"
              size="xl"
            >
              <div class="block-image">
                <span class="left" @click="swipe({ key: 'ArrowLeft' })">
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z"
                    />
                  </svg>
                </span>
                <img :src="images[0].imageStoreLocation" />
                <span class="right" @click="swipe({ key: 'ArrowRight' })">
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"
                    />
                  </svg>
                </span>
              </div>
            </b-modal>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="product-details-content">
              <h1 class="h2">{{ getProduit.name }}</h1>
              <h2><small>À partir de </small>{{ getProduit.price }} €</h2>
              <p>
                <strong
                  >Référence : {{ getProduit.reference }} | Couleur:
                  {{ images[0].color }}
                </strong>
              </p>
              <br />

              <p>{{ getProduit.description }}</p>
              <div class="pro-details-rating-wrap pb-2">
                <div class="pro-details-rating">
                  <div class="row d-flex justify-content-center ml-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row" style="margin-top: 48px">
          <div class="col-lg-7">
            <div class="description-review nav">
              <div :class="{ active: review == 0 }" @click="review = 0">
                Couleurs
              </div>
              <div :class="{ active: review == 1 }" @click="review = 1">
                Personnalisation
              </div>
            </div>
            <div class="tab-content" v-show="review == 0">
              <p>CHOISISSEZ LES COULEURS ET QUANTITÉS SOUHAITÉES</p>
              <p>Cliquez sur les couleurs pour choisir la quantité.</p>
              <!-- <div
                class="badge-color-group"
                v-for="(color, i) in getProduit.colorList"
                :key="i"
                :style="'background-color:' + color"
              ></div> -->
              <div v-for="(color, i) in quantiteColor" :key="i">
                <input
                  v-if="color.name == currentColor"
                  type="text"
                  maxlength="3"
                  class="badge-color-group"
                  :style="'background-color:' + color.code"
                  v-model="color.number"
                />
              </div>

              <div class="btn btn-primary" @click="review = 1" v-if="totalQ">
                Je souhaite personnaliser mon produit
              </div>
            </div>

            <div class="tab-content" v-show="review == 1">
              <b-form-group>
                <template #label> Choix de marquage </template>
                <b-form-select
                  plain
                  v-model="perso.marque"
                  :options="[{ content: null }, ...getProduit.markingList]"
                  text-field="content"
                  value-field="content"
                ></b-form-select>
              </b-form-group>

              <b-form-group v-if="perso.marque">
                <template #label>
                  Ajouter un visuel (jpeg, png) <span class="required">*</span>
                </template>
                <b-form-file
                  required
                  v-model="perso.file"
                  placeholder="Choisir un fichier"
                  accept="image/*"
                ></b-form-file>
              </b-form-group>
              <p style="font-weight: 400">
                La faisabilité de votre demande vous sera confirmée suite à
                l'étude de vos éléments de marquage. Un assistant commercial
                prendra contact avec vous pour toutes demandes de précisions et
                vous soumettra un Bon à Tirer.
              </p>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="proceed-area">
              <div class="estimate-totals">
                <h3><strong class="total-title">Total</strong></h3>
                <ul>
                  <li>
                    <span>Quantité totale :</span>
                    <span id="total_quantity" class="total-number">{{
                      totalQ
                    }}</span>
                  </li>
                  <li>
                    <span>Prix unitaire H.T. :</span>
                    <span class="flex justify-content-end"
                      ><span id="unit_price" class="total-number">{{
                        getProduit.price
                      }}</span>
                      <span>€</span></span
                    >
                  </li>
                  <li>
                    <span>Prix total H.T. :</span>
                    <span class="flex justify-content-end"
                      ><span id="total_price" class="total-number">{{
                        getProduit.price * totalQ
                      }}</span>
                      <span>€</span></span
                    >
                  </li>
                </ul>
              </div>
              <div class="proceed-btn">
                <button
                  type="button"
                  class="btn btn-primary"
                  :disabled="totalQ < 1"
                  @click="panier"
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
            <router-link class="contact-link" to="/contact">
              Une question ?<br />
              <span class="link-accent">Contactez-nous</span><br />
              Besoin d'un conseil ?
            </router-link>
            <p class="text-annex">
              La faisabilité vous sera confirmée suite à une étude de vos
              éléments de marquage associés.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import "@egjs/flicking-plugins/dist/arrow.css";
</script>

<script>
import { mapActions, mapGetters } from "vuex";
import { Arrow } from "@egjs/flicking-plugins";

export default {
  name: "produitDetail",

  data() {
    return {
      images: [],
      review: 0,
      quantiteColor: [],
      perso: {
        file: null,
        marque: null,
      },
      box: "",
      currentColor: null,
      plugins: [new Arrow({ moveByViewportSize: true, moveCount: 1 })],
    };
  },

  methods: {
    ...mapActions(["one_product", "add_product", "post_monio"]),

    charge(img) {
      this.images = this.images.filter((item) => item.id !== img.id);
      this.images.unshift(img);
    },

    panier() {
      var product = {
        id: this.getProduit.id,
        marking: this.perso.file ? this.perso : null,
        color: "",
        quantite: 1,
        image: this.images[0],
      };

      this.quantiteColor.forEach((c) => {
        if (c.name == this.currentColor) {
          product.color = c;
          product.quantite = c.number;
        }
      });

      this.add_product({
        ...product,
        ...this.getProduit,
      });

      // for (let i = 0; i < this.quantiteColor.length; i++) {
      //   if (this.quantiteColor[i].number > 0) {
      //     product.color = this.quantiteColor[i].code;
      //     product.quantite = this.quantiteColor[i].number;
      //     this.add_product({
      //       ...product,
      //       ...this.getProduit,
      //     });
      //   }
      // }
      var bodyFormData = new FormData();
      bodyFormData.append("file", this.perso.file);
      this.post_monio(bodyFormData);

      this.box = "";
      this.$bvModal
        .msgBoxConfirm("Voulez-vous continuez votre selection ?", {
          title: "Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "OUI",
          cancelTitle: "NON",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          if (!value) this.$router.push("/panier");
        });
    },

    openModal() {
      window.addEventListener("keydown", this.swipe);
      this.$refs["modal-image"].show();
    },

    swipe(e) {
      if (e.key == "ArrowRight") {
        this.images.push(this.images[0]);
        this.images.splice(0, 1);
      }
      if (e.key == "ArrowLeft") {
        this.images.unshift(this.images[this.images.length - 1]);
        this.images.pop();
      }
    },

    resetModal() {
      window.removeEventListener("keydown", this.swipe);
    },

    rangeColor(color) {
      this.currentColor = color.toLowerCase();
      this.images = [];
      this.getProduit.imagesList.forEach((img) => {
        // if (img.color.toLowerCase() == color.toLowerCase())
        this.images.push(img);
      });
    },
  },

  computed: {
    ...mapGetters(["getProduit"]),
    produit_id() {
      return this.$route.params.id;
    },

    totalQ() {
      var total = 0;
      this.quantiteColor.forEach((e) => {
        if (e.number == "" || e.number == null) {
          total += 0;
        } else if (!isNaN(e.number)) total += parseInt(e.number);
      });
      return total;
    },

    dateDiff() {
      const date1 = new Date(this.getProduit.created_at);
      const date2 = new Date();
      const diffInMilliseconds = date2.getTime() - date1.getTime();
      const diffInSeconds = diffInMilliseconds / 1000;
      const diffInMinutes = diffInSeconds / 60;
      const diffInHours = diffInMinutes / 60;
      const diffInDays = diffInHours / 24;
      const diffInWeeks = diffInDays / 7;
      return diffInWeeks.toFixed(0) < 4;
    },

    computedList() {
      var list = [];
      this.images.forEach((img) => {
        if (img.color == this.images[0].color) list.push(img);
      });
      return list.slice(1);
    },
  },

  mounted() {
    this.one_product(this.$route.params).then(() => {
      this.rangeColor(this.getProduit.imagesList[0].color);
      this.getProduit.colorList.forEach((element) => {
        this.quantiteColor.push({
          code: element.hexCodeColor,
          number: null,
          name: element.name,
        });
      });
    });
  },

  created() {},
  destroyed() {},
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 15px 128px;
}

.breadcrumb-responsive {
  margin-bottom: 64px;

  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: 10px;

    a {
      outline: medium none;
      color: #15273e;
    }
  }
}

.product-details-content {
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    color: $secondary;
    font-size: 20px;
    font-weight: 500;
    margin: 0 0 20px;
  }

  p {
    color: $black;
    line-height: 25px;
    font-size: 14px;
    margin: 0;
  }
}

img {
  max-width: 100%;
  max-height: 400px;
}

.mini {
  max-height: 400px;
  overflow: hidden;

  img {
    cursor: pointer;
    max-width: 108px;
    max-height: 108px;
  }
}

.description-review {
  .active {
    border-bottom: 3px solid #000;
    background-color: transparent;
  }
  div {
    cursor: pointer;
    background-color: #f6f6f6;
    border-bottom: 3px solid transparent;
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    margin: 0 5px 0 0;
    padding: 18px 35px;
    color: $primary;
    border-radius: 10px 10px 0 0;
  }
}

.tab-content {
  padding: 32px 0 0;

  p {
    font-size: 14px;
    margin-bottom: 4px;
    font-weight: 600;
  }

  .badge-color-group {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 25px;
    margin-right: 4px;
    margin-bottom: 4px;
    vertical-align: top;
    border: 1px solid #c3c3c3;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 0 #505050;
    font-size: 12px;
  }

  .btn {
    margin-top: 16px;
  }
}

.proceed-area {
  padding: 39px 25px 45px;
  border-radius: 15px;
  background-color: #f6f6f6;

  h3 {
    color: $primary;
    font-size: 28px;
  }

  ul {
    margin: 0;
    padding: 0;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;
      padding-bottom: 18px;
      border-bottom: 1px solid #dee0e4;
      overflow: hidden;
    }
  }
}

.contact-link {
  outline: medium none;
  color: $primary;
}

.block-image {
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    display: block;
    max-width: 800px;
    max-height: 500px;
  }

  span {
    cursor: pointer;
  }
}

.new {
  position: absolute;
  width: 48px;
  height: 48px;
  top: 0;
  left: 0;
}

.coloris {
  display: flex;

  .color {
    margin-left: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    border-radius: 50%;
  }
}

.bordered {
  border: 2px solid #000;
}
</style>
