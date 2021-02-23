<template>
  <nav class="navbar navbar-expand-lg" id="navbar">
    <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
            data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
        <i class="fas fa-bars" style="color: green !important;"></i>
      </span>
    </button>

    <a class="navbar-brand" href="#" id="dark-logo">
      <img src="../assets/images/Dark-Logo.gif" alt="Beating Heart Logo (dark)" class="d-inline-block logo-gif">
      Cardiomps DSP
    </a>
    <a class="navbar-brand" href="#" id="light-logo">
      <img src="../assets/images/Light-Logo.gif" alt="Beating Heart Logo (light)" class="d-inline-block logo-gif">
      Cardiomps DSP
    </a>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

        <li class="navbar-list-items-routes" v-if="user">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>

        <li class="navbar-list-items-routes" v-if="user">
          <router-link class="nav-link" :to="{ name: 'AddData' }">Add Experimental Data</router-link>
        </li>

        <li class="navbar-list-items-routes" v-if="user">
          <router-link class="nav-link" :to="{ name: 'QueryData' }">Query Experimental Data</router-link>
        </li>

        <li class="navbar-list-items-routes" v-if="user">
          <router-link class="nav-link" :to="{ name: 'MyPosts' }">My Posts</router-link>
        </li>

        <li class="navbar-list-items-routes">
          <router-link class="nav-link" to="/about">Help and About</router-link>
        </li>

      </ul>
      <br>
      <div v-if="user">
        <i class="fas fa-user"></i><span style="margin-left: 6px; margin-right: 14px">{{ user.displayName }}</span>
        <router-link @click="$emit('signOut')" class="button btn my-2 my-sm-0" to="#">Sign Out
        </router-link>
      </div>
      <div v-else>
        <router-link class="button btn my-2 my-sm-0" style="margin-right: 5px" :to="{ name: 'SignUp' }">Sign Up
        </router-link>
        <router-link class="button btn my-2 my-sm-0" style="margin-right: 5px" :to="{ name: 'SignIn' }">Sign In
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  data() {
    return {
      lightModeEnabled: false,
    };
  },

  props: {
    user: {
      type: Object,
      default: () => {
      },
    },
  },

  mounted: function () {
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
      if (this.lightModeEnabled) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        this.lightModeEnabled = false;
      } else if (!this.lightModeEnabled) {
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
