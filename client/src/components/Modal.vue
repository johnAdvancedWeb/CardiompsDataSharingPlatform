<template>
  <div class="modal-mask" v-if="isModalVisible" @click="closeModal">
    <button :plain="true" disabled>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["isModalVisible", "actionLoginOrRegister"],
  setup(props, context) {
    function closeModal() {
      context.emit("close-modal");
    }

    return { closeModal }
  },
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

button {
  width: 80%;
  height: auto;
  margin: 50px auto 0;
  position: relative;
  padding: 16px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  box-sizing: border-box;
}

</style>