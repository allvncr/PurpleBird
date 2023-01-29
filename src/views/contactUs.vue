<template>
  <div class="aboutus">
    <div class="container">
      <h1 class="page-title"><span>Nous</span> contacter</h1>

      <form action="">
        <div class="block">
          <div class="left">
            <b-form-group>
              <template #label>
                Prenom <span class="required">*</span>
              </template>
              <b-form-input
                v-model="prenom"
                placeholder="Prenom"
                maxlength="50"
                trim
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <template #label> Nom <span class="required">*</span> </template>
              <b-form-input
                v-model="nom"
                placeholder="Nom"
                trim
                maxlength="20"
                onkeyup="this.value = this.value.toUpperCase();"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <template #label>
                Email <span class="required">*</span>
              </template>
              <b-form-input
                v-model="email"
                placeholder="Email"
                type="email"
                trim
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <template #label>
                Telephone <span class="required">*</span>
              </template>
              <b-form-input
                v-model="tel"
                placeholder="Telephone"
                maxlength="40"
                trim
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <template #label>
                Societé <span class="required">*</span>
              </template>
              <b-form-input
                v-model="societe"
                placeholder="Societé"
                maxlength="50"
                trim
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="right">
            <b-form-group label="Sujet">
              <b-form-input
                v-model="sujet"
                placeholder="Sujet"
                maxlength="50"
                trim
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <template #label>
                Message <span class="required">*</span>
              </template>
              <b-form-textarea
                id="textarea"
                v-model="message"
                placeholder="Message..."
                rows="14"
              ></b-form-textarea>
            </b-form-group>
          </div>
        </div>

        <div style="margin: 12px 0">
          <input name="infoValid" id="infoValid" type="checkbox" required />
          <label for="infoValid" style="cursor: pointer; margin-left: 4px">
             J'accepte que les informations saisies
            soient exploitées dans le cadre d'une relation commerciale avec
            PURPLEBIRD
          </label>
        </div>

        <div class="actions">
          <button class="btn btn-secondary" type="submit" title="Envoyer">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      nom: "",
      prenom: "",
      email: "",
      tel: "",
      societe: "",
      sujet: "",
      message: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.aboutus {
  background-image: url(../assets/Contactez-nous.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 64px 0;
}

.container {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 64px;
}

.page-title {
  font-size: 56px;
  line-height: 1.15;
  margin-bottom: 24px;
  text-align: center;

  span {
    color: $primary;
    display: inline-block;
  }
}

form {
  margin: 0;
  width: 100%;
  .form-group {
    position: relative;
    margin-bottom: 10px;

    .required {
      color: red;
      font-weight: 600;
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
  }
}

.block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .left,
  .right {
    width: 48%;
  }
}

.actions {
  width: 50%;
  margin: auto;
}
</style>
