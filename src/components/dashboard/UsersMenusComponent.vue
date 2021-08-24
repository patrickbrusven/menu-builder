<template lang="html">
  <div class="wrapper">
    <Button @click="toggleAddMenu()"
    :color="showAddMenu ? 'red' : '#0070fc'"
    :text="showAddMenu ? 'Close' : 'Add Menu'" />
    <AddMenuComponent v-show="showAddMenu" @hide-me="toggleAddMenu()"/>
  </div>
  <ListMenusComponent />
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
