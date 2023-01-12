<template>
  <div>
    <header>
      <h1>Purplebird Admin</h1>
      <p class="btn btn-secondary logout">deconnexion</p>
    </header>

    <div class="container">
      <div class="col-5 proceed-area">
        <div class="estimate-totals">
          <h3><strong class="total-title">Table</strong></h3>
          <ul>
            <li>
              <router-link to="/admin/categories">
                <span>Categories</span>
                <span class="flex justify-content-end">
                  <svg viewBox="0 0 16 16">
                    <path
                      fill="#7d3e77"
                      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793L14.793 3.5L12.5 1.207L11.207 2.5zm1.586 3L10.5 3.207L4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106l-1.528 3.821l3.821-1.528l.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                    />
                  </svg>
                </span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/produits">
                <span>Produits :</span>
                <span class="flex justify-content-end">
                  <svg viewBox="0 0 16 16">
                    <path
                      fill="#7d3e77"
                      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793L14.793 3.5L12.5 1.207L11.207 2.5zm1.586 3L10.5 3.207L4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106l-1.528 3.821l3.821-1.528l.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                    />
                  </svg>
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-7">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="scss" scoped>
header {
  background-color: $primary;
  color: $white;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logout {
    margin: 0;
    width: 250px;
  }
}

.proceed-area {
  margin-top: 24px;
  padding: 45px 25px;
  background-color: #f6f6f6;

  h3 {
    text-align: center;
    color: $primary;
    font-size: 28px;
  }
  ul {
    margin: 0;
    padding: 0;
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;
      padding: 8px 8px 18px;
      border-bottom: 1px solid #dee0e4;
      color: $primary;
      overflow: hidden;

      svg {
        width: 18px;
        height: 18px;
        margin-right: 8px;
      }

      &:hover {
        background-color: $grey-dark;
      }
    }
  }
}
</style>
