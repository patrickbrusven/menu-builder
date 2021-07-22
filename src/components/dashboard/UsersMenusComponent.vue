<template lang="html">
  <div class="wrapper">
    <Button class="addItem" @click="toggleAddMenu()"
    :color="showAddMenu ? 'red' : '#0070fc'"
    :text="showAddMenu ? 'Close' : 'Add Menu'" />
    <div v-show="showAddMenu" class="add-menu">
      <label>Start a new menu</label>
      <input type="text" id="add-menu" v-model="menuTitle" placeholder="menu name...">
      <div class="bottomLine">
        <label>Add a new menu</label>
        <button @click="createNewMenu()">Submit</button>
      </div>
    </div>
  </div>

  <li v-show="menus" class="menu" v-for="menu in menus"
      v-bind:key="menu._id">
    <h3>{{ menu.restaurant }} </h3>
    <Button class="liButton" @click="chooseMenu(menu._id)"
            color="green"
            text="Edit"/>
    <Button class="liButton" @click="removeMenu(menu)"
            color="red"
            text="Remove"/>
  </li>
</template>

<script>
import { mapState } from 'vuex'
import Button from '@/components/Button.vue'

export default {
  name: 'UsersMenusComponent',

  components: {
    Button,
  },

  data() {
    return {
      menuTitle: '',
    }
  },

  computed: {
    ...mapState({
      showAddMenu: state => state.showAddMenu,
      menus: state => state.menus,
      // menu: state => state.menu,
    })
  },

  methods: {
    createNewMenu() {
      this.$store.
      dispatch('addMenu', {
        userId: this.$store.state.user._id,
        restaurant: this.menuTitle
        })
      this.menuTitle = '';
      this.toggleAddMenu();
    },

    chooseMenu(menuId) {
      this.$store.dispatch('getMenu', menuId)
    },

    removeMenu(menu) {
      this.$store.dispatch('removeMenu', menu)
    },

    toggleAddMenu() {
      this.$store.state.showAddMenu = !this.$store.state.showAddMenu;
    },
  },

  // created() {
  //   const userId = this.$store.state.user._id;
  //   this.$store.dispatch('getUsersMenus', userId);
  // },
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
