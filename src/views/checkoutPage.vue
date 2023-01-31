<template>
  <div>
    <div class="container">
      <pdfVue></pdfVue>
    </div>
    <div class="actions mt-4">
      <p class="btn btn-secondary" @click="generateReport">
        Valider la commande
        <b-spinner small class="ml-2" v-show="getOrderLoading"></b-spinner>
      </p>
    </div>
  </div>
</template>

<script>
import pdfVue from "@/components/pdfVue.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { pdfVue },
  data() {
    return {
      pdfOptions: {
        enableLinks: true,
        filename: `Commande.pdf`,
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
        jsPDF: {
          orientation: "portrait",
          unit: "in",
          format: "a4",
        },
        image: { type: "jpeg", quality: 0.95 },
        html2canvas: {
          scale: 2,
          useCORS: false,
          dpi: 300,
          letterRendering: true,
        },
      },
      boxOne: "",
    };
  },
  computed: {
    ...mapGetters(["getPanier", "getMinio", "getOrderLoading", "getForm"]),
  },
  methods: {
    ...mapActions(["create_order", "clean_panier"]),
    generateReport() {
      let produit = {
        description: "",
        markingChoice: "",
        name: "",
        reference: "",
        url_Image: "",
        url_Logo: "",
        detailsProductList: [],
        estimate: {
          infographicHT: 0,
          totalHT: 0,
          totalTTC: 0,
          transportHT: 0,
          tvaamount: 0,
        },
        subTotal: {
          quantity: 0,
          totalPriceHT: 0,
          totalPriceTTC: 0,
          tva: 0,
          unitPriceHT: 0,
        },
      };
      let detail = {};
      let estimateProductList = [];

      this.getPanier.forEach((el) => {
        let exist = estimateProductList.findIndex((p) => p.name == el.name);
        if (exist >= 0) {
          detail.color = el.colorName;
          detail.size = +el.quantite;
          detail.unitPriceHT = +el.price;
          detail.totalPriceHT = +el.quantite * +el.price;
          detail.tva = 20;
          detail.totalPriceTTC =
            (detail.totalPriceHT * 20) / 100 + detail.totalPriceHT;

          estimateProductList[exist].subTotal.quantity += +el.quantite;
          estimateProductList[exist].subTotal.unitPriceHT += detail.unitPriceHT;
          estimateProductList[exist].subTotal.totalPriceHT +=
            detail.totalPriceHT;
          estimateProductList[exist].subTotal.tva = 20;
          estimateProductList[exist].subTotal.totalPriceTTC +=
            detail.totalPriceTTC;

          estimateProductList[exist].estimate.totalHT += detail.totalPriceHT;
          estimateProductList[exist].estimate.tvaamount +=
            (detail.totalPriceHT * 20) / 100;
          estimateProductList[exist].estimate.totalTTC += detail.totalPriceTTC;

          estimateProductList[exist].detailsProductList.push(detail);
        } else if (exist < 0) {
          produit.description = el.description ? el.description : "";
          produit.name = el.name;
          produit.reference = el.reference;
          produit.markingChoice = el.marking ? el.marking : "";
          produit.url_Image = el.image ? el.image.imageStoreLocation : "";
          produit.url_Logo = this.getMinio ? this.getMinio : "";

          detail.color = el.colorName;
          detail.size = +el.quantite;
          detail.unitPriceHT = +el.price;
          detail.totalPriceHT = +el.quantite * +el.price;
          detail.tva = 20;
          detail.totalPriceTTC =
            (detail.totalPriceHT * 20) / 100 + detail.totalPriceHT;
          produit.detailsProductList.push(detail);

          produit.subTotal.quantity = +el.quantite;
          produit.subTotal.unitPriceHT = detail.unitPriceHT;
          produit.subTotal.totalPriceHT = detail.totalPriceHT;
          produit.subTotal.tva = 20;
          produit.subTotal.totalPriceTTC = detail.totalPriceTTC;

          produit.estimate.totalHT = detail.totalPriceHT;
          produit.estimate.tvaamount = (detail.totalPriceHT * 20) / 100;
          produit.estimate.totalTTC = detail.totalPriceTTC;

          estimateProductList.push(produit);
        }

        detail = {};
        produit = {
          detailsProductList: [],
          estimate: {
            infographicHT: 0,
            totalHT: 0,
            totalTTC: 0,
            transportHT: 0,
            tvaamount: 0,
          },
          subTotal: {
            quantity: 0,
            totalPriceHT: 0,
            totalPriceTTC: 0,
            tva: 0,
            unitPriceHT: 0,
          },
        };
      });

      let order = {
        estimateProducts: estimateProductList,
        infoClient: {
          address:
            this.getForm.cp +
            " ," +
            this.getForm.ville +
            " ," +
            this.getForm.adresse,
          email: this.getForm.email,
          enterprise: this.getForm.societe,
          firstname: this.getForm.prenom,
          lastname: this.getForm.nom,
          phoneNumber: this.getForm.tel,
        },
      };

      this.create_order(order)

      // alert(
      //     "Votre devis à bien été reçu, nous reviendrons vers vous bientôt !"
      //   );
      //   this.clean_panier();
      //   this.$router.push("/");

      this.showMsgBoxOne();
    },

    showMsgBoxOne() {
      this.boxOne = "";
      this.$bvModal
        .msgBoxOk(
          "Votre devis à bien été reçu, nous reviendrons vers vous bientôt !",
          {
            title: "Validation",
            size: "sm",
            buttonSize: "sm",
            okVariant: "success",
            headerClass: "p-2 border-bottom-0",
            footerClass: "p-2 border-top-0",
            centered: true,
          }
        )
        .then(() => {
          this.clean_panier();
          this.$router.push("/");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.actions {
  width: 100%;
  text-align: center;
  .btn {
    width: 50%;
  }
}
</style>
