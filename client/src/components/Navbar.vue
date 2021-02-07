<template>
<!--  <nav class="navbar navbar-expand-lg" id="navbar">-->
<!--    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"-->
<!--            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">-->
<!--      <span class="navbar-toggler-icon"></span>-->
<!--    </button>-->
<!--    <a class="navbar-brand" href="#" id="logo">Cardiomps DSP</a>-->

<!--    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">-->
<!--      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">-->

<!--        <li class="navbar-list-items-routes">-->
<!--          <router-link class="nav-link" to="/">Home</router-link>-->
<!--        </li>-->

<!--        <li class="navbar-list-items-routes">-->
<!--          <router-link class="nav-link" :to="{ name: 'Line' }">Add Experimental Data</router-link>-->
<!--        </li>-->

<!--        <li class="navbar-list-items-routes">-->
<!--          <router-link class="nav-link" :to="{ name: 'Bar' }">View Experimental Data</router-link>-->
<!--        </li>-->

<!--        <li class="navbar-list-items-routes">-->
<!--          <router-link class="nav-link" to="/about">Help and About</router-link>-->
<!--        </li>-->

<!--      </ul>-->

<!--      <router-link class="button btn my-2 my-sm-0" style="margin-right: 5px" :to="{ name: 'SignUp' }">Sign Up</router-link>-->
<!--      <router-link class="button btn my-2 my-sm-0" style="margin-right: 5px" :to="{ name: 'SignIn' }">Sign In</router-link>-->
<!--    </div>-->
<!--  </nav>-->

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      lightModeEnabled: false,
    };
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