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
        <h3>Welcome back: {{ $store.state.user.username }}</h3>
        <button type="button" class="logoutButton" @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navigation',

  computed: mapGetters(['loggedIn']),

  methods: {
    logout () {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style scoped>

#nav {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  width: 100vw;
  background: linear-gradient(to bottom, #fefeff, #ffffff00);
  height: 16vh;
  z-index: 100;
}

.userStatus {
  display: flex;
}

h3 {
  color: #004aaf;
  text-decoration: underline;
  margin-right: 10px;
}

#nav a {
  font-weight: bold;
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
  margin-top: -5px;
  border-radius: 5px;
  width: min-content;
  align-self: center;
  border: none;
  cursor: pointer;
  font: inherit;
  font-weight: bold;
  transition: .2s ease-in;
}

button:hover {
  background-color: #004aaf;
}

</style>
