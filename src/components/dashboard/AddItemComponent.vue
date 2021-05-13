<template lang="html">
  <div class="add-item">
    <label for="add-item">Add something delicious</label>
    <input type="text" id="add-item" v-model="title" placeholder="item title">
    <input type="text" id="add-description" v-model="description" placeholder="item description">
    <input type="text" id="add-price" v-model="price" placeholder="item price">
    <input type="text" id="add-categorie" v-model="categorie" placeholder="item categorie">
    <button @click="createNewItem" >submit menu item</button>
  </div>
</template>

<script>
export default {
  name: 'AddItemComponent',

  data() {
    return {
      title: '',
      description: '',
      price: '',
      categorie: '',
    }
  },

  methods: {
    createNewItem() {
      const newItem = {
        title: this.title,
        description: this.description,
        price: this.price,
        categorie: this.categorie,
      }

      this.$emit('create-item', newItem)

      this.title = ''
      this.description = ''
      this.price = ''
      this.categorie = ''
    }
  },

  emits: ['create-item']
}
</script>

<style lang="css" scoped>
</style>
