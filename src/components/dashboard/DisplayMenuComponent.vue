<template lang="html">
  <div>
    <h3>Currently building {{ restaurant }}</h3>

    <div v-if="!menuItems.length">
     Add a menu item
     <AddItemComponent :menuId='menuId' />
    </div>
    <div v-else>
      <DisplayItemComponent :menuItems="menuItems" @edit-item="editItem" />
      <UpdateItemComponent class="centered" @toggle-show="toggleShow()" v-if="showEditItem" :menuId='menuId' :menuItemId="menuItemId" />
    </div>


    <!-- <Button class="addItem" @click="toggleAddItem()"
    :color="showAddItem ? 'red' : '#0070fc'"
    :text="showAddItem ? 'Close' : 'Add Item'" /> -->
    <!-- <AddItemComponent v-show="showAddItem" @hide-me="toggleAddItem()" class="showAddItem" :menuId='menuId' /> -->
    <!-- <DisplayItemComponent :menuItems="menuItems" @edit-item="editItem" /> -->
    <!-- <UpdateItemComponent class="centered" @toggle-show="toggleShow()" v-if="showEditItem" :menuId='menuId' :menuItemId="menuItemId" /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DisplayItemComponent from '@/components/dashboard/DisplayItemComponent.vue'
import UpdateItemComponent from '@/components/dashboard/UpdateItemComponent.vue'
import AddItemComponent from '@/components/dashboard/AddItemComponent.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'DisplayMenuComponent',

  components: {
    DisplayItemComponent,
    UpdateItemComponent,
    AddItemComponent,
    Button,
  },

  data() {
    return {
      menuItemId: '',
      showAddItem: false,
      showEditItem: false,
    }
  },

  computed: {
    ...mapState({
      menu: state => state.menu,
      menuId: state => state.menu._id,
      restaurant: state => state.menu.restaurant,
      menuItems: state => state.menuItems,
    })
  },

  methods: {
    toggleAddItem() {
      this.showAddItem = !this.showAddItem;
    },

    editItem(menuItemId) {
      this.menuItemId = menuItemId;
      this.showEditItem = !this.showEditItem;
    },

    toggleShow() {
      this.showEditItem = !this.showEditItem;
    },
  },
}
</script>

<style lang="css" scoped>
.menuDisplay {
  width: 95vw;
  margin-top: 10px;
  background-color: #fdfdfecc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.centered {
  position: absolute;
  top: 70px;
  box-shadow: 0px 0px 13px 4px #868686;
}
</style>
