<template lang="html">
  <AddItemComponent @create-item="createItem"/>
  <DisplayMenuComponent />
</template>

<script>
import { mapActions } from 'vuex'
import MenuService from '@/menuService.js'
import AddItemComponent from '@/components/dashboard/AddItemComponent.vue'
import DisplayMenuComponent from '@/components/dashboard/DisplayMenuComponent.vue'

export default {
  name: 'Dashboard',

  components: {
    AddItemComponent,
    DisplayMenuComponent,
  },

  methods: {
    ...mapActions([
      'fetchMenu'
    ]),

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
</style>
