<template lang="html">
  <AddItemComponent @create-item="createItem"/>
  <DisplayMenuComponent @delete-item="deleteItem"
                @reset-dom="resetDOM"
                :Menu='menu' />
</template>

<script>
import MenuService from '@/menuService.js'
import DisplayMenuComponent from '@/components/dashboard/DisplayMenuComponent.vue'
import AddItemComponent from '@/components/dashboard/AddItemComponent.vue'


export default {
  name: 'Dashboard',

  components: {
    DisplayMenuComponent,
    AddItemComponent
  },

  data() {
    return {
      menu: [],
    }
  },

  async created() {
    try {
      this.menu = await MenuService.getMenu();
    } catch(err) {
      this.error = err.message;
    }
  },

  methods: {
    async deleteItem(id) {
      await MenuService.deleteMenuItem(id);
      this.menu = await MenuService.getMenu();
    },

    async createItem(newItem) {
      await MenuService.insertMenuItem(newItem.title, newItem.description, newItem.price, newItem.categorie);
      this.menu = await MenuService.getMenu();
    },

    async resetDOM() {
      this.menu = await MenuService.getMenu();
    },
  }

}
</script>

<style lang="css" scoped>
</style>
