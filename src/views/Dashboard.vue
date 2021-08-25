<template lang="html">
  <div class="dashboard">
    <div class="menus">
      <UsersMenusComponent />
      <div v-if="menus.length < 1" class="">
        Must create a menu to start
      </div>
      <div v-if="menus.length > 0">
        <div class="container">
          <div v-if="!menu" class="">
            <h3>Choose a menu to edit</h3>
          </div>
          <div v-else class="">
            <h3>Currently building {{ restaurant }}</h3>
            <Button class="addItem" @click="toggleAddItem()"
            :color="addItem ? 'red' : '#0070fc'"
            :text="addItem ? 'Close' : 'Add Item'" />
            <AddItemComponent v-show="addItem" @hide-me="toggleAddItem()" class="showAddItem" />
          </div>
        </div>
      </div>
    </div>
    <div class="menuItems">
      <DisplayMenuComponent />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import UsersMenusComponent from '@/components/dashboard/UsersMenusComponent.vue'
import AddItemComponent from '@/components/dashboard/AddItemComponent.vue'
import DisplayMenuComponent from '@/components/dashboard/DisplayMenuComponent.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'Dashboard',

  components: {
    UsersMenusComponent,
    AddItemComponent,
    DisplayMenuComponent,
    Button,
  },

  data() {
    return {
      addItem: false,
    }
  },

  computed: {
    ...mapState({
      menu: state => state.menu,
      menus: state => state.menus,
      restaurant: state => state.menu.restaurant,
      showAddItem: state => state.showAddItem,
      error: state => state.error,
    })
  },

  methods: {
    toggleAddItem() {
      this.addItem = !this.addItem;
    },
  },
}
</script>

<style lang="css" scoped>

  .dashboard {
    align-self: center;
    margin-top: 75px;
  }

  .container {
    background-color: #fdfdfecc;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    width: 94vw;
    align-self: center;
  }

  button {
    width: 95px;
  }

  .addItem {
    transition: .2s ease-in;
  }

  .addItem:hover {
    opacity: 1;
  }
</style>
