<template>
  <div class="aboutus">
    <div class="container">
      <h1 class="page-title"><span>Nous</span> contacter</h1>

      <form action="">
        <div class="form-group">
          <input
            class="form-control"
            maxlength="50"
            placeholder="Prénom"
            required
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            maxlength="50"
            placeholder="Nom"
            required
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="tel"
            maxlength="40"
            placeholder="Telephone"
            required
          />
        </div>
        <div class="form-group">
          <input class="form-control" maxlength="50" placeholder="Société" />
        </div>
        <div class="form-group">
          <textarea
            class="form-control"
            rows="3"
            placeholder="Message"
            required
          ></textarea>
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

<style lang="scss" scoped>
.aboutus {
  background-image: url(../assets/background-aboutus.jpg);
  background-position: 50%;
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
    }

    textarea.form-control {
      height: auto;
    }
  }
}
</style>
