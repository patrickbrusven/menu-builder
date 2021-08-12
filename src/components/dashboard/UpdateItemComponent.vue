<template lang="html">
  <div class="update-item">
    <label for="update-title">Edit item title</label>
    <input v-model="title" type="text">
    <label for="update-title">Edit item description</label>
    <input v-model="description" type="text">
    <label for="update-title">Edit item price</label>
    <input v-model="price" type="text">
    <label for="update-title">Edit item categorie</label>
    <input v-model="categorie" type="text">
    <button @click="updateMenuItem" type="button" name="button">Submit</button>
    <Button @click="toggleShow"
            color="blue"
            text="close"/>
  </div>
</template>

<script>
import Button from  '@/components/Button.vue'

export default {
  name: 'UpdateItemComponent',

  components: {
    Button
  },

  data() {
    return {
      title: '',
      description: '',
      price: '',
      categorie: '',
    }
  },

  created() {
    this.title = this.$store.state.menuItem.title
    this.description = this.$store.state.menuItem.description
    this.price = this.$store.state.menuItem.price
    this.categorie = this.$store.state.menuItem.categorie
  },

  methods: {
    toggleShow() {
      this.$store.state.showEditItem = !this.$store.state.showEditItem
    },

    updateMenuItem() {
      this.$store.
        dispatch('updateMenuItem', {
          title: this.title,
          description: this.description,
          price: this.price,
          categorie: this.categorie,
          // map state above and reach with this.menu._id
          owner: this.$store.state.menu._id,
          _id: this.$store.state.menuItem._id,
        });

      this.$store.state.showEditItem = !this.$store.state.showEditItem
    },
  },
}
</script>

<style lang="css" scoped>
  .update-item {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    width: 94vw;
    align-self: center;
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
