<template>
  <div class="container">
    <p class="title">{{ item.title }}</p>
    <p class="description">{{ item.description }}</p>
    <p class="price">{{ item.price }}</p>
    <p class="categorie">{{ item.categorie }}</p>
    <button @click="$emit('delete-item', item._id)">Remove</button>
    <button @click="onClick(item._id)">Edit</button>
    <div v-show="showEditItem">
      <UpdateItemComponent  @reset-dom="$emit('reset-dom')" @toggle-show="toggleshow()" v-if="showEditItem" :menuItemID="menuItemID" />
    </div>
  </div>
</template>

<script>
import UpdateItemComponent from '@/components/dashboard/UpdateItemComponent.vue'

export default {
  name: 'DisplayItemComponent',

  data() {
    return {
      showEditItem: false,
      menuItemID: '',
    }
  },

  components: {
    UpdateItemComponent,
  },

  props: {
    item: Object,
  },

  methods: {

    async onClick(id) {
      this.showEditItem = !this.showEditItem;
      this.menuItemID = id;
    },

    toggleshow() {
      this.showEditItem = !this.showEditItem;
    }
  },

  emits: ['delete-item', 'reset-dom']
}
</script>

<style scoped>

</style>
