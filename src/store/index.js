import { createStore } from 'vuex'
import axios from 'axios'
import MenuService from '@/menuService.js'
import UsersService from '@/usersService.js'
import RefreshUserService from '@/refreshUserService.js'

export default createStore({
  state: {
    loggedIn: false,
    user: null,
    menus: null,
    menu: null,
    menuItems: null,
    menuItem: null,
    showAddRestaurant: false,
    showAddItem: false,
    showEditItem: false,
  },
  mutations: {
    SET_USERS_MENUS (state, menusData) {
      state.menus = menusData
    },

    SET_USERS_MENU (state, menuData) {
      state.menu = menuData
    },

    SET_MENU_ITEMS (state, menuItemsData) {
      state.menuItems = menuItemsData
    },

    SET_MENU_ITEM (state, menuItemData) {
      state.menuItem = menuItemData
    },

    SET_USER_DATA (state, userData) {
      state.loggedIn = true
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData.token))
      axios.defaults.headers.common['auth-token'] = `${
        userData.token
        }`
    },

    LOGOUT () {
      localStorage.removeItem('user')
      location.reload()
    },
  },
  actions: {
    register ({ commit }, credentials) {
      return axios
        .post('//localhost:5000/api/register', credentials)
        .then(({ data }) => {
          console.log('user data is', data)
          commit('SET_USER_DATA', data)
        })
    },

    // old way
    // async login ({ commit }, credentials) {
    //   await this.fetchMenu;
    //   return axios
    //     .post('//localhost:5000/api/login', credentials)
    //     .then(({ data }) => {
    //       commit('SET_USER_DATA', data)
    //     })
    // },

    async login ({ commit }, credentials) {
      // await this.fetchMenu;
      return axios
        .post('//localhost:5000/api/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },

    logout ({ commit }) {
      commit('LOGOUT')
    },

    async pageRefresh ({ commit }) {
      const userString = localStorage.getItem('user')
      const token = JSON.parse(userString)
      const { data } = await RefreshUserService.getUserByToken(token);
      commit('SET_USER_DATA', data);
    },

    async addMenu ({ dispatch }, restaurant) {
      const userId = this.state.user._id
      await UsersService.newUsersMenu(userId, restaurant);
      dispatch('getUsersMenus');
    },

    async removeMenu ({ dispatch }, menuId) {
      await MenuService.removeMenu(menuId.menuId);
      dispatch('getUsersMenus');
    },

    async removeMenuItem({ dispatch }, menuItemId) {
      const menuId = this.state.menu._id
      await MenuService.removeMenuItem(menuId, menuItemId)
      dispatch('getUsersMenuItems');
    },

    async getUsersMenus({ commit }) {
      const userId = this.state.user._id
      const { data } = await UsersService.getUsersMenus(userId);
      commit('SET_USERS_MENUS', data);
    },

    async getMenu({ commit, dispatch }, menuId) {
      const { data } = await MenuService.getMenu(menuId.menuId);
      commit('SET_USERS_MENU', data);
      dispatch('getUsersMenuItems');
    },

    async newMenuItem({ dispatch }, newItem) {
      const menuId = this.state.menu._id
      await MenuService.newMenuItem(menuId, newItem);
      dispatch('getUsersMenuItems');
    },

    async getUsersMenuItems({ commit }) {
      const menuId = this.state.menu._id
      const { data } = await MenuService.getMenuItems(menuId);
      commit('SET_MENU_ITEMS', data);
    },

    async getMenuItem({ commit },  menuItemId) {
      const menuId = this.state.menu._id
      const { data } = await MenuService.getMenuItem(menuId, menuItemId);
      commit('SET_MENU_ITEM', data);
    },

    async updateMenuItem({ dispatch }, updatedItem) {
      const menuId = this.state.menu._id
      const menuItemId = this.state.menuItem._id
      await MenuService.updateMenuItem(menuId, menuItemId, updatedItem);
      dispatch('getUsersMenuItems');
    }
  },
  getters: {
    loggedIn (state) {
      return !!state.loggedIn
    },
  },
  modules: {
  }
})
