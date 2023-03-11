<template>
  <div>
    <div class="container" v-if="!getProduitLoading">
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
              <a v-if="produit_id">{{ produit.name }}</a>
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
                <div v-for="(prod, i) in getProduit" :key="i">
                  <div
                    v-if="prod.hexCodeColors.length < 2"
                    class="color"
                    :class="{
                      bordered: produit.color == prod.color,
                    }"
                    :style="'background-color:' + prod.hexCodeColors[0]"
                    @click="rangeColor(prod)"
                    :title="prod.color"
                  ></div>
                  <!-- <div
                    @click="rangeColor(prod)"
                    class="d_coloris"
                    :style="
                      'background:linear-gradient(to bottom right,' +
                      prod.hexCodeColors[0] +
                      ',' +
                      prod.hexCodeColors[1] +
                      ')'
                    "
                    :title="prod.color"
                    v-else
                  ></div> -->
                  <div
                    @click="rangeColor(prod)"
                    class="b_coloris"
                    :style="'background-color:' + prod.hexCodeColors[0]"
                    :title="prod.color"
                    v-else
                  >
                    <div
                      @click="rangeColor(prod)"
                      class="bottom"
                      :style="'background-color:' + prod.hexCodeColors[1]"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-8" v-if="produit.imagesList[0]">
                <img
                  style="cursor: pointer"
                  :src="produit.imagesList[0].imageStoreLocation"
                  :alt="produit.name"
                  @click="openModal()"
                />
                <img src="../assets/new-blue.png" class="new" v-if="dateDiff" />
              </div>
              <div class="col-4 mini" v-if="produit.imagesList.length > 1">
                <!-- <Flicking
                  :options="{ circular: true, horizontal: false, bound: false }"
                  align="next"
                  style="height: 100%"
                >
                  <img
                    v-for="(image, i) in produit.imagesList.slice(1)"
                    :key="i"
                    :src="image.imageStoreLocation"
                    :alt="produit.name"
                    @click="charge(image, i)"
                  />
                </Flicking> -->
                <img
                  v-for="(image, i) in produit.imagesList.slice(1)"
                  :key="i"
                  :src="image.imageStoreLocation"
                  :alt="produit.name"
                  @click="charge(image, i)"
                />
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
                <img
                  v-if="produit.imagesList[0]"
                  :src="produit.imagesList[0].imageStoreLocation"
                />
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
              <h1 class="h2">{{ produit.name }}</h1>
              <h2 v-if="produit.prices && !isTextile">
                <small>À partir de </small>
                {{ produit.prices[produit.prices.length - 1] | price }} €
              </h2>
              <h2 v-else style="margin-bottom: 8px">
                <small>Prix sur Devis</small>
              </h2>
              <p>
                <strong
                  >Référence : {{ produit.reference }} | Couleur:
                  {{ produit.color }}
                </strong>
              </p>
              <br />
              <b-form-group label="Taille" v-if="isTextile">
                <b-select :options="produit.sizes" v-model="size"></b-select>
              </b-form-group>

              <p class="mb-4">{{ produit.description }}</p>
              <table>
                <thead>
                  <tr>
                    <th v-for="(quantite, i) in produit.quantities" :key="i">
                      {{ quantite }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td v-for="(price, i) in produit.prices" :key="i">
                      {{ price | price }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <form @submit.prevent="panier" class="row" style="margin-top: 48px">
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

              <input
                v-if="produit.hexCodeColors"
                v-model="produit.quantite"
                type="number"
                :min="produit.minimalQuantity"
                class="badge-color-group"
                :style="'background-color:' + produit.hexCodeColors[0]"
                @input="adaptPrice"
                required
              />

              <div class="btn btn-primary" @click="review = 1" v-if="totalQ">
                Je souhaite personnaliser mon produit
              </div>
            </div>

            <div class="tab-content" v-show="review == 1">
              <b-form-group v-if="produit.categories">
                <template #label> Choix de marquage </template>
                <b-form-select
                  style="text-transform: uppercase"
                  plain
                  v-model="perso.marque"
                  :options="[
                    { content: 'Aucun marquage' },
                    ...produit.categories[0].markings,
                  ]"
                  text-field="content"
                  value-field="content"
                ></b-form-select>
              </b-form-group>

              <b-form-group v-if="perso.marque != 'Aucun marquage'">
                <template #label>
                  Ajouter un visuel (pdf, ai, eps, png)
                  <span class="required">*</span>
                </template>
                <b-form-file
                  required
                  v-model="perso.file"
                  placeholder="Choisir un fichier"
                  accept=".pdf, .ai, .png, .eps"
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
              <div class="estimate-totals" v-if="!isTextile">
                <h3><strong class="total-title">Total</strong></h3>
                <ul>
                  <li>
                    <span>Quantité totale :</span>
                    <span id="total_quantity" class="total-number">{{
                      totalQ
                    }}</span>
                  </li>
                  <li v-if="produit.prices">
                    <span>Prix unitaire H.T. :</span>
                    <span class="flex justify-content-end"
                      ><span id="unit_price" class="total-number">
                        {{ produit.price | price }}
                      </span>
                      <span>€</span></span
                    >
                  </li>
                  <li>
                    <span>Prix total H.T. :</span>
                    <span class="flex justify-content-end"
                      ><span id="total_price" class="total-number">{{
                        totaTTC
                      }}</span>
                      <span>€</span></span
                    >
                  </li>
                </ul>
              </div>
              <div class="proceed-btn">
                <button type="submit" class="btn btn-primary">
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
        </form>
      </section>
    </div>
    <div class="loader" v-else>
      <b-spinner label="Spinning"></b-spinner>
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
      size: "L",
      produit: {
        imagesList: [],
        markingList: [],
      },
      review: 0,
      quantiteColor: [],
      perso: {
        file: null,
        marque: "Aucun marquage",
      },
      box: "",
      currentColor: null,
      plugins: [new Arrow({ moveByViewportSize: true, moveCount: 1 })],
      items: [
        { quantite: "50", prix: "500" },
        { quantite: "25", prix: "250" },
      ],
    };
  },

  methods: {
    ...mapActions(["one_product", "add_product", "post_monio"]),

    charge(img) {
      this.produit.imagesList = this.produit.imagesList.filter(
        (item) => item.id !== img.id
      );
      this.produit.imagesList.unshift(img);
    },

    panier() {
      var product = {
        marking: this.perso.file ? this.perso : null,
        image: this.produit.imagesList[0],
      };
      if (this.isTextile) product.size = this.size;

      this.add_product({
        ...product,
        ...this.produit,
      });
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

    adaptPrice() {
      for (let i = 0; i < this.produit.quantities.length; i++) {
        if (i == this.produit.quantities.length - 1) {
          this.produit.price = this.produit.prices[i];
        } else {
          if (this.produit.quantite < this.produit.quantities[i + 1]) {
            this.produit.price = this.produit.prices[i];
            break;
          }
        }
      }
    },

    openModal() {
      window.addEventListener("keydown", this.swipe);
      this.$refs["modal-image"].show();
    },

    swipe(e) {
      if (e.key == "ArrowRight") {
        this.produit.imagesList.push(this.produit.imagesList[0]);
        this.produit.imagesList.splice(0, 1);
      }
      if (e.key == "ArrowLeft") {
        this.produit.imagesList.unshift(
          this.produit.imagesList[this.produit.imagesList.length - 1]
        );
        this.produit.imagesList.pop();
      }
    },

    resetModal() {
      window.removeEventListener("keydown", this.swipe);
    },

    rangeColor(prod) {
      this.produit = prod;
    },
  },

  computed: {
    ...mapGetters(["getProduit", "getProduitLoading"]),
    produit_id() {
      return this.$route.params.id;
    },

    totalQ() {
      var total = 0;

      if (this.produit.quantite == "" || this.produit.quantite == null) {
        total += 0;
      } else if (!isNaN(this.produit.quantite))
        total += parseInt(this.produit.quantite);

      return total;
    },

    totaTTC() {
      return (this.totalQ * this.produit.price).toFixed(2);
    },

    dateDiff() {
      const date1 = new Date(this.produit.createdDate);
      const date2 = new Date();
      const diffInMilliseconds = date2.getTime() - date1.getTime();
      const diffInSeconds = diffInMilliseconds / 1000;
      const diffInMinutes = diffInSeconds / 60;
      const diffInHours = diffInMinutes / 60;
      const diffInDays = diffInHours / 24;
      const diffInWeeks = diffInDays / 7;
      return diffInWeeks.toFixed(0) < 4;
    },
    isTextile() {
      var bool = false;
      if (this.produit.size?.length) bool = true;
      return bool;
    },
  },

  filters: {
    price: function (value) {
      return Number(value).toFixed(2);
    },
  },

  mounted() {
    document.title = "Details Article";
    this.one_product(this.$route.params).then(() => {
      this.produit = this.getProduit[0];
      if (!this.produit.categories[0].markings.length) {
        this.produit.categories[0].markings = this.produit.defaultsMarkings;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 15px 128px;
}

.breadcrumb-responsive {
  margin-top: 24px;
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
      @media only screen and (max-width: $phone) {
        font-size: 14px;
      }
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 150px;
  max-height: 400px;
  overflow: auto;
  scrollbar-color: #aaa transparent;
  scrollbar-width: thin;

  img {
    cursor: pointer;
    max-width: 108px;
    max-height: 108px;
  }
}

.mini::-webkit-scrollbar {
  width: 8px;
}

.mini::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius: 8px;
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
    width: 50px;
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

table {
  th,
  td {
    border-top: 1px solid #dee2e6;
    padding: 0.75rem;
    text-align: center;
    min-width: 64px;
  }

  th {
    background-color: #0000000d;
    color: $primary;
    border: 1px solid #fff;

    &:first-child {
      border-left: 1px solid #dee2e6;
    }

    &:last-child {
      border-right: 1px solid #dee2e6;
    }
  }

  td {
    border-bottom: 1px solid #dee2e6;
    color: #7d3e77;

    &:first-child {
      border-left: 1px solid #dee2e6;
    }

    &:last-child {
      border-right: 1px solid #dee2e6;
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
    @media only screen and (max-width: $phone) {
      width: 400px;
    }
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
  top: 20px;
  left: 20px;
}

.coloris {
  display: flex;
  gap: 8px;

  .color {
    border: 1px solid #333;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
}

.b_coloris {
  cursor: pointer;
  width: 24px;
  border-left: 1px solid #333;
  border-top: 1px solid #333;

  .bottom {
    clip-path: polygon(0 100%, 100% 0%, 100% 100%, 0% 100%);
    height: 24px;
    border-bottom: 1px solid #333;
    border-right: 1px solid #333;
  }
}

.bordered {
  border: 2px solid #000 !important;
}

.loader {
  height: 28vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner-border {
    width: 5rem;
    height: 5rem;
  }
}
</style>
