<template>
  <div class="mx-auto p-5 navbar-container">
    <nav class="flex justify-between">
      <div>
        <ul class="flex flex-row">
          <li class="navbar-list-items-button"><button id="logo">Cardiomps DSP</button></li>
          <li class="navbar-list-items-routes"><router-link to="/">Home</router-link></li>
          <li class="navbar-list-items-routes"><router-link :to="{ name: 'Line' }">Add Experimental Data</router-link></li>
          <li class="navbar-list-items-routes"><router-link :to="{ name: 'Bar' }">View Experimental Data</router-link></li>
          <li class="navbar-list-items-routes"><router-link to="/about">Help and About</router-link></li>
        </ul>
      </div>

      <div>
        <ul class="flex flex-row">
          <li class="navbar-list-items-routes"><router-link class="button" :to="{ name: 'SignUp' }">Sign Up</router-link></li>
          <li class="navbar-list-items-routes"><router-link class="button" :to="{ name: 'SignIn' }">Sign In</router-link></li>
          <li><i class="navbar-list-items-theme fas fa-adjust" @click="changeTheme"></i></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lightModeEnabled: false,
    };
  },
  mounted: function() {
    // call the function under methods that gets saved theme from localstorage
    this.getThemeFromLocalStorage();
  },
  methods: {
    getThemeFromLocalStorage() {
      // get the theme stored in the local storage
      const currentTheme = localStorage.getItem('theme');

      if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        this.lightModeEnabled = true;
        if (currentTheme === 'dark') {
          document.documentElement.setAttribute('data-theme', currentTheme);
          this.lightModeEnabled = false;
        }
      }
    },
    changeTheme() {
      if(this.lightModeEnabled) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        this.lightModeEnabled = false;
      } else if(!this.lightModeEnabled) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        this.lightModeEnabled = true;
      }
    },
  }
}
</script>

<style scoped>

</style>