<template>
  <div>
    <form @submit.prevent="nextStep">
      <h4>Commentaires</h4>
      <div class="form-group">
        <textarea
          class="form-control"
          rows="3"
          placeholder="Commentaires"
        ></textarea>
      </div>
      <h4>Coordonnées</h4>
      <div class="form-group">
        <input
          class="form-control"
          type="text"
          maxlength="50"
          placeholder="Société"
          required
        />
      </div>
      <div class="double">
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            maxlength="20"
            placeholder="Prénom"
            required
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            maxlength="30"
            placeholder="Nom"
            required
          />
        </div>
      </div>
      <div class="form-group">
        <input
          class="form-control"
          type="text"
          maxlength="50"
          placeholder="Adresse"
          required
        />
      </div>
      <div class="form-group">
        <input
          class="form-control"
          type="text"
          maxlength="50"
          placeholder="Adresse Complémentaire"
        />
      </div>
      <div class="triple">
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            maxlength="20"
            placeholder="Code Postal"
            required
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            maxlength="20"
            placeholder="Ville"
            required
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            maxlength="20"
            placeholder="Pays"
            required
          />
        </div>
      </div>
      <div class="double">
        <div class="form-group">
          <input
            class="form-control"
            type="email"
            maxlength="30"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="number"
            maxlength="50"
            placeholder="Téléphone"
            required
          />
        </div>
      </div>
      <div>
        <input name="infoValid" id="infoValid" type="checkbox" required />
        <label for="infoValid" style="cursor: pointer; margin: 0 0 0 4px">
          J'accepte que les informations saisies
          soient exploitées dans le cadre d'une relation commerciale avec
          PURPLEBIRD
        </label>
      </div>
      <div class="actions">
        <button type="submit" class="btn btn-secondary">
          Demander un devis
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    nextStep() {
      this.$router.push("/checkout");
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  position: relative;
  margin-bottom: 10px;

  label {
    display: inline-block;
    width: 100%;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  .form-control {
    display: block;
    width: 100%;
    height: 46px;
    padding: 12px 24px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #000;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    box-shadow: none;
    outline: 0;
    border-radius: 10px;
  }

  textarea.form-control {
    height: auto;
  }

  &::before {
    content: "";
    border-left: solid 10px #eeeeee;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
  }
}

.double,
.triple {
  @media only screen and (max-width: $tablette) {
    display: flex;
  }
  @media only screen and (max-width: $phone) {
    display: block;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.double .form-group {
  @media only screen and (max-width: $phone) {
    width: 100%;
  }
  width: 49%;
}

.triple .form-group {
  @media only screen and (max-width: $phone) {
    width: 100%;
  }
  width: 33%;
}

h4 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
}

.actions {
  margin-top: 20px;
}
</style>
