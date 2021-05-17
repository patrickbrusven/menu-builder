import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['auth-token'] = `${
        userData
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
        .post('//localhost:5000/api/user/register', credentials)
        .then(({ data }) => {
          console.log('user data is', data)
          commit('SET_USER_DATA', data)
        })
    },

    login ({ commit }, credentials) {
      return axios
        .post('//localhost:5000/api/user/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },

    logout ({ commit }) {
      commit('LOGOUT')
    },
  },
  getters: {
    loggedIn (state) {
      return !!state.user
    }
  },
  modules: {
  }
})
