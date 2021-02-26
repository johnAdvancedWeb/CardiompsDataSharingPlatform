<template>
    <input type="file" @change="loadFile" required>
</template>
<script>
export default {
  methods: {
    loadFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();
      reader.readAsText(file,"UTF-8");
      reader.onload = progressEvent => this.$emit("fileLoaded", progressEvent.target.result);
      reader.onerror= progressEvent => this.$emit("fileLoaded", progressEvent.target.message);
    }
  }
}
</script>
>>>>>>> develop
