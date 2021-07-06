<template lang="html">
  <div v-if="$store.state.menu" class="menuDisplay">
    <DisplayItemComponent @edit-item="editItem" />
    <UpdateItemComponent class="centered" @toggle-show="toggleShow" v-if="$store.state.showEditItem" :menuItemId="menuItemId" />
  </div>
  <div v-else>
    <h3> This instead of Menu </h3>
  </div>
</template>

<script>
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
      showEditItem: false,
      menuItemId: '',
    }
  },

  methods: {
    editItem(menuItemId) {
      this.menuItemId = menuItemId;
      this.showEditItem = !this.showEditItem;

      if(this.$store.state.showAddItem) {
        this.$store.state.showAddItem = !this.$store.state.showAddItem;
      }
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
  position: fixed;
  left: 50%;
  transform: translate(-50%, -20%);
  box-shadow: 0px 0px 13px 4px #868686;
}
</style>
