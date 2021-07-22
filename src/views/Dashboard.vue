<template lang="html">
  <div class="dashboard">
    <UsersMenusComponent />
    <div class="container">
      <div v-if="!menu" class="">
        <h3>Choose a menu to edit</h3>
      </div>
      <div v-else class="">
        <h3>Currently building {{ restaurant }}</h3>
        <Button class="addItem" @click="toggleAddItem()"
        :color="showAddItem ? 'red' : '#0070fc'"
        :text="showAddItem ? 'Close' : 'Add Item'" />
        <AddItemComponent v-show="showAddItem" class="showAddItem" />
      </div>
    </div>
    <DisplayMenuComponent />
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
      restaurant: state => state.menu.restaurant,
      showAddItem: state => state.showAddItem,
    })
  },

  methods: {
    toggleAddItem() {
      this.$store.state.showAddItem = !this.$store.state.showAddItem;
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
