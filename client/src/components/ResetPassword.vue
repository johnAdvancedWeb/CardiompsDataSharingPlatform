<template>
  <div id="login-container" @click.stop>
    <div id="login-header">Reset your password here</div>
    <div id="login-form">
      <form>
        <div id="username-container">
          <label for="email">Email:</label><br>
          <input type="text" placeholder="Enter email here" id="email"><br>
        </div>
        <button>Submit Reset Request</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
name: "ResetPassword"
}
</script>

<style scoped>
div {
  margin-top: 0 !important;
  cursor: default;
}

button {
  margin: 0 !important;
}
</style>