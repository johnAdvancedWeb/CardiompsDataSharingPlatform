<template>
  <div class="mx-auto p-5 navbar-container">
    <nav class="flex justify-between">
      <div>
        <ul class="flex flex-row">
          <li class="navbar-list-items-button"><button id="logo">Cardiomps DSP</button></li>
          <li class="navbar-list-items-routes"><router-link to="/">Home</router-link></li>
          <li class="navbar-list-items-routes"><router-link to="/about">About</router-link></li>
          <li class="navbar-list-items-routes"><router-link :to="{ name: 'Line' }">Line</router-link></li>
          <li class="navbar-list-items-routes"><router-link :to="{ name: 'Bar' }">Bar</router-link></li>
        </ul>
      </div>

      <div>
        <ul class="flex flex-row">
          <li class="navbar-list-items-button"><button>View Experimental Data</button></li>
          <li class="navbar-list-items-button"><button>Insert Experimental Data</button></li>
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