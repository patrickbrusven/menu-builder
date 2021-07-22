import { createStore } from 'vuex'
import axios from 'axios'
import MenuService from '@/menuService.js'
import UsersService from '@/usersService.js'
import RefreshUserService from '@/refreshUserService.js'

export default createStore({
  state: {
    error: false,
    errorMessage: '',
    loggedIn: false,
    user: null,
    menus: null,
    menu: null,
    menuItems: null,
    menuItem: null,
    showAddMenu: false,
    showAddItem: false,
    showEditItem: false,
  },
  mutations: {
    SET_ERROR_DATA (state, errorData) {
      state.error = !state.error
      state.errorMessage = errorData
    },
    SET_USERS_MENUS (state, menusData) {
      state.menus = menusData;
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
        .post('api/register', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
        .catch(({ response }) => {
          commit('SET_ERROR_DATA', response.data)
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

    async login ({ commit, dispatch }, credentials) {
      return axios
        .post('api/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
          dispatch('getUsersMenus', data._id)
        })
        .catch(({ response }) => {
          commit('SET_ERROR_DATA', response.data)
        })
    },

    logout ({ commit }) {
      commit('LOGOUT')
    },

    // async pageRefresh ({ commit }) {
    //   const userString = localStorage.getItem('user')
    //   const token = JSON.parse(userString)
    //   const { data } = await RefreshUserService.getUserByToken(token);
    //   data
    //     .then( res => {
    //
    //     })
    //     .catch( err => {
    //
    //     });
    //
    //   commit('SET_USER_DATA', data);
    // },

    async pageRefresh ({ commit, dispatch }) {
      const userString = localStorage.getItem('user')
      const token = JSON.parse(userString)
      const { data } = await RefreshUserService.getUserByToken(token);
      // console.log(data._id);
      commit('SET_USER_DATA', data);
      dispatch('getUsersMenus', data._id);
    },

    async addMenu ({ dispatch }, newMenu) {
      const userId = newMenu.userId
      await UsersService.newUsersMenu(userId, newMenu);
      dispatch('getUsersMenus', userId);
    },

    async removeMenu ({ dispatch }, menu) {
      const menuId = menu._id
      await MenuService.removeMenu(menuId);
      dispatch('getUsersMenus', menu.owner);
      dispatch('getUsersMenuItems', menuId);
    },

    async removeMenuItem({ dispatch }, item) {
      // const menuId = this.state.menu._id
      const menuId = item.owner
      const menuItemId = item._id

      await MenuService.removeMenuItem(menuId, menuItemId)
      dispatch('getUsersMenuItems', menuId);
    },

    async getUsersMenus({ commit }, userId) {
      // const userId = this.state.user._id
      const { data } = await UsersService.getUsersMenus(userId);
      commit('SET_USERS_MENUS', data);
    },

    async getMenu({ commit, dispatch }, menuId) {
      const { data } = await MenuService.getMenu(menuId);
      commit('SET_USERS_MENU', data);
      dispatch('getUsersMenuItems', menuId);
    },

    async newMenuItem({ dispatch }, newItem) {
      const menuId = newItem.menuId
      await MenuService.newMenuItem(menuId, newItem);
      dispatch('getUsersMenuItems', menuId);
    },

    async getUsersMenuItems({ commit }, menuId) {
      // const menuId = this.state.menu._id
      const { data } = await MenuService.getMenuItems(menuId);
      commit('SET_MENU_ITEMS', data);
    },

    async getMenuItem({ commit },  item) {
      // const menuId = this.state.menu._id
      const menuId = item.owner
      const menuItemId = item._id
      const { data } = await MenuService.getMenuItem(menuId, menuItemId);
      commit('SET_MENU_ITEM', data);
    },

    async updateMenuItem({ dispatch }, updatedItem) {
      // const menuId = this.state.menu._id
      // const menuItemId = this.state.menuItem._id
      const menuId = updatedItem.owner
      const menuItemId = updatedItem._id
      await MenuService.updateMenuItem(menuId, menuItemId, updatedItem);
      dispatch('getUsersMenuItems', menuId);
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
