<template>
  <div class="about">
    
    <div v-if="user">
      (What user sees)
    </div>
    <div v-else>
      (What guest sees)
    </div>

    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
