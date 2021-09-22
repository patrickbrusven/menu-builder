<template lang="html">
  <form class="registerForm" @submit.prevent="register">
    <FormInput  v-model="username" type="text" name="username" placeholder="username..." label="Username" />
    <FormInput v-model="email" type="text" name="email" placeholder="email..." label="Email"/>
    <FormInput class="password" v-model="password" type="password" placeholder="password..." name="password" label="Password"/>
    <ErrorComponent v-if="$store.state.error"
                    text="Error Registering..." />
    <div class="bottomLine">
      <router-link to="/login">
      Already have an account? Login.
      </router-link>
      <button type="submit" name="button">
        Register
      </button>
    </div>
  </form>
</template>

<script>
import ErrorComponent from '@/components/Error.vue'
import FormInput from '@/components/ui/FormInput.vue'

export default {
  name: 'RegisterUser',

  components: {
    ErrorComponent,
    FormInput,
  },

  data () {
    return {
      username: '',
      email: '',
      password: '',
    }
  },

  methods: {
    register () {
      if (this.$store.state.error) {
        this.$store.state.error = !this.$store.state.error;
        this.$store.state.error = '';
      }
      this.$store
        .dispatch('register', {
          username: this.username,
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
}
</script>

<style lang="css" scoped>
.registerForm {
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

/* input {
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
*/

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
