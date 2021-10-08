<template lang="html">
  <div class="container">

    <div v-if="navigationCategorie === 'menus'">
      <UsersMenusComponent :menus="menus" :user="user" :menu="menu" />
    </div>

    <div v-if="navigationCategorie === 'menuItems'">
      <div v-if="menu">
        <DisplayMenuComponent />
      </div>
      <div v-else>
        <p>Select a menu to edit</p>
        <UsersMenusComponent :menus="menus" :user="user" />
      </div>
    </div>

    <div v-if="navigationCategorie === 'add'">
      <div v-if="addMenu">
        <AddMenuComponent :user="user" />
      </div>
      <div v-else>
        <AddItemComponent :menuId="menu._id"/>
      </div>
    </div>

    <div v-if="navigationCategorie === 'restaurant'">
      <p>Edit restaurant info</p>
    </div>

  </div>

  <MobileSideBarComponent :addMenu="addMenu" @click-icon="mobileNavigation" @toggle-menu="toggleMenu" />
</template>

<script>
import { mapState } from 'vuex'
import AddMenuComponent from '@/components/dashboard/menus/AddMenuComponent.vue'
import AddItemComponent from '@/components/dashboard/AddItemComponent.vue'
import UsersMenusComponent from '@/components/dashboard/UsersMenusComponent.vue'
import DisplayMenuComponent from '@/components/dashboard/DisplayMenuComponent.vue'
import MobileSideBarComponent from '@/components/dashboard/MobileSideBarComponent.vue'

export default {
  name: 'Dashboard',

  components: {
    AddMenuComponent,
    AddItemComponent,
    UsersMenusComponent,
    DisplayMenuComponent,
    MobileSideBarComponent,
  },

  data() {
    return {
      navigationCategorie: 'menus',
      restaurant: false,
      addMenu: true,
      windowWidth: '',
      windowHeight: '',
    }
  },

  computed: {
    ...mapState({
      user: state => state.user,
      menus: state => state.menus,
      menu: state => state.menu,
    })
  },

  methods: {
    getWindowData() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },

    mobileNavigation(categorie) {
      this.navigationCategorie = categorie;
    },

    toggleMenu() {
      this.addMenu = !this.addMenu;
    }
  },

  mounted() {
    window.addEventListener('resize', this.getWindowData, { passive: true });
  },

  unmounted() {
    window.removeEventListener('resize', this.getWindowData, { passive: true });
  },

  created () {
    this.getWindowData();
  },

}
</script>

<style lang="css" scoped>

  .container {
    align-self: center;
    margin-top: 75px;
  }

  button {
    width: 95px;
  }

  .addItem {
    transition: .2s ease-in;
  }

  .addItem:hover {
    opacity: 1;
  }
</style>
