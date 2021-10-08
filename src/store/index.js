import { createStore } from 'vuex'
import MenuService from '@/menuService.js'
import UsersService from '@/usersService.js'
import JwtService from '@/jwtService.js'
import AuthService from '@/authService.js'

export default createStore({
  state: {
    error: false,
    errorMessage: '',
    loggedIn: false,
    user: null,
    menus: [],
    menu: null,
    menuItems: null,
    menuItem: null,
  },

  mutations: {
    SET_ERROR_DATA (state, errorData) {
      state.error = true;
      state.errorMessage = errorData;
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

    SET_USER_DATA (state, data) {
      state.user = data
      state.loggedIn = true
    },

    LOGOUT () {
      sessionStorage.removeItem('user')
      location.reload()
    },
  },

  actions: {
    async register ({ commit }, credentials) {
      await AuthService.register(credentials)
        .then(({ headers, data }) => {
          const jwt = headers['auth-token'];
          JwtService.setSessionStorage(jwt);
          JwtService.assignHeaders(jwt);
          commit('SET_USER_DATA', data);
        })
        .catch(({ data }) => {
          commit('SET_ERROR_DATA', data)
        })
    },

    async login ({ commit, dispatch }, credentials) {
      await AuthService.login(credentials)
        .then(({ headers, data }) => {
          const jwt = headers['auth-token'];
          JwtService.setSessionStorage(jwt);
          JwtService.assignHeaders(jwt);
          dispatch('getUsersMenus', data._id);
          commit('SET_USER_DATA', data);
        })
        .catch(({ data }) => {
          commit('SET_ERROR_DATA', data);
        })
    },

    async pageRefresh ({ commit, dispatch  }, userString) {
      JwtService.assignHeaders(userString);
      const userId = JwtService.parseJwt(userString);
      await UsersService.getUser(userId)
        .then(({ data }) => {
          dispatch('getUsersMenus', userId);
          commit('SET_USER_DATA', data);
        })
        .catch(({ data }) => {
          commit('SET_ERROR_DATA', data);
        });
    },

    logout ({ commit }) {
      commit('LOGOUT');
    },

    async getUser({commit}, userId) {
      await UsersService.getUser(userId)
        .then(({ data }) => {
          commit('SET_USER_DATA', data);
        }).catch(({ data }) => {
          commit('SET_ERROR_DATA', data);
        });
    },

    async addMenu ({ dispatch }, newMenu) {
      const userId = newMenu.userId
      await UsersService.newUsersMenu(userId, newMenu);
      dispatch('getUser', userId);
      dispatch('getUsersMenus', userId);
    },

    async removeMenu ({ dispatch, commit }, menu) {
      const menuId = menu._id
      await MenuService.removeMenu(menuId);
      if (this.state.menu && menuId == this.state.menu._id) {
        commit('SET_MENU_ITEMS', null);
        commit('SET_USERS_MENU', null);
      }
      dispatch('getUsersMenus', menu.owner);
    },

    async removeMenuItem({ dispatch }, item) {
      const menuId = item.owner
      const menuItemId = item._id

      await MenuService.removeMenuItem(menuId, menuItemId)
      dispatch('getUsersMenuItems', menuId);
    },

    async getUsersMenus({ commit }, userId) {
      const { data } = await UsersService.getUsersMenus(userId);
      commit('SET_USERS_MENUS', data);
    },

    async getMenu({ commit, dispatch }, menuId) {
      await MenuService.getMenu(menuId)
        .then(({ data }) => {
          commit('SET_USERS_MENU', data);
          dispatch('getUsersMenuItems', menuId);
        })
        .catch(({ data }) => {
          commit('SET_ERROR_DATA', data)
        });
    },

    async newMenuItem({ dispatch }, newItem) {
      const menuId = newItem.menuId
      await MenuService.newMenuItem(menuId, newItem);
      dispatch('getUsersMenuItems', menuId);
    },

    async getUsersMenuItems({ commit }, menuId) {
      await MenuService.getMenuItems(menuId)
          .then(({ data }) => {
            commit('SET_MENU_ITEMS', data);
          })
          .catch(({ data }) => {
            commit('SET_ERROR_DATA', data)
          });
    },

    async getMenuItem({ commit },  item) {
      const menuId = item.owner
      const menuItemId = item._id
      const { data } = await MenuService.getMenuItem(menuId, menuItemId);
      commit('SET_MENU_ITEM', data);
    },

    async updateMenuItem({ dispatch }, updatedItem) {
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
