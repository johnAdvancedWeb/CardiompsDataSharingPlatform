<template>
  <div>
    <div v-if="user">
      User is already signed in
    </div>

    <div v-else>
      <ion-grid>
        <ion-row>
          <ion-col size-md="6" offset-md="3">
            <div id="login-container">
              <div id="login-header">Sign in below</div>
              <div id="login-form">
                <form @submit.prevent>
                  <div id="username-container">
                    <label for="email">Email:</label><br>
                    <input type="email" placeholder="Enter email here" id="email" v-model="email" required><br>
                  </div>

                  <div id="password-container">
                    <label for="password">Password:</label><br>
                    <input type="password" placeholder="Enter password here" id="password" show-password v-model="password" required><br>
                    <a href="#" @click="showModal('resetPassword')">Forgotten password</a>
                  </div>

                  <div id="error-container" v-if="errorFirebase">
                    <p class="red-text">{{ errorFirebase }}</p>
                  </div>

                  <button plain type="success" @click="signIn">Sign in</button>
                </form>
              </div>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      
      <Modal :is-modal-visible="isModalVisible" @close-modal="closeModal">
        <ResetPassword v-if="actionDescription === 'resetPassword'"></ResetPassword>
      </Modal>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { firebaseAuthentication } from "@/firebase/database";
import { useRouter } from "vue-router";
import Modal from "@/components/Modal";
import ResetPassword from "@/components/ResetPassword";

export default {
  name: "SignIn",

  components: {
    Modal, ResetPassword
  },
  
  data() {
    return {
      isModalVisible: false,
      actionDescription: "",
    }
  },

  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    showModal(action) {
      this.actionDescription = action;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },

  setup() {
    const email = ref("");
    const password = ref("");
    const errorFirebase = ref(null);
    
    const router = useRouter();
    
    function signIn() {
      const info = {
        email: email.value,
        password: password.value,
      };
      
      firebaseAuthentication.signInWithEmailAndPassword(info.email, info.password).then(
          () => {
            router.push("/");
          },
          (error) => {
            errorFirebase.value = error.message;
          }
        );
    }
    return { email, password, errorFirebase, signIn };
  },
}
</script>


<style scoped>

</style>
