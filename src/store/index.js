import { createStore } from 'vuex'
import axios from 'axios'
import MenuService from '@/menuService.js'
import UserService from '@/userService.js'

export default createStore({
  state: {
    loggedIn: false,
    user: null,
    menu: [],
    token: null,
    showAddItem: false,
  },
  mutations: {
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

    SET_MENU (state, menu) {
      state.menu = menu;
    },
  },
  actions: {
    register ({ commit }, credentials) {
      return axios
        .post('//localhost:5000/api/user/register', credentials)
        .then(({ data }) => {
          console.log('user data is', data)
          commit('SET_USER_DATA', data)
        })
    },

    async login ({ commit }, credentials) {
      await this.fetchMenu;
      return axios
        .post('//localhost:5000/api/user/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },

    logout ({ commit }) {
      commit('LOGOUT')
    },

    async fetchMenu ({ commit }) {
      const menu = await MenuService.getMenu();
      commit('SET_MENU', menu);
    },

    async pageRefresh ({ commit }) {
      const userString = localStorage.getItem('user')
      const token = JSON.parse(userString)
      const { data } = await UserService.getUser(token);
      commit('SET_USER_DATA', data);
    },
  },
  getters: {
    loggedIn (state) {
      return !!state.loggedIn
    },

    menuUserKey (state) {
      return state.user._id + state.user.menu
    }
  },
  modules: {
  }
})
