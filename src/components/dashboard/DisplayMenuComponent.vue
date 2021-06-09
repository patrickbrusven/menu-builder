<template lang="html">
  <DisplayItemComponent @edit-item="editItem" />
  <UpdateItemComponent @toggle-show="toggleShow" v-if="showEditItem" :menuItemID="menuItemID" />
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
      menuItemID: '',
    }
  },

  methods: {
    async editItem(itemToUpdate) {
      this.menuItemID = itemToUpdate;
      this.showEditItem = !this.showEditItem;
    },

    toggleShow() {
      this.showEditItem = !this.showEditItem;
    },
  },
}
</script>

<style lang="css" scoped>
</style>
