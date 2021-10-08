<template lang="html">
  <div v-if="!menus.length">
    Frist create a new menu.
    <AddMenuComponent :user="user" />
  </div>
  <div v-else>
    <div v-if="!menu">
      Choose a menu to edit
    </div>
    <div v-else>
      currently building {{menu.restaurant}}
    </div>
    <ListMenusComponent :menus="menus" />
  </div>
  <!-- <Button @click="toggleAddMenu()"
  :color="showAddMenu ? 'red' : '#0070fc'"
  :text="showAddMenu ? 'Close' : 'Add Menu'" />
  <AddMenuComponent v-show="showAddMenu" @hide-me="toggleAddMenu()" :user="user" /> -->
  <!-- <ListMenusComponent :menus="menus" /> -->
</template>

<script>
import Button from '@/components/Button.vue'
import AddMenuComponent from '@/components/dashboard/menus/AddMenuComponent.vue'
import ListMenusComponent from '@/components/dashboard/menus/ListMenusComponent.vue'

export default {
  name: 'UsersMenusComponent',

  components: {
    Button,
    AddMenuComponent,
    ListMenusComponent,
  },

  props: [
    'user',
    'menus',
    'menu',
  ],

  data() {
    return {
      showAddMenu: false,
    }
  },

  methods: {
    toggleAddMenu() {
      this.showAddMenu = !this.showAddMenu;
    },
  },

}
</script>

<style lang="css" scoped>

</style>
