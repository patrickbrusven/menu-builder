<template lang="html">
  <li  class="menu" v-for="menu in menus"
      v-bind:key="menu._id">
    <h3>{{ menu.restaurant }} </h3>
    <Button class="liButton" @click="chooseMenu(menu._id)"
            color="green"
            text="Edit"/>
    <Button class="liButton" @click="removeMenu(menu)"
            color="red"
            text="Remove"/>
  </li>
</template>

<script>
import { mapState } from 'vuex'
import Button from '@/components/Button.vue'

export default {
  name: 'ListMenusComponent',

  components: {
    Button,
  },

  computed: {
    ...mapState({
      menus: state => state.menus,
    }),
  },

  methods: {
    chooseMenu(menuId) {
      if (this.$store.state.error) {
        this.$store.state.error = false;
      }
      this.$store.dispatch('getMenu', menuId)
    },

    removeMenu(menu) {
      this.$store.dispatch('removeMenu', menu)
    },
  },
}
</script>

<style lang="css" scoped>
li {
  list-style: none;
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
</style>
