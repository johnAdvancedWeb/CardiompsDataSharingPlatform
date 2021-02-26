<template>
  <!-- if a user is not logged in -->
  <div class="md:flex md:flex-col md:justify-center" id="user-not-logged-in">
    <h2 class="text-black text-2xl md:text-4xl font-bold mb-1">
      <p>Unauthorised</p>
    </h2>
    <p class="text-sm md:text-lg mb-4">Please login or register to view this page</p>
  </div>
  <!-- above code ends here -->
</template>

<script>
export default {
  name: "Unauthorised"
}
</script>

<style scoped>

</style>
