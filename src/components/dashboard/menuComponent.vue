<template lang="html">
  <li v-for="menuItem in Menu"
      v-bind:key="menuItem._id">
      <itemComponent :item="menuItem"/>
  </li>
</template>

<script>
import itemComponent from '@/components/dashboard/itemComponent.vue'

export default {
  name: 'menuComponent',

  components: {
    itemComponent,
  },

  props: {
    Menu: Array
  },
}
</script>

<style lang="css" scoped>
</style>
