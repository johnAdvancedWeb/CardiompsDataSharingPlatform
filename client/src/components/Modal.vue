<template>
  <div class="modal-mask" v-if="isModalVisible" @click="closeModal">
    <span :plain="true" disabled>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["isModalVisible", "actionDescription"],
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
  background: rgba(0, 0, 0, 0.8);
}

span {
  width: 80%;
  height: 100%;
  position: relative;
  padding: 16px;
  //border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  box-sizing: border-box;
}

div {
  padding: 0 !important;
}

button {
  padding: 0 !important;
}

</style>