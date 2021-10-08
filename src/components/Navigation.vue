<template lang="html">
  <div id="nav">
    <div class="mainLinks">
      <router-link to="/" class="home">Home</router-link>
      <router-link v-if="loggedIn" to="/dashboard">Dashboard</router-link>
    </div>
    <div class="userLogin">
      <router-link v-if="!loggedIn" to="/register">Register</router-link>
      <router-link v-if="!loggedIn" to="/login">Login</router-link>
      <div v-else class="userStatus">
        <img class="profileIcon" src="@/assets/profile.svg" alt="profile icon">
        <h3>{{ user.username }}</h3>
        <button type="button" class="logoutButton" @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navigation',

  computed: {
    ...mapState({
      user: state => state.user,
      loggedIn: state => state.loggedIn,
    })
  },

  methods: {
    logout () {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style scoped>

#nav {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  width: 100vw;
  background: linear-gradient(to bottom, #fefeff, #ffffff00);
  height: 12vh;
  z-index: 100;
  align-items: center;
}

.userStatus {
  display: flex;
  align-items: center;
}

.profileIcon {
  height: 14px;
}

h3 {
  color: #004aaf;
  margin: 10px;
  font-size: .75rem;
}

#nav a {
  font-weight: bold;
  font-size: .75rem;
  color: #f0e4ec;
  text-decoration: none;
  background-color: #0070fc;
  padding: 5px;
  border-radius: 5px;
  margin: 5px;
  transition: .2s ease-in;
}

#nav a.router-link-exact-active {
  background-color: #004aaf;
}

#nav a:hover {
  background-color: #1a5ab6;
}

button {
  color: #f0e4ec;
  text-decoration: none;
  background-color: #0070fc;
  padding: 5px;

  border-radius: 5px;
  width: min-content;

  border: none;
  cursor: pointer;
  font: inherit;
  font-weight: bold;
  font-size: .75rem;
  transition: .2s ease-in;
}

button:hover {
  background-color: #004aaf;
}

</style>
