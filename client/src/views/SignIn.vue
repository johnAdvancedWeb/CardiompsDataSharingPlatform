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
          <a href="#" @click="showModal('resetPassword')">Forgotten password</a>
        </div>

        <button>Sign in</button>
      </form>
    </div>
  </div>

  <Modal :is-modal-visible="isModalVisible" @close-modal="closeModal">
    <ResetPassword v-if="actionDescription === 'resetPassword'"></ResetPassword>
    <TestComponent v-else></TestComponent>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
import ResetPassword from "@/components/ResetPassword";
import TestComponent from "@/components/TestComponent";

export default {
  name: 'SignIn',
  components: {
    Modal, ResetPassword, TestComponent
  },
  data() {
    return {
      isModalVisible: false,
      actionDescription: "",
    }
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
}
</script>

<style scoped>

</style>