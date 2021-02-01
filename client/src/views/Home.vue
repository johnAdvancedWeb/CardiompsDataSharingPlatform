<template>
  <div class="container">
    <button style="margin: auto" @click="showModal">Show Modal</button>
    <button style="margin: auto" @click="showModal('login')">Login</button>
    <button style="margin: auto" @click="showModal('register')">Register</button>

    <Modal :is-modal-visible="isModalVisible" @close-modal="closeModal">
      <Login v-if="actionLoginOrRegister === 'login'"></Login>
      <TestComponent v-else></TestComponent>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import TestComponent from "@/components/TestComponent";

export default {
  name: 'Home',
  components: {
    Modal, TestComponent
  },
  data() {
    return {
      isModalVisible: false,
      actionLoginOrRegister: "",
    }
  },
  methods: {
    showModal(action) {
      this.actionLoginOrRegister = action;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },

}
</script>

<style>

</style>
