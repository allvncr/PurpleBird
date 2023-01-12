<template>
  <div class="login">
    <form class="proceed-area" @submit.prevent="Login">
      <h3>Connectez-vous</h3>
      <b-form-group>
        <template #label> Username <span class="required">*</span> </template>
        <b-form-input
          v-model="username"
          placeholder="Username"
          maxlength="50"
          trim
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <template #label
          >Mot de passe <span class="required">*</span>
        </template>
        <b-form-input
          v-model="password"
          type="password"
          placeholder="Mot de passe"
          trim
          maxlength="20"
          required
        ></b-form-input>
      </b-form-group>
      <div class="proceed-btn">
        <button type="submit" class="btn btn-primary">Connexion</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    Login(){
        this.$router.push('/admin/home')
    }
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.proceed-area {
  padding: 45px 25px;
  border-radius: 15px;
  background-color: #f6f6f6;
  width: 40%;

  h3 {
    text-align: center;
    color: $primary;
    font-size: 28px;
  }
  .btn {
    margin-top: 8px;
  }
}
</style>
