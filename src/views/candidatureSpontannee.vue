<template>
  <div class="container mb-4">
    <div>
      <h1>Incrivez-vous !</h1>
      <div class="row">
        <div class="col-md-5 col-sm-12">
          <strong>Pourquoi rejoindre notre Réseau de Talents ?</strong
          ><br /><br />
          <p style="text-align: justify; line-height: 20px">
            Rejoindre notre réseau de Talents améliorera votre processus de
            recherche d'emploi et de candidature. Que vous souhaitiez poser
            votre candidature ou simplement laisser vos coordonnées, nous sommes
            impatients d'entrer en relation avec vous. <br /><br />

            <strong>Inscrivez-vous à notre alerte par courriel:</strong>
          </p>

          <ul>
            <li>
              Recevez des alertes en cas de nouvelles offres d'emploi qui
              correspondent à vos intérêts
            </li>
          </ul>
          <strong>Inscrivez-vous dès aujourd'hui.</strong>

          <br /><br /><router-link to="/pdc" target="_blank"
            >Politique de confidentialité </router-link
          ><br /><router-link to="/cgu" target="_blank"
            >Conditions générales</router-link
          >
        </div>

        <div class="col-md-7 col-sm-12">
          <form @submit.prevent="postcandidature">
            <p class="text-info small">
              <span class="text-danger">*</span> Champ obligatoire
            </p>

            <b-form-group>
              <template #label> Nom <span class="required">*</span> </template>
              <b-form-input
                v-model="nom"
                trim
                maxlength="20"
                onkeyup="this.value = this.value.toUpperCase();"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <template #label>
                Prenom <span class="required">*</span>
              </template>
              <b-form-input
                v-model="prenom"
                maxlength="50"
                trim
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <template #label>
                Email <span class="required">*</span>
              </template>
              <b-form-input
                v-model="email"
                type="email"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <template #label> Lieu <span class="required">*</span> </template>
              <b-form-input
                v-model="lieu"
                placeholder="Ville, région, code postal"
                maxlength="50"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <template #label>
                Titre de l'emploi recherché <span class="required">*</span>
              </template>
              <b-form-input
                v-model="soughtJob"
                maxlength="50"
                trim
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <template #label>
                Téléchargez un CV <span class="required">*</span>
              </template>
              <b-form-file
                required
                v-model="file"
                placeholder="Sélectionnez votre CV"
              ></b-form-file>
            </b-form-group>
            <b-form-checkbox class="mt-3" required>
              J'accepte la
              <router-link to="/pdc">Politique de confidentialité</router-link>
              &
              <router-link to="/cgu">Conditions générales</router-link>
            </b-form-checkbox>

            <div class="mt-4">
              <div class="text-center">
                En soumettant votre CV, vous n'avez pas postulé à une offre
                spécifique.
              </div>
              <input
                class="btn btn-primary"
                type="submit"
                value="Enregistrer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "candidatureSpontannee",
  data() {
    return {
      nom: null,
      prenom: null,
      email: null,
      lieu: null,
      file: null,
      soughtJob: null,
      boxOne: "",
    };
  },
  methods: {
    ...mapActions(["candidature"]),
    postcandidature() {
      var bodyFormData = new FormData();

      bodyFormData.append("lastname", this.nom);
      bodyFormData.append("firstname", this.prenom);
      bodyFormData.append("file", this.email);
      bodyFormData.append("address", this.lieu);
      bodyFormData.append("file", this.file);
      bodyFormData.append("soughtJob", this.soughtJob);

      this.candidature(bodyFormData);
      this.showMsgBoxOne();
    },

    showMsgBoxOne() {
      this.boxOne = "";
      this.$bvModal
        .msgBoxOk(
          "Votre candidature à bien été reçu, nous reviendrons vers vous bientôt !",
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
          this.nom = null;
          this.prenom = null;
          this.email = null;
          this.lieu = null;
          this.file = null;
          this.soughtJob = null;
        });
    },
  },
  mounted() {
    document.title = "Candidature Spontannee";
  },
};
</script>

<style lang="scss" scoped>
h1 {
  @media only screen and (max-width: $phone) {
    text-align: center;
    margin-top: 32px;
  }
  font-size: 1.8em;
  color: $secondary;
  font-weight: 800;
  text-align: right;
  margin-bottom: 32px;
}

strong {
  font-size: 18px;
  color: $primary;
}

p {
  line-height: 20px;
  text-align: justify;
  margin-bottom: 10px;
}

ul {
  list-style-type: disc;
}

a {
  color: $secondary;
  font-size: 18px;
}
</style>
