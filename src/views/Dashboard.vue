<template lang="html">
  <div class="dashboard">
    <div class="container">
      <h3>Currently building this menu</h3>
      <Button class="addItem" @click="showAddItem()"
      :color="$store.state.showAddItem ? 'red' : '#0070fc'"
      :text="$store.state.showAddItem ? 'Close' : 'Add Item'" />
      <AddItemComponent v-show="$store.state.showAddItem" class="showAddItem" @create-item="createItem"/>
    </div>
    <DisplayMenuComponent />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MenuService from '@/menuService.js'
import AddItemComponent from '@/components/dashboard/AddItemComponent.vue'
import DisplayMenuComponent from '@/components/dashboard/DisplayMenuComponent.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'Dashboard',

  components: {
    AddItemComponent,
    DisplayMenuComponent,
    Button,
  },

  data() {
    return {
      addItem: false,
    }
  },

  methods: {
    ...mapActions([
      'fetchMenu'
    ]),

    showAddItem() {
      this.$store.state.showAddItem = !this.$store.state.showAddItem;
    },

    async deleteItem(id) {
      await MenuService.deleteMenuItem(id);
      await this.fetchMenu();
    },

    async createItem(newItem) {
      await MenuService.insertMenuItem(newItem.title, newItem.description, newItem.price, newItem.categorie);
      await this.fetchMenu();
    },
  },
}
</script>

<style lang="css" scoped>

  .dashboard {
    align-self: center;
    margin-top: 75px;
  }

  .container {
    background-color: #fdfdfecc;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    width: 94vw;
    align-self: center;
  }

  button {
    width: 95px;
  }

  .addItem {
    transition: .2s ease-in;
  }

  .addItem:hover {
    opacity: 1;
  }
</style>
