<template>
  <div id="login-container">
    <div id="login-header">Sign in below</div>
    <div id="login-form">
      <form>
        <div id="username-container">
          <label for="email">Email:</label><br>
          <input type="text" placeholder="Enter email here" id="email"><br>
        </div>

        <div id="password-container">
          <label for="password">Password:</label><br>
          <input type="password" placeholder="Enter password here" id="password"><br>
          <a href="#">Forgotten password</a>
        </div>

        <button>Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn"
}
</script>

<style scoped>

</style>