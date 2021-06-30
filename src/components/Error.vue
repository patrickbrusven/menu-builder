<template lang="html">
  <p class="errMessage">{{ text }} {{ $store.state.errorMessage }}</p>
</template>

<script>

export default {
  name: 'ErrorComponent',

  props: {
    text: String,
  },
}
</script>

<style lang="css" scoped>
  .errMessage {
    background-color: #ff8484a6;
    align-self: center;
    padding: 5px;
    color: #1658b4;
  }
</style>
