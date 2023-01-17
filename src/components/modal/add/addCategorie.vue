<template>
  <b-modal
    id="add-category"
    title="Ajouter"
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
      categorie: {
        lib: null,
      },
      libState: null,
    };
  },

  methods: {
    ...mapActions(["add_categorie"]),
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
      this.add_categorie(this.categorie);
      this.$nextTick(() => {
        this.$bvModal.hide("add-categorie");
      });
    },
  },
};
</script>
