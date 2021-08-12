<template lang="html">
    <form class="loginForm" @submit.prevent="login">
      <div class="formInput">
        <label class="inputField" for="email">
          Email:
          <input v-model="email" type="email" name="email" placeholder="Email...">
        </label>
        <span v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }}</span>
      </div>
      <div class="formInput">
        <label class="inputField" for="password">
          Password:
          <input v-model="password" type="password" name="password" placeholder="Password...">
        </label>
        <span v-if="v$.password.$error"> {{ v$.password.$errors[0].$message }}</span>
      </div>
      
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
import useValidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { mapState } from 'vuex'
import ErrorComponent from '@/components/Error.vue'

export default {
  components: {
    ErrorComponent,
  },

  data () {
    return {
      v$: useValidate(),
      email: '',
      password: ''
    }
  },

  validations () {
    return {
      email: { required, email },
      password: { required, minLength: minLength(6) }
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

      this.v$.$validate()
      if( !this.v$.$error ) {
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
          if (this.$store.state.error) {
            this.$store.state.error = !this.$store.state.error;
            this.$store.state.error = '';
          }
      } else {
        return
      }
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

.formInput {
  display: flex;
  flex-direction: column;
}

.inputField {
  width: 100%;
  display: flex;
  align-items: center;
}

label {
  /* width: 100%; */
}

span {
  display: block;
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
  width: inherit;
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
