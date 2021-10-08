<template lang="html">
  <div class="update-item">
    <FormInput v-model="title" type="text" label="Edit item title" placeholder="item title..." />
    <FormInput v-model="description" type="text" label="Edit item description" placeholder="item description..." />
    <FormInput v-model="price" type="text" label="Edit item price" placeholder="item price..." />
    <FormInput v-model="categorie" type="text" label="Edit item categorie" placeholder="item price..." />
    <Button @click="updateMenuItem()"
            color="blue"
            text="submit"/>
    <Button @click="toggleShow()"
            color="blue"
            text="close"/>
  </div>
</template>

<script>
import FormInput from  '@/components/ui/FormInput.vue'
import Button from  '@/components/Button.vue'

export default {
  name: 'UpdateItemComponent',

  components: {
    FormInput,
    Button,
  },

  props: [
    'menuItemId',
    'menuId',
  ],

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
      this.$emit('toggle-show');
    },

    updateMenuItem() {
      this.$store.
        dispatch('updateMenuItem', {
          title: this.title,
          description: this.description,
          price: this.price,
          categorie: this.categorie,
          owner: this.menuId,
          _id: this.menuItemId,
        });

      this.toggleShow();
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
</style>
