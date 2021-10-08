<template>
  <div class="mainApp">
    <Navigation />
    <img class="backgroundImage" src="@/assets/homePageBG.jpg" alt="restaurant table with menu coffee and dish"/>
    <img class="landingPageLogo" src="@/assets/logo.png" alt="main logo">
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'


export default {

  components: {
    Navigation,
  },

  watch: {
    '$route' () {
      if (this.$route.path === '/dashboard') {
        const landingPageLogo = document.querySelector('.landingPageLogo');
        const mainApp = document.querySelector('.mainApp');
        landingPageLogo.style.display = "none";
        mainApp.style.justifyContent = "flex-start";
      } else {
        const landingPageLogo = document.querySelector('.landingPageLogo');
        const mainApp = document.querySelector('.mainApp');
        landingPageLogo.style.display = "inherit";
        mainApp.style.justifyContent = "center";

      }
    }
  },

  created () {
    const userString = sessionStorage.getItem('user')
    if (userString) {
      this.$store.dispatch('pageRefresh', userString);
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.mainApp {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
}

.backgroundImage {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 30% 50%;
  opacity: .62;
  z-index: -2;
}

.landingPageLogo {
  width: 87vw;
  max-width: 400px;
  align-self: center;
  border-radius: 30px;
  opacity: .9;
}
</style>
