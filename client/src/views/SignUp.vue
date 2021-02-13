<template>
  <div id="register-container">
    <div id="register-header">Sign up below</div>
    <div id="register-form">
      <form @submit.prevent>
        <div id="username-container">
          <label for="email">Email:</label><br>
          <input type="text" placeholder="Enter email here" id="email" v-model="email"><br>
        </div>

        <div id="full-name-container">
          <label for="full-name">Full Name:</label><br>
          <input type="text" placeholder="Enter full name here" id="full-name" v-model="name"><br>
        </div>

        <div id="password-container">
          <label for="password">Password:</label><br>
          <input type="password" placeholder="Enter password here" id="password" v-model="password"><br>
        </div>

        <div id="confirm-password-container">
          <label for="confirm-password">Confirm Password:</label><br>
          <input type="password" placeholder="Confirm password here" id="confirm-password" v-model="confirmPassword"><br>
        </div>

        <button @click="registerUser">Sign up</button>
        <div id="error-container" v-if="errorRegistration">
          <br>
          <p class="red-text">{{ errorRegistration }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {firebaseAuthentication} from "@/firebase/database";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "SignUp",

  data() {
    return {
      // email: "",
      // name: "",
      // doPasswordsMatch: false,
    }
  },

  setup() {
    const router = useRouter();
    const email = ref("");
    const name = ref("");
    const doPasswordsMatch = ref(false);
    const confirmPassword = ref("");
    const password = ref("");
    const errorRegistration = ref("");

    watch(confirmPassword, () => {
      if (password.value !== "" && confirmPassword.value !== "" && password.value !== confirmPassword.value) {
        errorRegistration.value = "Please make sure your passwords match";
        doPasswordsMatch.value = false;
      } else {
        errorRegistration.value = null;
        doPasswordsMatch.value = true;
      }
    });

    function registerUser() {
      const info = {
        email: email.value,
        displayName: name.value,
        password: password.value
      };

      if (doPasswordsMatch.value && !errorRegistration.value) {
        firebaseAuthentication().createUserWithEmailAndPassword(info.email, info.password).then((userCredentials) => {
          return userCredentials.user.updateProfile({
            displayName: info.displayName,
          }).then( () => {
            router.push("/sign-in");
          })
        }, error => {
          this.errorRegistration = error.message;
        });
      }
    }

    return { email, name, doPasswordsMatch, password, confirmPassword, errorRegistration, registerUser }
  },

}

</script>

<style scoped>

</style>
