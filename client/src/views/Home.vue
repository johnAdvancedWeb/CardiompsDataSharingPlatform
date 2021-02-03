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
        <div class="">
          <div class="latest-news-container"></div>
        </div>
      </div>


<!--    <div class="bg-blue-400 min-h-screen flex items-center justify-center">-->
<!--       responsive grids-->
<!--         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">-->
<!--          <div class="bg-white p-3 rounded">1</div>-->
<!--          <div class="bg-white p-3 rounded">2</div>-->
<!--          <div class="bg-white p-3 rounded">3</div>-->
<!--          <div class="bg-white p-3 rounded">4</div>-->
<!--          <div class="bg-white p-3 rounded">5</div>-->
<!--          <div class="bg-white p-3 rounded">6</div>-->
<!--          <div class="bg-white p-3 rounded">7</div>-->
<!--          <div class="bg-white p-3 rounded">8</div>-->
<!--          <div class="bg-white p-3 rounded">9</div>-->
<!--        </div>-->

<!--      <div class="grid grid-cols-3 gap-2">-->
<!--        <div class="col-span-3 bg-white p-3 rounded">1</div>-->
<!--        <div class="bg-white p-3 rounded">2</div>-->
<!--        <div class="bg-white p-3 rounded">3</div>-->
<!--        <div class="bg-white p-3 rounded">4</div>-->
<!--        <div class="bg-white p-3 rounded">5</div>-->
<!--        <div class="row-span-2 bg-white p-3 rounded">6</div>-->
<!--        <div class="row-span-2 bg-white p-3 rounded">7</div>-->
<!--        <div class="bg-white p-3 rounded">8</div>-->
<!--        <div class="col-span-2 bg-white p-3 rounded">9</div>-->
<!--        <div class="bg-white p-3 rounded">10</div>-->
<!--      </div>-->
    </div>

    <br><button>This is a CSS styled button</button><br><br>
    <button class="primary-button" @click="showModal">This is a Tailwind styled button</button><br><br>
    <button class="primary-button" @click="showModal('viewData')">View Experimental Data</button><br><br>
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

