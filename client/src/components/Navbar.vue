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
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
name: "Navbar"
}
</script>

<style scoped>

</style>