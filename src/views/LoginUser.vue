<template lang="html">
    <form class="loginForm" @submit.prevent="login">
      <input v-model="email" type="email" name="email" placeholder="Email...">
      <input v-model="password" type="password" name="password" placeholder="Password...">
      <ErrorComponent v-if="error"
                      text="Error Logging in..." />
      <div class="bottomLine">
        <router-link to="/register">
        Don't have an account? Register.
        </router-link>
        <button type="submit" name="button">
          Login
        </button>
      </div>
    </form>
</template>

<script>
import { mapState } from 'vuex'
import ErrorComponent from '@/components/Error.vue'

export default {
  components: {
    ErrorComponent,
  },

  data () {
    return {
      email: '',
      password: ''
    }
  },

  computed: {
    ...mapState({
      error: state => state.error,
      // loggedIn: state => state.loggedIn,
    })
    // error () {
    //   return this.$store.state.error
    // }
  },

  methods: {
    login () {
      if (this.$store.state.error) {
        this.$store.state.error = !this.$store.state.error;
        this.$store.state.error = '';
      }
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        }).then(() => {
          if (this.$store.state.error) {
            return
          } else {
            this.$router.push({ name: 'dashboard' })
          }
        })
    }
  },

  // created() {
  //   if (this.$store.state.loggedIn) {
  //     this.$router.push({ name: 'dashboard'})
  //   }
  // }
}
</script>

<style lang="css" scoped>

.loginForm {
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  width: 87vw;
  max-width: 400px;
  align-self: center;
}

.bottomLine {
  display: flex;
  justify-content: space-between;
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

a {
  color: #1658b4;
  font-weight: bold;
  margin: 5px;
  align-self: center;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: .2s ease-in;
}

a:hover {
  text-decoration-color: #1658b4;
}

</style>
