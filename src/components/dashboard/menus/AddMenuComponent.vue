<template lang="html">
  <div class="add-menu">
    <FormInput v-model="menuTitle" label="Menu Title" placeholder="menu title..."/>
    <button @click="createNewMenu()">Submit</button>
  </div>
</template>

<script>
import FormInput from '@/components/ui/FormInput.vue'

export default {
  name: 'AddMenuComponent',

  components: {
    FormInput,
  },

  props: ['user'],

  data() {
    return {
      menuTitle: '',
    }
  },

  methods: {
    createNewMenu() {
      this.$store.
      dispatch('addMenu', {
        userId: this.user._id,
        restaurant: this.menuTitle
        })
      this.menuTitle = '';
      this.$emit('hide-me');
    },
  },
}
</script>

<style lang="css" scoped>

.add-menu {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 94vw;
  align-self: center;
}

button {
  color: #f0e4ec;
  text-decoration: none;
  background-color: #0070fc;
  padding: 4px;
  border-radius: 5px;
  margin: 5px;
  width: min-content;
  align-self: center;
  border: none;
  cursor: pointer;
  opacity: .8;
  font: inherit;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
  transition: .2s ease-in;
}

button:hover {
  background-color: #004aaf;
}
</style>
