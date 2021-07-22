<template lang="html">
  <div class="add-item">
    <label for="add-item">Add a menu item below</label>
    <input type="text" id="add-item" v-model="title" placeholder="item title...">
    <input type="text" id="add-description" v-model="description" placeholder="item description...">
    <input type="text" id="add-price" v-model="price" placeholder="item $price...">
    <input type="text" id="add-categorie" v-model="categorie" placeholder="item categorie...">
    <div class="bottomLine">
      <label for="add-item">Add something delicious</label>
      <button @click="createNewItem">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddItemComponent',

  data() {
    return {
      title: '',
      description: '',
      price: '',
      categorie: '',
    }
  },

  methods: {
    createNewItem() {
      this.$store.
        dispatch('newMenuItem', {
          menuId: this.$store.state.menu._id,
          title: this.title,
          description: this.description,
          price: this.price,
          categorie: this.categorie,
          })

      this.title = ''
      this.description = ''
      this.price = ''
      this.categorie = ''

      this.$store.state.showAddItem = !this.$store.state.showAddItem;
    }
  },
}
</script>

<style lang="css" scoped>

.add-item {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 94vw;
  align-self: center;
}

.bottomLine {
  display: flex;
  justify-content: space-between;
}

label {
  color: #004aaf;
  padding: 5px;
  font: inherit;
  font-weight: bold;
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
</style>
