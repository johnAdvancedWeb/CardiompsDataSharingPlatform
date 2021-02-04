<template>
  <div id="register-container">
    <div id="register-header">Sign up below</div>
    <div id="register-form">
      <form>
        <div id="username-container">
          <label for="email">Email:</label><br>
          <input type="text" placeholder="Enter email here" id="email"><br>
        </div>

        <div id="full-name-container">
          <label for="full-name">Full Name:</label><br>
          <input type="text" placeholder="Enter full name here" id="full-name"><br>
        </div>

        <div id="password-container">
          <label for="password">Password:</label><br>
          <input type="password" placeholder="Enter password here" id="password"><br>
        </div>

        <div id="confirm-password-container">
          <label for="confirm-password">Confirm Password:</label><br>
          <input type="password" placeholder="Confirm password here" id="confirm-password"><br>
        </div>

        <button>Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
name: "SignUp"
}
</script>

<style scoped>

</style>