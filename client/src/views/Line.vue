<template>
  <div>
    <h3>Line Chart Example</h3>
    <div>
      <line-chart class="center"></line-chart>
    </div>
</div>
</template>

<script>
import LineChart from "@/components/charts/LineChart";

export default {
  components: {
    LineChart,
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
