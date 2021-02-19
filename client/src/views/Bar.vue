<template>
  <div>
    <h3>Bar Chart Example</h3>
    <div>
      <bar-chart class="center"></bar-chart>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart";

export default {
  components: {
    BarChart,
  },

  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.center {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
