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
                <input type="text" placeholder="Enter email here" id="email" v-model="email" required><br>
              </div>
              <button @click="resetPassword">Submit Reset Request</button>
              <br>
              <br>
              <transition name="fade-in">
                <div class="error-container" v-if="resetError && resetError !== 'none'">
                  <p class="red-text">{{ resetError }}</p>
                </div>
                <div class="success-container" v-else-if="resetError === 'none'">
                  <p>Success! Check email inbox for <b>{{successEmail}}</b> to reset your password, then refresh this page to sign in.</p>
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
    const successEmail = ref(null);
    const resetError = ref(null);

    function resetPassword() {
      const info = {
        email: email.value,
      };

      firebaseAuthentication.sendPasswordResetEmail(info.email).then(function() {
        successEmail.value = info.email;
        resetError.value = 'none';
      }).catch(function(error) {
        resetError.value = error.message;
      });
    }

    return {email, successEmail, resetError, resetPassword};
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
