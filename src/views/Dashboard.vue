<template lang="html">
  <menuComponent :Menu='menu' />
</template>

<script>
import MenuService from '@/menuService.js'
import menuComponent from '@/components/dashboard/menuComponent.vue'

export default {
  name: 'Dashboard',

  components: {
    menuComponent,
  },

  data() {
    return {
      menu: [],
    }
  },

  async created() {
    try {
      this.menu = await MenuService.getMenu();
    } catch(err) {
      this.error = err.message;
    }
  },

}
</script>

<style lang="css" scoped>
</style>
