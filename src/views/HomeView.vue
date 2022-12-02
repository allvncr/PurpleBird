<template>
  <div class="home">
    <section
      class="section py-4"
      id="featured-products"
      data-section="featured-products"
      data-category-id="3300"
    >
      <div class="section-content">
        <div class="container">
          <h2 class="page-title">
            <a href="" title="Nouveautés"><span>Les</span> nouveautés</a>
          </h2>
        </div>
      </div>
      <div class="section-content backdrop-primary">
        <div class="container">
          <div class="group">
            <div class="item" v-for="i in 4" :key="i">
              <div class="product">
                <a
                  class="product-img"
                  href=""
                  title="Parapluie de poche - FARE
"
                >
                  <img
                    src="//www.extradtp.net/Datas/Pdts/Ima/P360548.jpg"
                    alt="Parapluie de poche - FARE
"
                  />
                </a>
                <div class="product-details">
                  <h4 class="product-title">
                    <a
                      href=""
                      title="Parapluie de poche - FARE
"
                      >Parapluie de poche - FARE
                    </a>
                  </h4>
                  <div class="product-price">18,12&nbsp;€</div>
                </div>
                <div class="product-actions">
                  <a
                    class="btn btn-secondary"
                    href=""
                    title="Parapluie de poche - FARE
                  "
                    ><span class="glyphicon"></span> Voir produit</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section-content {
  h2 {
    font-size: 56px;
    line-height: 1.5;
    font-weight: 600;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;

    a {
      color: inherit;
      span {
        color: $primary;
      }
    }
  }
}

.backdrop-primary {
  background-color: #ffebf7;
  padding-top: 48px;
}

.group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .item {
    width: 25%;
    padding: 0 15px;

    &:hover .product-actions {
      display: block;
    }

    &:hover .product-details {
      display: none;
    }
  }
}

.product {
  margin-bottom: 48px;
  position: relative;

  a {
    text-decoration: none;
    color: inherit;
    img {
      display: block;
      max-height: 100%;
      max-width: 100%;
    }
  }

  .product-details {
    background-color: #fafafa;
    padding: 14px 15px;
    text-align: center;

    .product-title {
      color: #000;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.5;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .product-price {
      color: #d41b8b;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.5;
    }
  }
  .product-actions {
    display: none;
    color: #fff;
  }
}
</style>
