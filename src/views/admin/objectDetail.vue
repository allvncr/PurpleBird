<template>
  <div>
    <header>
      <h1>Purplebird Admin</h1>
      <p class="btn btn-light logout">deconnexion</p>
    </header>

    <div class="container">
      <div class="head">
        <h2 v-if="$route.params">{{ $route.params.obj }}</h2>
        <button class="btn btn-primary add" @click="openModal('add-category')">
          Ajouter
        </button>
      </div>
      <table class="table table-bordered mt-4 table-hover" v-if="isCategorie">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Libellé</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cat, i) in getCategories" :key="i">
            <td>{{ cat.id }}</td>
            <td>{{ cat.lib }}</td>
            <td class="actions">
              <div class="action">
                <svg viewBox="0 0 16 16">
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793L14.793 3.5L12.5 1.207L11.207 2.5zm1.586 3L10.5 3.207L4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106l-1.528 3.821l3.821-1.528l.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                  />
                </svg>
              </div>
              <div class="action">
                <svg viewBox="0 0 16 16">
                  <path
                    d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534c-.477.16-.795.327-.975.466c.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466c-.18-.14-.498-.307-.975-.466z"
                  />
                </svg>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="table table-bordered mt-4" v-if="isProduit">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Libellé</th>
            <th scope="col">Prix</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prod, i) in getProduits" :key="i">
            <td>{{ prod.id }}</td>
            <td style="text-align: center">
              <img
                width="64"
                height="64"
                :src="prod.urlimage"
                :alt="prod.name"
              />
            </td>
            <td>{{ prod.name }}</td>
            <td>{{ prod.price }} €</td>
            <td class="actions">
              <div class="action">
                <svg viewBox="0 0 16 16">
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793L14.793 3.5L12.5 1.207L11.207 2.5zm1.586 3L10.5 3.207L4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106l-1.528 3.821l3.821-1.528l.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                  />
                </svg>
              </div>
              <div class="action">
                <svg viewBox="0 0 16 16">
                  <path
                    d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534c-.477.16-.795.327-.975.466c.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466c-.18-.14-.498-.307-.975-.466z"
                  />
                </svg>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="head">
        <router-link to="/admin/home" class="btn btn-light add"
          >Retour</router-link
        >
        <p class="subtext" v-if="isProduit">{{ getProduitRows }} produits</p>
        <p class="subtext" v-if="isCategorie">
          {{ getCategorieRows }} catégories
        </p>
      </div>
    </div>

    <add-categorie></add-categorie>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import addCategorie from "@/components/modal/add/addCategorie.vue";

export default {
  components: {
    addCategorie,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["all_categories", "all_products", "add_categorie"]),
    openModal(name) {
      this.$root.$emit('bv::show::modal', name)
    },
  },
  computed: {
    ...mapGetters([
      "getCategories",
      "getCategorieRows",
      "getProduitRows",
      "getProduits",
    ]),

    isCategorie() {
      return this.$route.params.obj == "categories";
    },

    isProduit() {
      return this.$route.params.obj == "produits";
    },
  },
  mounted() {
    if (this.isCategorie) this.all_categories();
    if (this.isProduit) this.all_products({});
  },
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
    width: 200px;
  }
}

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;
  .add {
    width: 20%;
  }

  h2 {
    text-transform: capitalize;
    margin-bottom: 0;
  }
}

.table {
  td {
    vertical-align: baseline;
  }

  tr {
    cursor: pointer;
    &:hover {
      background-color: rgba($color: $primary, $alpha: 0.2);
    }
  }
}

.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;

  .action {
    background-color: $secondary;
    width: 32px;
    height: 32px;
    margin: 0 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 18px;
      fill: #fff;
    }
  }
}

.subtext {
  font-weight: 600;
  text-align: right;
  font-style: italic;
}
</style>
