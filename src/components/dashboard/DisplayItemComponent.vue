<template>
  <div v-if="menuItems" class="container">
    <li class="item" v-for="item in menuItems"
        v-bind:key="item._id">
      <h3 class="title">{{ item.title }}</h3>
      <p class="description">{{ item.description }}</p>
      <h4 class="price">${{ item.price }}</h4>
      <p class="categorie">{{ item.categorie }}</p>
      <div class="hide">
        <Button class="liButton" @click="removeMenuItem(item)"
                color="red"
                text="Remove"/>
        <Button class="liButton" @click="getMenuItem(item)"
                color="green"
                text="Edit"/>
      </div>
    </li>

  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'DisplayItemComponent',

  components: {
    Button,
  },

  computed: {
    menuItems () {
      return this.$store.state.menuItems
    }
  },

  methods: {
    removeMenuItem(item) {
      this.$store.
        dispatch('removeMenuItem', item);
    },

    async getMenuItem(item) {
      await this.$store.
        dispatch('getMenuItem', item);
        this.$store.state.showEditItem = !this.$store.state.showEditItem
    }
  },

  emits: ['edit-item']
}
</script>

<style scoped>
.container {
  position: relative;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  align-content: center;
}

li {
  list-style: none;
  position: relative;
  border-radius: 5px;
  margin: 5px;

  width: 95%;
}

.liButton {
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 12px;
  background-color: #167afbcc;
  opacity: .7;
  transition: .2s ease-in;
}

.liButton:hover {
  opacity: 1;
}

.hide {
  opacity: 0;
  transition: .3s;
  position: absolute;
  right: 0px;
  bottom: 0px;
}

.item:hover > .hide {
  opacity: 1;
}

</style>
