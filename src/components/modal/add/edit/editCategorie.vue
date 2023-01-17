<template>
    <b-modal
      id="edit-category"
      title="Modifer"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="lib"
          label-for="lib-input"
          invalid-feedback="Libellé est obligatoire"
          :state="libState"
        >
          <b-form-input
            id="lib-input"
            v-model="categorie.lib"
            :state="libState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  
  export default {
    data() {
      return {
        categorie: this.catToConfig,
        libState: null,
      };
    },

    props: {
        catToConfig: Object
    },
  
    methods: {
      ...mapActions(["edit_categorie"]),
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity();
        this.libState = valid;
        return valid;
      },
      resetModal() {
        this.categorie.lib = "";
        this.libState = null;
      },
      handleOk(bvModalEvent) {
        bvModalEvent.preventDefault();
        this.handleSubmit();
      },
      handleSubmit() {
        if (!this.checkFormValidity()) {
          return;
        }
        this.edit_categorie(this.categorie);
        this.$nextTick(() => {
          this.$bvModal.hide("add-categorie");
        });
      },
    },
  };
  </script>
  