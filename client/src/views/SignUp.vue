<template>
  <div id="register-container">
    <div id="register-header">Sign up below</div>
    <div id="register-form">
      <form @submit.prevent>
        <div id="username-container">
          <label for="email">Email:</label><br>
          <input type="email" placeholder='e.g., "asmith2021@gmail.com"' id="email" v-model="email" required><br>
        </div>

        <div id="full-name-container">
          <label for="full-name">Full Name:</label><br>
          <input type="text" placeholder='e.g., "Adam Smith"' id="full-name" v-model="name" minlength="6" required><br>
        </div>

        <div id="institution-container">
          <label for="institution">Institutional Affiliation:</label><br>
          <input type="text" placeholder='e.g., "The University of Oxford"' id="institution" minlength="6" required><br>
        </div>

        <div id="password-container">
          <label for="password">Password:</label><br>
          <input type="password" placeholder='e.g., "ACtcvun449MM4bIf"' id="password" v-model="password" minlength="6" required><br>
        </div>

        <div id="confirm-password-container">
          <label for="confirm-password">Confirm Password:</label><br>
          <input type="password" placeholder='e.g., "ACtcvun449MM4bIf"' id="confirm-password" v-model="confirmPassword" minlength="6" required><br>
        </div>

        <button @click="registerUser">Sign up</button>

        <transition name="fade-in">
          <div id="error-container" v-if="errorRegistration">
            <p class="red-text">{{ errorRegistration }}</p>
          </div>
        </transition>
      </form>
    </div>
  </div>
</template>

<script>
import {firebaseAuthentication} from "@/firebase/database";
import {ref, watch} from "vue";
import {useRouter} from "vue-router";

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

      if (doPasswordsMatch.value) {
        firebaseAuthentication.createUserWithEmailAndPassword(info.email, info.password).then((userCredentials) => {
          return userCredentials.user.updateProfile({
            displayName: info.displayName,
          }).then(() => {
            router.push("/sign-in");
          })
        }, error => {
          this.errorRegistration = error.message;
        });
      }
    }

    return {email, name, doPasswordsMatch, password, confirmPassword, errorRegistration, registerUser}
  },

}

</script>

<style scoped>
.fade-in-enter-from, .fade-in-leave-to {
  opacity: 0;
}

.fade-in-enter-active, .fade-in-leave-active {
  transition: opactiy 3s ease-in;
}
</style>
