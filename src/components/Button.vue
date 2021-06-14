<template lang="html">
  <button :style="{ background: color }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
  },

  methods: {
    // onClick() {
    //   console.log('helloWorld')
    // }
  }
}
</script>

<style lang="css" scoped>

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
</style>
