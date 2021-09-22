<template lang="html">
    <form class="loginForm" @submit.prevent="login">
      <div class="formInput">
        <FormInput v-bind:class="{'errorPlaceholder' : v$.email.$error}" v-model="email" type="text" name="email" placeholder="email..." label="Email"/>
        <span v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }}</span>
      </div>
      <div class="formInput">
        <FormInput v-bind:class="{'errorPlaceholder' : v$.password.$error}" class="password" v-model="password" type="password" placeholder="password..." name="password" label="Password"/>
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
import FormInput from '@/components/ui/FormInput.vue'

export default {
  components: {
    ErrorComponent,
    FormInput,
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
    })
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

}
</script>

<style lang="css">

.errorPlaceholder + .secondelement {
  color: #ff4949;
}

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
  min-height: 70px;
}


span {
  display: block;
  color: #ff4949;
  padding-left: 5px;
  font-size: .9rem;
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
