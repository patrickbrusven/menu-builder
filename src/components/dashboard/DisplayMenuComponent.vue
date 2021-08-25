<template lang="html">
  <div v-if="menu && !error" class="menuDisplay">
    <DisplayItemComponent @edit-item="editItem" />
    <UpdateItemComponent class="centered" @toggle-show="toggleShow" v-if="showEditItem" :menuItemId="menuItemId" />
  </div>
  <!-- <div v-else-if="!menu && !error">
    <h3>This instead of Menu</h3>
  </div>
  <div v-else-if="error">
    <h3>You deleted all menuItems in this menu</h3>
  </div> -->
</template>

<script>
// import { mapActions } from 'vuex'
import { mapState } from 'vuex'
import DisplayItemComponent from '@/components/dashboard/DisplayItemComponent.vue'
import UpdateItemComponent from '@/components/dashboard/UpdateItemComponent.vue'

export default {
  name: 'DisplayMenuComponent',


  components: {
    DisplayItemComponent,
    UpdateItemComponent,
  },

  data() {
    return {
      // showEditItem: false,
      menuItemId: '',
    }
  },

  computed: {
    ...mapState({
      menu: state => state.menu,
      showEditItem: state => state.showEditItem,
      error: state => state.error,
      errorMessage: state => state.errorMessage,
    })
    // menu () {
    //   return this.$store.state.menu
    // },
    //
    // showEditItem () {
    //   return this.$store.state.showEditItem
    // },
  },

  methods: {
    editItem(menuItemId) {
      this.menuItemId = menuItemId;
      this.showEditItem = !this.showEditItem;

      if(this.$store.state.showAddItem) {
        this.$store.state.showAddItem = !this.$store.state.showAddItem;
      }
    },
    // do this rather than above, try to reach locally for toggle of accordian rather than state
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
  /* left: 50%; */
  /* transform: translate(-50%, -20%); */
  box-shadow: 0px 0px 13px 4px #868686;
}
</style>
