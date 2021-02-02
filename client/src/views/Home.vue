<template>
  <div class="container">
    <button class="primary-button" @click="showModal">Show Modal</button><br>
    <button class="primary-button" @click="showModal('viewData')">View Experimental Data</button><br>
    <button class="primary-button" @click="showModal('addData')">Add Experimental Data</button><br>

    <Modal :is-modal-visible="isModalVisible" @close-modal="closeModal">
      <Login v-if="actionLoginOrRegister === 'viewData'"></Login>
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

