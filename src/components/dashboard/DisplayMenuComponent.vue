<template lang="html">
  <li v-for="menuItem in Menu"
      v-bind:key="menuItem._id">
      <DisplayItemComponent @delete-item="$emit('delete-item', menuItem._id)"
                    @reset-dom="$emit('reset-dom')"
                    :item="menuItem" />
  </li>
</template>

<script>
import DisplayItemComponent from '@/components/dashboard/DisplayItemComponent.vue'

export default {
  name: 'DisplayMenuComponent',

  components: {
    DisplayItemComponent,
  },

  props: {
    Menu: Array
  },

  emits: ['delete-item', 'reset-dom'],
}
</script>

<style lang="css" scoped>
</style>
