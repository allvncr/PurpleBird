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
    };
  },
  computed: {
    ...mapGetters(["getPanier", "getMinio", "getOrderLoading"]),
  },
  methods: {
    ...mapActions(["create_order"]),
    generateReport() {
      let produit = {
        description: '',
        markingChoice: '',
        name: '',
        reference: '',
        url_Image: '',
        url_Logo: '',
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
          detail.color = el.color;
          detail.size = '';
          detail.unitPriceHT = +el.price;
          detail.totalPriceHT = +el.quantite * +el.price;
          detail.tva = (detail.totalPriceHT * 20) / 100;
          detail.totalPriceTTC = detail.totalPriceHT + detail.tva;

          estimateProductList[exist].subTotal.quantity += +el.quantite
          estimateProductList[exist].subTotal.unitPriceHT += detail.unitPriceHT
          estimateProductList[exist].subTotal.totalPriceHT +=  detail.totalPriceHT
          estimateProductList[exist].subTotal.tva += detail.tva
          estimateProductList[exist].subTotal.totalPriceTTC += detail.totalPriceTTC

          estimateProductList[exist].estimate.totalHT +=  detail.totalPriceHT
          estimateProductList[exist].estimate.tvaamount += detail.tva
          estimateProductList[exist].estimate.totalTTC += detail.totalPriceTTC

          estimateProductList[exist].detailsProductList.push(detail);
        } else {
          produit.description = el.description ? el.description : '';
          produit.name = el.name;
          produit.reference = el.reference;
          produit.markingChoice = el.marking ? el.marking : '';
          produit.url_Image = el.image ? el.image.imageStoreLocation : '';
          produit.url_Logo = this.getMinio ? this.getMinio : '';

          detail.color = el.color;
          detail.size = '';
          detail.unitPriceHT = +el.price;
          detail.totalPriceHT = +el.quantite * +el.price;
          detail.tva = (detail.totalPriceHT * 20) / 100;
          detail.totalPriceTTC = detail.totalPriceHT + detail.tva;
          produit.detailsProductList.push(detail);

          produit.subTotal.quantity = +el.quantite
          produit.subTotal.unitPriceHT = detail.unitPriceHT
          produit.subTotal.totalPriceHT = detail.totalPriceHT
          produit.subTotal.tva = detail.tva
          produit.subTotal.totalPriceTTC = detail.totalPriceTTC

          produit.estimate.totalHT = detail.totalPriceHT
          produit.estimate.tvaamount = detail.tva
          produit.estimate.totalTTC = detail.totalPriceTTC


          estimateProductList.push(produit);
        }

        detail = {};
        produit = {};
      });

      console.log(estimateProductList);
      this.create_order(estimateProductList).then(()=>{
        this.cleanPanier();
      })
    },

    cleanPanier() {
      localStorage.removeItem('minio')
      localStorage.removeItem('panier')

      this.$router.push('/')
    }
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
