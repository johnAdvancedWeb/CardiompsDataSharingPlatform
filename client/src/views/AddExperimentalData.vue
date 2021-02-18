<template>
  <div>

    <div v-if="user">
      (What user sees)
    </div>
    <div v-else>
      (What guest sees)
    </div>

    <p>Add experimental data form goes here</p>
  </div>
</template>

<script>
export default {
  name: "AddExperimentalData",

  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>

</style>
