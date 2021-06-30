<template lang="html">
  <div class="wrapper">
    <Button class="addItem" @click="showAddRestaurant()"
    :color="$store.state.showAddRestaurant ? 'red' : '#0070fc'"
    :text="$store.state.showAddRestaurant ? 'Close' : 'Add Menu'" />
    <div v-show="$store.state.showAddRestaurant" class="add-menu">
      <label>Start a new restaurant</label>
      <input type="text" id="add-menu" v-model="restaurant" placeholder="restaurant name...">
      <div class="bottomLine">
        <label>Add a new menu</label>
        <button @click="createNewMenu">Submit</button>
      </div>
    </div>
  </div>

  <li v-show="$store.state.menus" class="menu" v-for="menu in $store.state.menus"
      v-bind:key="menu._id">
    <h3>{{ menu.restaurant }} </h3>
    <Button class="liButton" @click="chooseMenu(menu._id)"
            color="green"
            text="Edit"/>
    <Button class="liButton" @click="removeMenu(menu._id)"
            color="red"
            text="Remove"/>
  </li>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'UsersMenusComponent',

  components: {
    Button,
  },

  data() {
    return {
      restaurant: '',
    }
  },

  methods: {
    createNewMenu() {
      this.$store.
      dispatch('addMenu', {
        restaurant: this.restaurant
        })
      this.restaurant = '';
      this.showAddRestaurant();
    },

    chooseMenu(menuId) {
      this.$store.dispatch('getMenu', { menuId })
    },

    removeMenu(menuId) {
      this.$store.dispatch('removeMenu', { menuId })
    },

    showAddRestaurant() {
      this.$store.state.showAddRestaurant = !this.$store.state.showAddRestaurant;
    },
  },

  created() {
    this.$store.dispatch('getUsersMenus');
  },
}
</script>

<style lang="css" scoped>
li {
  list-style: none;
}
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

.liButton {
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 12px;
  background-color: #167afbcc;
  opacity: .7;
  transition: .2s ease-in;
}

.liButton:hover {
  opacity: 1;
}
</style>
