<template lang="html">
  <div> Logged in value = {{ $store.state.loggedIn }} </div>
  <div v-if="loggedIn">
    <div> current user name = {{ $store.state.user.name }} </div>
    <div> current user email = {{ $store.state.user.email }} </div>
    <div> current user _id = {{ $store.state.user._id }} </div>
    <div> current user token = {{ $store.state.user.token }} </div>
    <div> current user menus = {{ $store.state.user.menus }} </div>
    <div> current user menu key = {{ menuUserKey }} </div>
  </div>
  <div> current menu value = {{ $store.state.menu }} </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name:'StateWatcher',

  computed: {
    ...mapGetters([
      'loggedIn',
      'menuUserKey'
    ])

  }
}
</script>

<style lang="css" scoped>

</style>
