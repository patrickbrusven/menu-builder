<template lang="html">
  <div class="dashboard">
    <UsersMenusComponent />
    <div class="container">
      <div v-if="!$store.state.menu" class="">
        <h3>Choose a menu to edit</h3>
      </div>
      <div v-else class="">
        <h3>Currently building {{ $store.state.menu.restaurant }}</h3>
        <Button class="addItem" @click="showAddItem()"
        :color="$store.state.showAddItem ? 'red' : '#0070fc'"
        :text="$store.state.showAddItem ? 'Close' : 'Add Item'" />
        <AddItemComponent v-show="$store.state.showAddItem" class="showAddItem" />
      </div>
    </div>
    <DisplayMenuComponent />
  </div>
</template>

<script>
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

  methods: {
    showAddItem() {
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
