<template>
  <div id="section-one">
    <div class="min-h-screen p-10">
      <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2">
        <!-- left -->
        <div class="md:flex md:flex-col md:justify-center">
          <h2 class="text-black text-2xl md:text-4xl font-bold mb-4">
            <p>What's new</p>
          </h2>
          <p class="text-sm md:text-lg">The latest cardiomyopathy news</p>
        </div>

        <!-- right -->
        <div class="" @click="showModal">
          <div class="latest-news-container"></div>
        </div>
      </div>

      <Modal :is-modal-visible="isModalVisible" @close-modal="closeModal">
        <Login v-if="actionDescription === 'viewData'"></Login>
        <TestComponent v-else></TestComponent>
      </Modal>
    </div>
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
      isModalVisible: true,
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

