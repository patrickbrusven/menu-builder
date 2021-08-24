<template lang="html">
  <div class="add-menu">
    <label>Start a new menu</label>
    <input type="text" id="add-menu" v-model="menuTitle" placeholder="menu name...">
    <div class="bottomLine">
      <label>Add a new menu</label>
      <button @click="createNewMenu()">Submit</button>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AddMenuComponent',

  data() {
    return {
      menuTitle: '',
    }
  },

  computed: {
    ...mapState({
      userId: state => state.user._id,
    })
  },

  methods: {
    createNewMenu() {
      this.$store.
      dispatch('addMenu', {
        userId: this.userId,
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

.bottomLine {
  display: flex;
  justify-content: space-between;
}

label {
  color: #004aaf;
  padding: 5px;
  font: inherit;
  font-weight: bold;
}

input {
  margin: 5px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  text-align: center;
  background-color: #167afb;
  opacity: .8;
  font: inherit;
  font-weight: bold;
  color: white;
}

input:hover {
  transition: .2s ease-in;
  background-color: #004aaf;
  font-weight: bold;
}

input:active {
  box-shadow: none;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #e4ddeb;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #e4ddeb;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #e4ddeb;
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
