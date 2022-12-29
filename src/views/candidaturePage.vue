<template>
  <div class="container">
    <div class="recherche">
      <b-form-group>
        <template #label> MOTS-CLES </template>
        <b-form-input
          placeholder="Titre du poste"
          maxlength="40"
          trim
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <template #label> LIEU </template>
        <b-form-input placeholder="Ville" maxlength="40" trim></b-form-input>
      </b-form-group>

      <button CLASS="btn btn-secondary" type="submit">RECHERCHER</button>
    </div>
    <section>
      <div class="breadcrumb-responsive">
        <ul class="breadcrumb">
          <li>
            <router-link to="/">Accueil</router-link>
          </li>
          <li>Nos Offres</li>
        </ul>
      </div>
    </section>
    <div class="job-results">
      <a class="sign-up" href="/candidature-spontannee">
        <div class="logo">
          <svg width="32" height="32" viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M64 112c-8.8 0-16 7.2-16 16v22.1l172.5 141.6c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
              />
          </svg>
        </div>
        Candidature spontanée
      </a>
      <p>Aucune offre n'a été trouvée.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "candidaturePage",
};
</script>

<style lang="scss" scoped>
.breadcrumb-responsive {
  .breadcrumb {
    margin: 20px 0;
    background-color: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    text-transform: capitalize;

    a {
      color: $black;
    }
  }

  .breadcrumb > li + li:before {
    content: "/Â ";
    padding: 0 5px;
    color: #ccc;
  }
}

.sign-up {
  text-decoration: none;
  color: $secondary;
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  .logo {
    display: inline-block;
    text-decoration: none;
    margin-right: 10px;
    border-radius: 100%;
    padding: 9px;
    vertical-align: middle;
    background-color: $secondary;
    color: $white;
  }
}

p {
  font-size: 16px;
  font-weight: 600;
}

.recherche {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .form-group {
    width: 40%;
  }

  .btn {
    margin-top: 12px;
    width: 15%;
    height: 48px;
  }
}

.job-results{
  margin-bottom: 64px;
}
</style>
