<template lang="html">
  <Button @click="toggleAddMenu()"
  :color="showAddMenu ? 'red' : '#0070fc'"
  :text="showAddMenu ? 'Close' : 'Add Menu'" />
  <AddMenuComponent v-show="showAddMenu" @hide-me="toggleAddMenu()"/>
  <div v-if="menus.length < 1">
    Add your first menu
  </div>
  <ListMenusComponent />
</template>

<script>
import { mapState } from 'vuex'
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

  computed: {
    ...mapState({
      menus: state => state.menus,
    })
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
