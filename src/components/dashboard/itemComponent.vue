<template>
  <div class="container">
    <p class="title">{{ item.title }}</p>
    <p class="description">{{ item.description }}</p>
    <p class="price">{{ item.price }}</p>
    <p class="categorie">{{ item.categorie }}</p>
  </div>
</template>

<script>

export default {
  name: 'itemComponent',

  props: {
    item: Object,
  },
}
</script>

<style scoped>

</style>
