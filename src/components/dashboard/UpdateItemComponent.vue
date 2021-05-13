<template lang="html">
  <div class="update-item">
    <label for="update-title">Edit item title</label>
    <input v-model="title" type="text">
    <label for="update-title">Edit item description</label>
    <input v-model="description" type="text">
    <label for="update-title">Edit item price</label>
    <input v-model="price" type="text">
    <label for="update-title">Edit item categorie</label>
    <input v-model="categorie" type="text">
    <button @click="submitUpdate()" type="button" name="button">Submit</button>
  </div>
</template>

<script>
import MenuService from  '@/menuService.js'

export default {
  name: 'UpdateItemComponent',

  data() {
    return {
      title: '',
      description: '',
      price: '',
      categorie: '',
    }
  },

  props: {
    menuItemID: String,
  },

  async created() {
    const menuItem = await MenuService.getMenuitem(this.menuItemID)
    const data = await menuItem.data
    this.title = data.title
    this.description = data.description
    this.price = data.price
    this.categorie = data.categorie

  },

  methods: {
    async submitUpdate() {
      await MenuService.updateMenuItem(this.menuItemID, this.title, this.description, this.price, this.categorie)
      this.$emit('toggle-show')
      this.$emit('reset-dom')
    }
  },

  emits: ['toggle-show', 'reset-dom']
}
</script>

<style lang="css" scoped>
</style>
