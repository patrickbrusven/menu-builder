<template>
  <div class="container">
    <li v-for="item in $store.state.menu"
        v-bind:key="item._id">
      <p class="title">{{ item.title }}</p>
      <p class="description">{{ item.description }}</p>
      <p class="price">{{ item.price }}</p>
      <p class="categorie">{{ item.categorie }}</p>
      <button @click="deleteItem(item._id)">Remove</button>
      <button @click="$emit('edit-item', item._id)">Edit</button>
    </li>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MenuService from '@/menuService.js'

export default {
  name: 'DisplayItemComponent',

  methods: {
    ...mapActions([
      'fetchMenu'
    ]),

    async deleteItem(id) {
      await MenuService.deleteMenuItem(id);
      await this.fetchMenu();
    },
  },

  created() {
    this.fetchMenu();
  },

  emits: ['edit-item']
}
</script>

<style scoped>

</style>
