<template>
  <div>
    <div v-if="user">

    </div>
    <div v-else>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div id="register-container">
              <div id="register-header">Sign up below</div>
              <div id="register-form">
                <form @submit.prevent>
                  <div id="username-container">
                    <label for="email">Email:</label><br>
                    <input type="email" placeholder='e.g., "asmith2021@gmail.com"' id="email" v-model="credential.email"
                           autocomplete="email" required><br>
                  </div>

                  <div id="full-name-container">
                    <label for="full-name">Full Name:</label><br>
                    <input type="text" placeholder='e.g., "Adam Smith"' id="full-name" v-model="credential.name"
                           minlength="6"
                           required><br>
                  </div>

                  <div id="institution-container">
                    <label for="institution">Institutional Affiliation:</label><br>
                    <input type="text" placeholder='e.g., "The University of Oxford"' id="institution" minlength="6"
                           v-model="credential.institution"
                           required><br>
                  </div>

                  <div id="password-container">
                    <label for="password">Password:</label><br>
                    <input type="password" placeholder='e.g., "ACtcvun449MM4bIf"' id="password"
                           v-model="credential.password"
                           minlength="6" autocomplete="new-password"
                           required><br>
                  </div>

                  <div id="confirm-password-container">
                    <label for="confirm-password">Confirm Password: {{ confirmPassword }} </label><br>
                    <input type="password" placeholder='e.g., "ACtcvun449MM4bIf"' id="confirm-password"
                           autocomplete="new-password" v-model="credential.confirmPassword" minlength="6" required><br>
                  </div>

                  <button @click="registerUser">Sign up</button>

                  <transition name="fade-in">
                    <div class="error-container" v-if="errorRegistration">
                      <p class="red-text">{{ errorRegistration }}</p>
                    </div>
                  </transition>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {firebaseAuthentication} from "@/firebase/database";

export default {
  name: "SignUp",
  props: {
    user: {
      type: Object,
      default: () => {
      }
    }
  },


  data() {
    return {
      credential: {
        name: "",
        password: "",
        email: "",
        confirmPassword: "",
        institution: "",
      },
      errorRegistration: ""
    }
  },

  methods: {
    registerUser() {
      console.log(this.credential);
      console.log(this.validation);
      console.log(this.doPasswordsMatch)
      if (this.doPasswordsMatch && this.validation) {
        firebaseAuthentication.createUserWithEmailAndPassword(this.credential.email, this.credential.password).then(userCredentials => {
          const user = userCredentials.user;
          user.updateProfile({displayName: this.credential.name});
          this.$router.push("/sign-in");
        }, error => {
          this.errorRegistration = error.msg;
        });
      }
    }
  },

  computed: {
    confirmPassword() {
      return this.credential.password !== this.credential.confirmPassword ? "Please make sure your passwords match" : "";
    }
    ,
    doPasswordsMatch() {
      return this.confirmPassword !== "Please make sure your passwords match";
    }
    ,
    validInputs() {
      const inputLengthArray = [];
      inputLengthArray.push(this.credential.name.length > 5)
      inputLengthArray.push(this.credential.email.length > 0)
      inputLengthArray.push(this.credential.password.length > 5)
      inputLengthArray.push(this.credential.institution.length > 5)

      return inputLengthArray;
    }
    ,
    validation: function () {
      let numOfValidInputs = this.validInputs.reduce((prev, i) => {
        return prev + i
      });
      console.log(numOfValidInputs);
      return numOfValidInputs === 4;
    }
  }
}
</script>

<style scoped>

</style>
