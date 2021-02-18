<template>
  <div>

    <div v-if="user">
      (What user sees)
    </div>
    <div v-else>
      (What guest sees)
    </div>

    <p>Query experimental data form goes here</p>
  </div>
</template>

<script>
export default {
  name: "QueryExperimentalData",

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
