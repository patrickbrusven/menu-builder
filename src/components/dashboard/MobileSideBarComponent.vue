<template lang="html">
  <div class="container">
    <span @click="clickIcon('menus'), toggleMenu(true)" class="menuContianer">
      <img src="@/assets/menu.svg" alt="menus icon">
    </span>
    <span @click="clickIcon('menuItems'), toggleMenu(false)" class="menuItemsContainer">
      <img src="@/assets/menuItem.svg" alt="menu item icon">
    </span>
    <span @click="clickIcon('add')">
      <p>{{addMenu ? 'Menu' :'Item'}}</p>
      <img class="plusIcon" src="@/assets/plusicon.svg" alt="plus icon">
    </span>
    <span @click="clickIcon('restaurant')" class="userContainer">
      <img src="@/assets/restaurant.svg" alt="restuarnt icon">
    </span>
  </div>
</template>

<script>
export default {
  name: 'MobileSideBarComponent',

  props: [
    'addMenu'
  ],

  methods: {
    clickIcon(categorie) {
      this.$emit('click-icon', categorie);
    },

    toggleMenu(menusClick) {
      if(menusClick && this.addMenu || !menusClick && !this.addMenu) {
        return
      } else {
        this.$emit('toggle-menu');
      }
    }
  },

}
</script>

<style lang="css" scoped>
.container {
  position: fixed;
  bottom: 0;


  display: flex;

  justify-content: space-between;
  height: 10vh;
  width: 100vw;

  background: linear-gradient(to top, #fefeff, #ffffff00);
}

span {
  display: inline;
  height: 100%;
  width: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

}

span:not(:last-child) {
  border-right: solid 1px grey;
}

img {
  height: 42px;
  fill: blue;
}

.plusIcon {
  height: 30px;
}

p {
  font-size: .75rem;
}
</style>
