<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <div id="login-container" @click.stop>
          <div id="login-header">Reset your password here</div>
          <div id="login-form">
            <form @submit.prevent>
              <div id="username-container">
                <label for="email">Email:</label><br>
                <input type="text" placeholder="Enter email here" id="email" v-model="email"><br>
              </div>
              <button @click="resetPassword">Submit Reset Request</button>
              <br>
              <br>
              <transition name="fade-in">
                <div class="error-container" style="color: mediumspringgreen" v-if="statusMessage">
                  <p class="red-text">{{ statusMessage }}</p>
                </div>
              </transition>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {firebaseAuthentication} from "@/firebase/database";

export default {
  name: "ResetPassword",

  setup() {
    const email = ref("");
    const statusMessage = ref(null);

    function resetPassword() {
      const info = {
        email: email.value,
      };

      firebaseAuthentication.sendPasswordResetEmail(info.email).then(function() {
        statusMessage.value = 'Success! Check email inbox for '+info.email+' to find your "reset password" link, then refresh this page to sign in.';
      }).catch(function(error) {
        statusMessage.value = error.message;
      });
    }

    return {email, statusMessage, resetPassword};
  },
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
